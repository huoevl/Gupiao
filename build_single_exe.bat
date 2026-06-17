@echo off
setlocal

cd /d "%~dp0"
set "TOOLS_DIR=%~dp0.build_tools"
set "PYTHONPATH=%TOOLS_DIR%;%PYTHONPATH%"

echo [1/5] Install PyInstaller and Playwright into project folder...
if not exist "%TOOLS_DIR%" mkdir "%TOOLS_DIR%"
python -m pip install --upgrade --target "%TOOLS_DIR%" pyinstaller playwright
if errorlevel 1 goto :fail

echo [2/5] Install Chromium into Playwright package...
set "PLAYWRIGHT_BROWSERS_PATH=0"
python -m playwright install chromium
if errorlevel 1 goto :fail

echo [3/5] Clean old build folders...
if exist build rmdir /s /q build
if exist dist rmdir /s /q dist
if exist Gupiao.spec del /f /q Gupiao.spec

echo [4/5] Build one-file exe with browser...
python -m PyInstaller --noconfirm --clean --onefile --windowed --name Gupiao --add-data "_doc;_doc" --collect-all playwright --hidden-import=tkcalendar --hidden-import=babel.numbers --hidden-import=openpyxl --hidden-import=xmind --hidden-import=playwright --hidden-import=playwright.sync_api main.py
if errorlevel 1 goto :fail

echo [5/5] Build finished.
echo EXE path: dist\Gupiao.exe
echo Note: this exe includes Chromium and may start slower the first time.
pause
exit /b 0

:fail
echo Build failed. Check the error output above.
pause
exit /b 1
