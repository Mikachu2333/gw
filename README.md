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
| WPS JS 加载项 | `wps-js/`，产出 `dist/gw_mika-wps-js-<版本>.zip` | WPS，**Linux 版 WPS 只认这一种** |

插件支持 VBA 脚本，可以在此处`VBA Script`文件夹查看脚本示例。
VBA 脚本可以实现自动排版等复杂的且个性化的操作.

点此查看 [VBA指南](VBA指南.md)

### 安装

到 [Releases/仓库](https://gitlab.com/Mikachu2333/gw) 下载 `gw_mika-Setup-<版本>.exe`，双击、一路"下一步"即可：
安装包会自动检查 .NET Framework 4.8、补装 VSTO 运行库（可离线）、把签名证书导入本机受信任根与受信任发布者，
并同时在 Word 与 WPS 里登记加载项。装完重开 Word/WPS，功能区里会出现「公文准式」选项卡。

想自己打包，在仓库根目录执行 `make.bat`（需要 Visual Studio 的 Office/SharePoint 开发组件与 Inno Setup）。

### 致谢与来源

本软件的根基是「小恐龙公文排版助手」，原作者已把原版开源，特此致谢：
<https://github.com/xkonglong/gw>

本版本不含收款码、赞赏入口与任何旧站点链接。

本插件完全免费，承诺不含任何恶意代码。

原版自 2026 年 10 月 21 日起开源，本二次开发版同样以 [MIT](MIT_License.md) 授权。
