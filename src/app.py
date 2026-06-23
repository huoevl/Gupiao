from datetime import datetime
import json
from pathlib import Path
import threading
import tkinter as tk
from tkinter import messagebox, ttk
import unicodedata

from src.config import APP_STATE_FILE, FEATURE_FORMATS
from src.parsers import normalize_date
from src.service import ExportService


class ExportApp:
    def __init__(self, root: tk.Tk) -> None:
        self.root = root
        self.root.title("涨停数据导出工具")
        self.root.geometry("980x560")
        self.root.minsize(980, 560)
        self.root.resizable(True, True)

        self.service = ExportService()

        self.phone_var = tk.StringVar()
        self.password_var = tk.StringVar()
        self.remember_var = tk.BooleanVar(value=False)
        self.login_status_var = tk.StringVar(value="未登录（可直接使用本地数据）")
        self.date_var = tk.StringVar()
        self.feature_var = tk.StringVar(value=list(FEATURE_FORMATS.keys())[0])
        self.format_var = tk.StringVar()
        self.board_count_var = tk.StringVar(value="0")
        self._sort_reverse_map: dict[str, bool] = {}
        self._date_shift_in_progress = False

        self._load_app_state()
        self._init_default_date()
        self._build_ui()
        self._update_format_options()
        self.root.protocol("WM_DELETE_WINDOW", self._on_close)

    def _init_default_date(self) -> None:
        self.date_var.set(self.service.get_latest_trading_day())

    def _build_ui(self) -> None:
        frame = ttk.Frame(self.root, padding=16)
        frame.pack(fill=tk.BOTH, expand=True)

        ttk.Label(frame, text="手机号：").grid(row=0, column=0, sticky="w", pady=6)
        ttk.Entry(frame, textvariable=self.phone_var, width=24).grid(row=0, column=1, sticky="w", pady=6)
        ttk.Label(frame, text="密码：").grid(row=0, column=2, sticky="w", padx=(12, 4), pady=6)
        ttk.Entry(frame, textvariable=self.password_var, width=20, show="*").grid(
            row=0, column=3, sticky="w", pady=6
        )
        ttk.Button(frame, text="登录", command=self._login).grid(row=0, column=4, sticky="w", padx=8, pady=6)
        ttk.Checkbutton(frame, text="记住账号密码", variable=self.remember_var).grid(
            row=1, column=0, columnspan=2, sticky="w", pady=(0, 6)
        )
        ttk.Label(frame, textvariable=self.login_status_var).grid(
            row=1, column=2, columnspan=3, sticky="w", pady=(0, 6)
        )

        ttk.Label(frame, text="日期：").grid(row=2, column=0, sticky="w", pady=8)
        date_entry = ttk.Entry(frame, textvariable=self.date_var, state="readonly", width=24)
        date_entry.grid(row=2, column=1, sticky="w", pady=8)
        date_entry.bind("<Button-1>", lambda _event: self._pick_date())
        self.prev_day_button = ttk.Button(frame, text="上一日", command=self._go_prev_trading_day)
        self.prev_day_button.grid(
            row=2, column=2, sticky="w", padx=8, pady=8
        )
        self.next_day_button = ttk.Button(frame, text="下一日", command=self._go_next_trading_day)
        self.next_day_button.grid(
            row=2, column=3, sticky="w", padx=8, pady=8
        )

        ttk.Label(frame, text="导出功能：").grid(row=3, column=0, sticky="w", pady=8)
        feature_box = ttk.Combobox(
            frame,
            textvariable=self.feature_var,
            values=list(FEATURE_FORMATS.keys()),
            state="readonly",
            width=22,
        )
        feature_box.grid(row=3, column=1, sticky="w", pady=8)
        feature_box.bind("<<ComboboxSelected>>", lambda _event: self._update_format_options())
        ttk.Label(frame, text="板数：").grid(row=3, column=2, sticky="w", padx=(12, 4), pady=8)
        ttk.Entry(frame, textvariable=self.board_count_var, width=10).grid(row=3, column=3, sticky="w", pady=8)

        ttk.Label(frame, text="导出格式：").grid(row=4, column=0, sticky="w", pady=8)
        self.format_box = ttk.Combobox(
            frame,
            textvariable=self.format_var,
            state="readonly",
            width=22,
        )
        self.format_box.grid(row=4, column=1, sticky="w", pady=8)

        button_row = ttk.Frame(frame)
        button_row.grid(row=5, column=1, sticky="w", pady=10)
        ttk.Button(button_row, text="预览", command=self._preview).pack(side=tk.LEFT)
        ttk.Button(button_row, text="导出", command=self._export).pack(side=tk.LEFT, padx=8)

        ttk.Label(frame, text="数据预览（全部，可点击表头排序）：").grid(
            row=6, column=0, columnspan=5, sticky="w", pady=(8, 4)
        )

        table_frame = ttk.Frame(frame)
        table_frame.grid(row=7, column=0, columnspan=5, sticky="nsew")
        frame.grid_rowconfigure(7, weight=1)
        frame.grid_columnconfigure(1, weight=1)

        self.preview_table = ttk.Treeview(table_frame, show="headings", height=15)
        y_scroll = ttk.Scrollbar(
            table_frame, orient=tk.VERTICAL, command=self.preview_table.yview
        )
        x_scroll = ttk.Scrollbar(
            table_frame, orient=tk.HORIZONTAL, command=self.preview_table.xview
        )
        self.preview_table.configure(
            yscrollcommand=y_scroll.set,
            xscrollcommand=x_scroll.set,
        )

        self.preview_table.grid(row=0, column=0, sticky="nsew")
        y_scroll.grid(row=0, column=1, sticky="ns")
        x_scroll.grid(row=1, column=0, sticky="ew")
        table_frame.grid_rowconfigure(0, weight=1)
        table_frame.grid_columnconfigure(0, weight=1)

        self._clear_preview("请选择条件后点击“预览”")

    def _go_prev_trading_day(self) -> None:
        self._shift_trading_day(-1)

    def _go_next_trading_day(self) -> None:
        self._shift_trading_day(1)

    def _shift_trading_day(self, step: int) -> None:
        if self._date_shift_in_progress:
            return
        self._date_shift_in_progress = True
        current = self.date_var.get().strip()
        self._set_date_button_state("disabled")

        def worker() -> None:
            try:
                selected = current or self.service.get_latest_trading_day()
                next_date = self.service.shift_trading_day(selected, step)
                self.root.after(0, lambda: self._finish_shift_trading_day(next_date=next_date, error=None))
            except Exception as exc:
                self.root.after(0, lambda: self._finish_shift_trading_day(next_date=None, error=exc))

        threading.Thread(target=worker, daemon=True).start()

    def _finish_shift_trading_day(self, next_date: str | None, error: Exception | None) -> None:
        self._date_shift_in_progress = False
        self._set_date_button_state("normal")
        if error is not None:
            messagebox.showerror("日期切换失败", str(error), parent=self.root)
            return
        if next_date:
            self.date_var.set(next_date)

    def _set_date_button_state(self, state: str) -> None:
        self.prev_day_button.config(state=state)
        self.next_day_button.config(state=state)

    def _login(self) -> None:
        phone = self.phone_var.get().strip()
        try:
            password = self._prepare_password(self.password_var.get())
        except ValueError as exc:
            messagebox.showerror("登录失败", str(exc), parent=self.root)
            return
        if not phone or not password:
            messagebox.showerror("登录失败", "请输入手机号和密码", parent=self.root)
            return
        try:
            token = self.service.login(phone, password)
            self.login_status_var.set(f"已登录，Token 前8位：{token[:8]}")
            self._save_app_state(token=token)
            if not self.remember_var.get():
                self.password_var.set("")
        except Exception as exc:
            self.login_status_var.set("登录失败")
            messagebox.showerror("登录失败", str(exc), parent=self.root)

    @staticmethod
    def _prepare_password(raw_password: str) -> str:
        # 统一全角/半角，避免输入法导致的字符形态差异
        normalized = unicodedata.normalize("NFKC", raw_password).strip()
        if any("\u4e00" <= ch <= "\u9fff" for ch in normalized):
            raise ValueError("密码中检测到中文字符，请切换英文输入法后重新输入。")
        return normalized

    def _load_app_state(self) -> None:
        state = self._read_state_file(APP_STATE_FILE)
        token = str(state.get("token", "")).strip()
        remember = bool(state.get("remember_password", False))
        phone = str(state.get("phone", "")).strip()
        password = str(state.get("password", ""))

        self.remember_var.set(remember)
        if phone:
            self.phone_var.set(phone)
        if remember and password:
            self.password_var.set(password)
        if token:
            self.service.set_session_token(token)
            self.login_status_var.set(f"已加载上次登录Token，前8位：{token[:8]}")

    def _save_app_state(self, token: str = "") -> None:
        current = self._read_state_file(APP_STATE_FILE)
        final_token = token.strip() or str(current.get("token", "")).strip()
        remember = self.remember_var.get()
        state = {
            "token": final_token,
            "remember_password": remember,
            "phone": self.phone_var.get().strip() if remember else "",
            "password": self.password_var.get() if remember else "",
        }
        APP_STATE_FILE.write_text(
            json.dumps(state, ensure_ascii=False, indent=2),
            encoding="utf-8",
        )

    @staticmethod
    def _read_state_file(state_path: Path) -> dict:
        if not state_path.exists():
            return {}
        try:
            return json.loads(state_path.read_text(encoding="utf-8"))
        except (OSError, json.JSONDecodeError):
            return {}

    def _on_close(self) -> None:
        self._save_app_state()
        self.root.destroy()

    def _pick_date(self) -> None:
        try:
            from tkcalendar import Calendar
        except ImportError:
            messagebox.showerror(
                "缺少依赖",
                "未安装 tkcalendar，请先执行: pip install tkcalendar",
                parent=self.root,
            )
            return

        popup = tk.Toplevel(self.root)
        popup.title("选择日期")
        popup.transient(self.root)
        popup.grab_set()
        popup.resizable(False, False)

        try:
            current_date = datetime.strptime(self.date_var.get(), "%Y%m%d").date()
        except ValueError:
            current_date = datetime.now().date()

        calendar = Calendar(
            popup,
            selectmode="day",
            year=current_date.year,
            month=current_date.month,
            day=current_date.day,
            date_pattern="yyyy-mm-dd",
        )
        calendar.pack(padx=12, pady=12)

        def on_date_selected(_event: tk.Event) -> None:
            selected = calendar.get_date()
            self.date_var.set(normalize_date(selected))
            popup.destroy()

        calendar.bind("<<CalendarSelected>>", on_date_selected)

    def _update_format_options(self) -> None:
        feature = self.feature_var.get()
        formats = FEATURE_FORMATS.get(feature, [])
        self.format_box["values"] = formats
        if formats:
            self.format_var.set(formats[0])
        else:
            self.format_var.set("")

    def _get_board_count(self) -> int:
        raw_value = self.board_count_var.get().strip() or "0"
        try:
            board_count = int(raw_value)
        except ValueError as exc:
            raise ValueError("板数必须是大于等于0的整数") from exc
        if board_count < 0:
            raise ValueError("板数必须是大于等于0的整数")
        return board_count

    def _clear_preview(self, empty_tip: str = "") -> None:
        for row_id in self.preview_table.get_children():
            self.preview_table.delete(row_id)

        self.preview_table["columns"] = ("提示",)
        self.preview_table.heading("提示", text="提示")
        self.preview_table.column("提示", width=900, anchor=tk.W)
        if empty_tip:
            self.preview_table.insert("", tk.END, values=(empty_tip,))

    def _render_preview(self, columns: list[str], rows: list[list[str]]) -> None:
        for row_id in self.preview_table.get_children():
            self.preview_table.delete(row_id)

        self.preview_table["columns"] = columns
        for col in columns:
            self.preview_table.heading(col, text=col, command=lambda c=col: self._sort_by_column(c))
            width = 140
            if col in {"题材", "个股原因"}:
                width = 360
            self.preview_table.column(col, width=width, anchor=tk.W, stretch=True)

        if not rows:
            self._clear_preview("暂无数据")
            return

        for row in rows:
            self.preview_table.insert("", tk.END, values=row)

    def _sort_by_column(self, column: str) -> None:
        items = []
        for item_id in self.preview_table.get_children(""):
            values = self.preview_table.item(item_id, "values")
            columns = list(self.preview_table["columns"])
            if column not in columns:
                return
            col_index = columns.index(column)
            cell_value = values[col_index] if col_index < len(values) else ""
            items.append((self._to_sort_key(cell_value), item_id))

        reverse = self._sort_reverse_map.get(column, False)
        items.sort(key=lambda item: item[0], reverse=reverse)
        for idx, (_, item_id) in enumerate(items):
            self.preview_table.move(item_id, "", idx)
        self._sort_reverse_map[column] = not reverse

    @staticmethod
    def _to_sort_key(value: str):
        text = str(value).strip()
        cleaned = text.replace(",", "")
        multiplier = 1.0
        if cleaned.endswith("亿"):
            multiplier = 100000000.0
            cleaned = cleaned[:-1]
        elif cleaned.endswith("万"):
            multiplier = 10000.0
            cleaned = cleaned[:-1]
        if cleaned.endswith("%"):
            cleaned = cleaned[:-1]
        try:
            return (0, float(cleaned) * multiplier)
        except ValueError:
            return (1, text)

    def _preview(self) -> bool:
        date_value = self.date_var.get().strip()
        feature = self.feature_var.get().strip()
        if not date_value:
            messagebox.showerror("缺少日期", "请先选择日期", parent=self.root)
            return False
        if not feature:
            messagebox.showerror("参数错误", "请选择导出功能", parent=self.root)
            return False

        try:
            board_count = self._get_board_count()
            columns, rows = self.service.preview(feature, date_value, limit=None, board_count=board_count)
            self._render_preview(columns, rows)
            return True
        except Exception as exc:
            if self._try_relogin_if_needed(exc):
                try:
                    board_count = self._get_board_count()
                    columns, rows = self.service.preview(
                        feature,
                        date_value,
                        limit=None,
                        board_count=board_count,
                    )
                    self._render_preview(columns, rows)
                    return True
                except Exception as retry_exc:
                    exc = retry_exc
            self._clear_preview("预览失败")
            messagebox.showerror("预览失败", str(exc), parent=self.root)
            return False

    def _export(self) -> None:
        if not self._preview():
            return

        date_value = self.date_var.get().strip()
        feature = self.feature_var.get().strip()
        fmt = self.format_var.get().strip()
        if not date_value:
            messagebox.showerror("缺少日期", "请先选择日期", parent=self.root)
            return
        if not feature or not fmt:
            messagebox.showerror("参数错误", "请选择导出功能和导出格式", parent=self.root)
            return

        try:
            board_count = self._get_board_count()
            output_result = self.service.export(feature, fmt, date_value, board_count=board_count)
        except Exception as exc:
            messagebox.showerror("导出失败", str(exc), parent=self.root)
            return

        if isinstance(output_result, list):
            output_text = "\n".join(str(path) for path in output_result)
        else:
            output_text = str(output_result)
        messagebox.showinfo("导出成功", f"文件已生成：\n{output_text}", parent=self.root)

    def _try_relogin_if_needed(self, exc: Exception) -> bool:
        text = str(exc)
        should_relogin = (
            "登录失效" in text
            or "无可用 token" in text
            or "无法自动请求" in text
        )
        if not should_relogin:
            return False
        if not self.remember_var.get():
            return False
        phone = self.phone_var.get().strip()
        password = self.password_var.get()
        if not phone or not password:
            return False
        try:
            token = self.service.login(phone, self._prepare_password(password))
            self.login_status_var.set(f"已自动重登，Token 前8位：{token[:8]}")
            self._save_app_state(token=token)
            return True
        except Exception:
            return False
