## 「公文准式」(gw_mika) for Word/WPS —— 开源公文排版插件

根据《党政机关公文格式国家标准》(GB/T 9704—2012)的格式要求，快速设置页面版式、快速设置常用文字格式、插入常用符号、版头、版记、公文页码、红线等。

支持对文字的快速排版，中文首行缩进2字符、删除空白，断句重排等。

支持对文档盖章、可以在文档同目录下生成 PDF/ doc /图片 格式的副本。

可广泛用于各类规范文本的排版。

本仓库是开源二次开发版，源码、问题反馈与安装包都在这里：
<https://gitlab.com/Mikachu2333/gw>

### 三个运行形态

| 形态 | 位置 | 适用宿主 |
| --- | --- | --- |
| VSTO 插件本体（C#） | `src/`，编译出 `gw_mika.dll` | Windows Microsoft Word（保留旧 WPS 兼容代码） |
| VBA 脚本 | `VBA Script/`，42 个示例 | Windows（Word 与 WPS 的 VBA 宿主） |
| WPS JS 加载项 | `wps-js/`，Windows EXE 与 Linux 安装包 | Windows（含个人版）及 Linux 的 WPS 文字，需宿主具备 JS 加载项能力 |

插件支持 VBA 脚本，可以在此处`VBA Script`文件夹查看脚本示例。
VBA 脚本可以实现自动排版等复杂的且个性化的操作.

点此查看 [VBA指南](VBA指南.md)

### 安装

Windows 用户运行 `dist\gw_mika-Setup-<版本>.exe`。安装入口自动检测办公软件：

| 检测结果 | 自动选择 |
| --- | --- |
| 只有 WPS（包括个人版） | 当前用户安装 WPS JS 版，无需 VBA、VSTO 或代码签名证书 |
| 只有 Microsoft Word | 安装 Word VSTO 版，申请管理员权限并检查 .NET 4.8、VSTO 运行库 |
| Word 与 WPS 共存 | 分别安装 Word VSTO 版和 WPS JS 版 |

也可单独分发 `gw_mika-WPS-Setup-<版本>.exe` 或 `gw_mika-Word-Setup-<版本>.exe`。
安装前保存文档，安装后完全退出并重开宿主；不需要从 WPS“加载项”对话框导入 ZIP。
WPS JS 版合并当前用户的 `publish.xml`，保留其他加载项；升级不重复注册。
为避免两个“公文准式”选项卡，JS 安装器会停用本项目旧 WPS VSTO 注册，保留 Word 注册。
卸载 WPS 版时会移除自己的 JS 注册并恢复迁移前的 WPS 白名单／禁用名单状态。

Linux 用户解压 `gw_mika-WPS-Linux-<版本>.tar.gz`，进入解压目录执行：

```sh
sh install.sh
```

Linux 安装入口只安装 JS 版，需要 Python 3.8+，不需要 Node.js 或 sudo。
卸载运行 `sh install.sh --uninstall`；原安装包目录已删除时，可运行：

```sh
python3 ~/.local/share/Kingsoft/wps/jsaddons/.gw_mika/uninstall.py --uninstall
```

WPS 安装包本身必须具备文字 JS 加载项能力。安装器不会修改宏安全策略或 `oem.ini`。
**当前 JS 版提供页面、标题、正文、文字清理、页码和页眉处理；尚未移植 VSTO 全部功能及 42 个 VBA 脚本。**
Word 版“高级设置”位于“关于插件”旁边；“预设脚本”和“历史脚本”是“实验室”组的独立菜单。

### 构建与验证

仓库根目录运行 `make.bat`：需要 Visual Studio Office 开发组件、.NET Framework 4.8 targeting pack、
Inno Setup 6.3+/7、Node.js 和 npm。主入口调用 `tools/build.ps1`；证书检查、构建或打包失败都会返回非零。
构建日志保留在 `dist/logs`，不会清空整个 `dist`。只构建 WPS Windows/Linux 安装包可运行 `make.bat -WpsOnly`，无需 Visual Studio 或签名证书。

```powershell
python tools/test-js-installers.py
node tools/test-js-host.mjs
```

检查在临时目录中覆盖安装、升级、卸载、配置损坏、其他加载项保留和失败回滚，不修改真实 WPS 配置。
`gw_mika-Setup-<版本>.exe /DETECTONLY=<绝对文件路径> /VERYSILENT` 可仅记录宿主检测结果而不安装。

### 版本号维护

发版时只需改两处（对外显示三段，PE/程序集/VSTO 清单用四段；两处主版本前三段必须一致）：

1. `src/Properties/AssemblyInfo.cs` 的 `AssemblyVersion` 与 `AssemblyFileVersion`；
2. `wps-js/package.json` 的 `version`，然后在 `wps-js/` 下执行 `npm install` 刷新 `package-lock.json`。

其余位置不再手工维护：`<ApplicationVersion>` 从 `AssemblyInfo.cs` 派生；安装包名、注册表版本、PE 版本都由 `make.bat` 从构建出的 `gw_mika.dll` 读取；WPS JS 加载项里的版本号由 `wps-js/vite.config.mjs` 在 `npm run build` 时从 `package.json` 注入。源码里的 `0.0.0-dev` 只是调试占位符。`tools/build.ps1` 校验产物与 JS 版本一致，不一致即中止打包。

### 致谢与来源

本软件的根基是「小恐龙公文排版助手」，原作者已把原版开源，特此致谢：
<https://github.com/xkonglong/gw>

本版本不含收款码、赞赏入口与任何旧站点链接。

本插件完全免费，承诺不含任何恶意代码。

原版自 2026 年 10 月 21 日起开源，本二次开发版同样以 [MIT](MIT_License.md) 授权。
