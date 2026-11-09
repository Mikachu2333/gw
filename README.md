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
| VSTO 插件本体（C#） | `src/`，编译出 `gw_mika.dll` | Windows 上的 Word 与 WPS 文字 |
| VBA 脚本 | `VBA Script/`，42 个示例 | Windows（Word 与 WPS 的 VBA 宿主） |
| WPS JS 开发包 | `wps-js/`，产出 `dist/gw_mika-wps-js-<版本>.zip` | 需具备 JS 加载项能力的 WPS，并配置部署环境；不是可直接导入的安装包 |

插件支持 VBA 脚本，可以在此处`VBA Script`文件夹查看脚本示例。
VBA 脚本可以实现自动排版等复杂的且个性化的操作.

点此查看 [VBA指南](VBA指南.md)

### 安装

在仓库根目录执行 `make.bat` 即可产出安装包 `dist\gw_mika-Setup-<版本>.exe`
（需要 Visual Studio 的 Office/SharePoint 开发组件、.NET 4.8 targeting pack 与 Inno Setup）。
双击这个 exe、一路"下一步"即可：安装包会自动申请管理员权限、检查 .NET Framework 4.8、
补装 VSTO 运行库（可离线）、导入签名证书，并同时注册到 Word 与 WPS。
装完重开 Word/WPS，功能区里会出现「公文准式」选项卡。

Windows 版 Word/WPS 使用上述 EXE 安装。同一脚本产出的 `dist\gw_mika-wps-js-<版本>.zip`
是 JS 开发部署资源，不能直接通过“工具 → WPS 加载项”导入，也不包含本次修复的 VSTO 功能。

“高级设置”位于功能区“关于插件”按钮旁边，可直接设置公文字体。
“实验室”组中的“脚本”按钮用于打开外部 VBA 文件，“预设脚本”和“历史脚本”是旁边的独立菜单。

### 版本号维护

发版时只需改两处（对外显示三段，PE/程序集/VSTO 清单用四段；两处主版本前三段必须一致）：

1. `src/Properties/AssemblyInfo.cs` 的 `AssemblyVersion` 与 `AssemblyFileVersion`；
2. `wps-js/package.json` 的 `version`，然后在 `wps-js/` 下执行 `npm install` 刷新 `package-lock.json`。

其余位置不再手工维护：`<ApplicationVersion>` 从 `AssemblyInfo.cs` 派生；安装包名、注册表版本、PE 版本都由 `make.bat` 从构建出的 `gw_mika.dll` 读取；WPS JS 加载项里的版本号由 `wps-js/vite.config.js` 在 `npm run build` 时从 `package.json` 注入。源码里的 `0.0.0-dev` 只是调试占位符。`make.bat` 第 6 步会调用 `tools/check-version.ps1` 校验两侧版本一致，不一致即中止打包。

### 致谢与来源

本软件的根基是「小恐龙公文排版助手」，原作者已把原版开源，特此致谢：
<https://github.com/xkonglong/gw>

本版本不含收款码、赞赏入口与任何旧站点链接。

本插件完全免费，承诺不含任何恶意代码。

原版自 2026 年 10 月 21 日起开源，本二次开发版同样以 [MIT](MIT_License.md) 授权。
