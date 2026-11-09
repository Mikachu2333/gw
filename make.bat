@echo off
setlocal EnableExtensions DisableDelayedExpansion
chcp 65001 >nul
rem 复杂参数、证书访问与失败传播统一交给 PowerShell，不在批处理块中嵌套解释器。
where pwsh.exe >nul 2>&1
if errorlevel 1 (
    powershell.exe -NoLogo -NoProfile -NonInteractive -ExecutionPolicy Bypass -File "%~dp0tools\build.ps1" %*
) else (
    pwsh.exe -NoLogo -NoProfile -NonInteractive -ExecutionPolicy Bypass -File "%~dp0tools\build.ps1" %*
)
exit /b %errorlevel%
