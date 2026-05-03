import tkinter as tk

from src.app import ExportApp


def main() -> None:
    root = tk.Tk()
    ExportApp(root)
    root.mainloop()


if __name__ == "__main__":
    main()
