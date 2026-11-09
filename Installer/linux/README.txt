公文准式 · WPS Linux 版

解压本目录后，在当前使用 WPS 的用户终端执行：
    sh install.sh

需要 Python 3.8 或更新版本；不需要 Node.js、VBA 或 sudo。
安装器会合并 ~/.local/share/Kingsoft/wps/jsaddons/publish.xml，保留其他加载项。
安装后请完全退出 WPS 再打开 WPS 文字。

升级：解压新版本，再执行 sh install.sh。
卸载：执行 sh install.sh --uninstall。
如果安装包目录已删除，也可以执行：
    python3 ~/.local/share/Kingsoft/wps/jsaddons/.gw_mika/uninstall.py --uninstall

本包要求 WPS 安装版本具备文字 JS 加载项能力；注册不会补装缺失的 WPS 组件。
本 JS 版包含页面、标题、正文、文字清理、页码和页眉处理功能。
VSTO 的其他功能及 VBA Script 目录里的 42 个 VBA 脚本尚未迁移到 JS 版。
