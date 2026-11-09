# Window 对象

代表 WPS PDF 中的单个文档窗口。

## 说明

每个打开的文档对应一个 **Window** 对象，通过 `app.ActiveWindow` 获取当前活动窗口，或通过 `app.Windows.Item(i)` 按索引访问。每个窗口包含一个或多个视图（`Views`），并关联一个文档（`Document`）。

**Window** 的接口成员见下列「方法」「属性」「事件」列表及各成员页。
## 示例


```JavaScript
var doc = app.ActiveWindow.Document;
console.log("文档名称: " + doc.Name);
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Activate](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Window/member/Activate) | 激活窗口。 |
| [Close](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Window/member/Close) | 关闭窗口。 |
| [GoToPage](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Window/member/GoToPage) | 跳转到指定页面。 |

## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Document](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Window/member/Document) | 获取窗口关联的文档对象。 |
| [Left](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Window/member/Left) | 获取或设置窗口左边位置（像素）。 |
| [Top](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Window/member/Top) | 获取或设置窗口顶部位置（像素）。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Window/member/Width) | 获取或设置窗口宽度（像素）。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Window/member/Height) | 获取或设置窗口高度（像素）。 |
| [Caption](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Window/member/Caption) | 获取或设置窗口标题。 |
| [WindowState](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Window/member/WindowState) | 获取或设置窗口状态。枚举值及常量访问方式同 `Application.WindowState`。 |
| [Visible](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Window/member/Visible) | 获取或设置窗口是否可见。 |
| [Active](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Window/member/Active) | 获取窗口是否为当前活动窗口。 |
| [Index](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Window/member/Index) | 获取窗口在窗口集合中的索引。 |
| [Next](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Window/member/Next) | 获取下一个窗口对象。 |
| [Previous](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Window/member/Previous) | 获取上一个窗口对象。 |
| [CurrentViewPageIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Window/member/CurrentViewPageIndex) | 获取当前视图所在的页码索引。 |
| [ShowRibbon](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Window/member/ShowRibbon) | 获取或设置是否显示功能区（Ribbon）。 |
| [ActiveView](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Window/member/ActiveView) | 获取当前活动视图对象。 |
| [Views](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Window/member/Views) | 获取视图集合对象。 |
