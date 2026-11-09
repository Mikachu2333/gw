# Application 对象

`Application` 是 WPS PDF 的顶层对象，代表整个应用程序实例。

## 说明


整个 WPS PDF 应用程序的 API 对象结构是一个树状结构，而 **Application** 对象是树状结构的根对象；同时，**Application** 对象也提供与应用程序相关的各类访问接口，例如：

* 应用程序的设置选项、窗口与界面、版本号等相关信息
* 常见的属性及集合访问接口，如 **Documents**、**Windows**、**ActiveDocument**、**ActiveWindow**、**Clipboard**、**CommandBars** 等

## 示例


```JavaScript
var app = Application;
var name = app.Name;
console.log(name); // 输出取决于具体版本，如 "Kingsoft Pdf"
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Activate](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Application/member/Activate) | 激活应用程序窗口，将其置于前台。 |
| [Quit](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Application/member/Quit) | 退出应用程序。 |

## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Application/member/Name) | 获取应用程序名称。 |
| [Version](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Application/member/Version) | 获取应用程序版本号。 |
| [Visible](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Application/member/Visible) | 获取或设置应用程序窗口的可见性。读取时返回 `-1`（可见）或 `0`（隐藏）；写入时传入 `-1` 显示窗口，传入 `0` 隐藏窗口。 |
| [Caption](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Application/member/Caption) | 获取或设置应用程序窗口的标题栏文本。 |
| [Left](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Application/member/Left) | 获取或设置应用程序窗口左边位置（像素）。仅在窗口处于正常状态（非最大化/最小化）时写入有效。 |
| [Top](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Application/member/Top) | 获取或设置应用程序窗口顶部位置（像素）。仅在窗口处于正常状态（非最大化/最小化）时写入有效。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Application/member/Width) | 获取或设置应用程序窗口宽度（像素）。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Application/member/Height) | 获取或设置应用程序窗口高度（像素）。 |
| [WindowState](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Application/member/WindowState) | 获取或设置应用程序窗口的状态。 |
| [DisplayAlert](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Application/member/DisplayAlert) | 获取或设置是否显示警告对话框。设为 false 可以静默执行操作。 |
| [Documents](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Application/member/Documents) | 获取文档集合对象。 |
| [Windows](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Application/member/Windows) | 获取窗口集合对象。 |
| [ActiveDocument](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Application/member/ActiveDocument) | 获取当前活动的文档对象。 |
| [ActiveWindow](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Application/member/ActiveWindow) | 获取当前活动的窗口对象。 |
| [CommandBars](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Application/member/CommandBars) | 获取命令栏集合，用于自定义工具栏和菜单。 |
| [Clipboard](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Application/member/Clipboard) | 获取剪切板对象，用于操作系统剪切板。 |
