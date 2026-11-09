# Application 对象

WPS加载项

## 说明

**Application** 为 WPS 加载项 JS Core 的默认根对象。浏览器创建后，脚本中可通过 `Application` 或 `wps`（别名）访问同一对象。

Application 的成员由多组合并注册：`KJCApiRoot`、`KSOJsRoot`、`JSApiRoot`、`KJsServiceApiEx` 以及各组件 `Kj*CustomApplication` 等。

下列示例展示如何调用 `ShowDialog` 创建并显示 Web 对话框：

```javascript
Application.ShowDialog("https://www.wps.cn", "示例", 300, 200, true)
```

下列示例展示如何访问 **FileSystem** 对象：

```javascript
let fs = Application.FileSystem
```

本文件定义了WPS加载项中可用的API。

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [UpdateRibbon](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Application/member/UpdateRibbon) | 刷新自定义 Ribbon 界面。 |
| [CreateTaskPane](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Application/member/CreateTaskPane) | 创建一个自定义任务面板。 |
| [GetTaskPane](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Application/member/GetTaskPane) | 根据 ID 获取已创建的任务面板。 |
| [CreateWebDialog](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Application/member/CreateWebDialog) | 创建一个 Web 对话框窗口。 |
| [GetWebDialog](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Application/member/GetWebDialog) | 根据 ID 获取已创建的 Web 对话框。 |
| [ShowDialog](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Application/member/ShowDialog) | 创建并立即显示一个 Web 对话框。 |
| [ShowDialogEx](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Application/member/ShowDialogEx) | 创建并立即显示一个 Web 对话框（扩展版）。 |
| [CreateDataBuffer](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Application/member/CreateDataBuffer) | 创建一个共享数据缓冲区。 |
| [GetDataBuffer](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Application/member/GetDataBuffer) | 根据 ID 获取已创建的数据缓冲区。 |
| [DeleteDataBuffer](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Application/member/DeleteDataBuffer) | 删除指定 ID 的数据缓冲区。 |
| [GetBrowserWindow](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Application/member/GetBrowserWindow) | 获取指定浏览器关联的窗口对象。 |
| [alert](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Application/member/alert) | 弹出 alert 警告框。 |
| [confirm](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Application/member/confirm) | 弹出确认框；返回值为 bool，表示用户确认或取消。 |
| [AddCustomFunction](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Application/member/AddCustomFunction) | 注册一个可在单元格公式中使用的自定义函数（仅 WPS 表格）。 |

## 属性

| **名称** | **说明** |
| :------ | :------- |
| [ApiEvent](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Application/member/ApiEvent) | 返回 **[ApiEvent](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/ApiEvent/obj)** 对象，用于事件订阅。 |
| [BrowserGroups](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Application/member/BrowserGroups) | 所有浏览器分组的集合。 |
| [BrowserWindow](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Application/member/BrowserWindow) | 当前浏览器页面关联的窗口对象。 |
| [CurrentWPSAddIn](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Application/member/CurrentWPSAddIn) | 当前正在执行脚本的加载项。 |
| [Env](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Application/member/Env) | 返回 **[Env](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Env/obj)** 对象，用于系统环境相关操作。 |
| [FileSystem](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Application/member/FileSystem) | 返回 **[FileSystem](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/FileSystem/obj)** 对象，提供文件与目录操作。 |
| [OAAssist](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Application/member/OAAssist) | 返回 **[OAAssist](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/OAAssist/obj)** 对象，提供 OA 助手扩展能力。 |
| [PluginStorage](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Application/member/PluginStorage) | 返回 **[PluginStorage](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/PluginStorage/obj)** 对象；用法类似 LocalStorage 但不持久化，同一加载项内多页面可共享（需浏览器分组具备 GroupStorage）。 |
| [ribbonUI](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Application/member/ribbonUI) | 返回只读的 **[RibbonUI](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/customize-ribbon/ribbonui-object)** 对象，用于操作当前加载项自定义功能区。 |
| [ThisBrowser](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Application/member/ThisBrowser) | 当前正在执行脚本的浏览器页面。 |
| [WPSAddIns](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Application/member/WPSAddIns) | 所有已安装的 WPS 加载项的集合。 |
