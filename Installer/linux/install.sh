#!/bin/sh
# Linux 入口只安装 JS 版，不需要 VBA、Node.js 或管理员权限。
set -eu
if [ "$(uname -s)" != Linux ]; then
    printf '%s\n' 'Windows 用户请运行公文准式 WPS EXE 安装包。' >&2
    exit 1
fi
if ! command -v python3 >/dev/null 2>&1; then
    printf '%s\n' '需要 Python 3.8 或更新版本，请先通过系统软件管理器安装 python3。' >&2
    exit 1
fi
script_dir=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
exec python3 "$script_dir/install.py" "$@"
