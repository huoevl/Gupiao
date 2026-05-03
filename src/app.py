import tkinter as tk
from tkinter import messagebox, simpledialog, ttk

from src.config import FEATURE_FORMATS
from src.parsers import normalize_date
from src.service import ExportService


class ExportApp:
    def __init__(self, root: tk.Tk) -> None:
        self.root = root
        self.root.title("涨停数据导出工具")
        self.root.geometry("540x220")
        self.root.resizable(False, False)

        self.service = ExportService()

        self.date_var = tk.StringVar()
        self.feature_var = tk.StringVar(value="Gpt规则")
        self.format_var = tk.StringVar()

        self._init_default_date()
        self._build_ui()
        self._update_format_options()

    def _init_default_date(self) -> None:
        available = self.service.get_available_dates()
        if available:
            self.date_var.set(available[-1])

    def _build_ui(self) -> None:
        frame = ttk.Frame(self.root, padding=16)
        frame.pack(fill=tk.BOTH, expand=True)

        ttk.Label(frame, text="日期：").grid(row=0, column=0, sticky="w", pady=8)
        date_entry = ttk.Entry(frame, textvariable=self.date_var, state="readonly", width=24)
        date_entry.grid(row=0, column=1, sticky="w", pady=8)
        ttk.Button(frame, text="选择日期", command=self._pick_date).grid(
            row=0, column=2, sticky="w", padx=8, pady=8
        )

        ttk.Label(frame, text="导出功能：").grid(row=1, column=0, sticky="w", pady=8)
        feature_box = ttk.Combobox(
            frame,
            textvariable=self.feature_var,
            values=list(FEATURE_FORMATS.keys()),
            state="readonly",
            width=22,
        )
        feature_box.grid(row=1, column=1, sticky="w", pady=8)
        feature_box.bind("<<ComboboxSelected>>", lambda _event: self._update_format_options())

        ttk.Label(frame, text="导出格式：").grid(row=2, column=0, sticky="w", pady=8)
        self.format_box = ttk.Combobox(
            frame,
            textvariable=self.format_var,
            state="readonly",
            width=22,
        )
        self.format_box.grid(row=2, column=1, sticky="w", pady=8)

        ttk.Button(frame, text="导出", command=self._export).grid(
            row=3, column=1, sticky="w", pady=16
        )

    def _pick_date(self) -> None:
        initial_value = self.date_var.get() or "20260101"
        user_input = simpledialog.askstring(
            "选择日期",
            "请输入日期（YYYY-MM-DD 或 YYYYMMDD）",
            initialvalue=initial_value,
            parent=self.root,
        )
        if not user_input:
            return
        try:
            self.date_var.set(normalize_date(user_input))
        except ValueError as exc:
            messagebox.showerror("日期错误", str(exc), parent=self.root)

    def _update_format_options(self) -> None:
        feature = self.feature_var.get()
        formats = FEATURE_FORMATS.get(feature, [])
        self.format_box["values"] = formats
        if formats:
            self.format_var.set(formats[0])
        else:
            self.format_var.set("")

    def _export(self) -> None:
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
            output_path = self.service.export(feature, fmt, date_value)
        except Exception as exc:
            messagebox.showerror("导出失败", str(exc), parent=self.root)
            return

        messagebox.showinfo("导出成功", f"文件已生成：\n{output_path}", parent=self.root)
