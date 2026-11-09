# View 对象

代表 WPS PDF 窗口中的视图对象，控制文档的显示方式。

## 说明

通过 window.ActiveView 获取当前活动视图，或通过 window.Views.Item(i) 按索引访问。View 对象提供缩放、适应模式、旋转、页面跳转、全屏/阅读模式等显示控制能力，并支持在视图中显示浮动提示信息。

**View** 的接口成员见下列「方法」「属性」「事件」列表及各成员页。

## 示例


```JavaScript
var view = app.ActiveWindow.ActiveView;
var doc = view.Document;
console.log("活动文档: " + doc.Name);
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [GoToPage](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/View/member/GoToPage) | 跳转到指定页面。 |
| [GoToPageEx](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/View/member/GoToPageEx) | 跳转到指定页面，支持偏移和翻页动画。 |
| [ZoomIn](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/View/member/ZoomIn) | 放大视图。 |
| [ZoomOut](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/View/member/ZoomOut) | 缩小视图。 |
| [SetFitMode](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/View/member/SetFitMode) | 设置适应模式。 |
| [SetViewRotation](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/View/member/SetViewRotation) | 设置视图旋转角度。与 `ViewRotation` 属性读写等效，额外支持 `addHistory` 参数。 |
| [ShowTip](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/View/member/ShowTip) | 在视图中显示提示信息。 |

## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Document](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/View/member/Document) | 获取当前活动文档对象。注意：当前实现返回的是应用程序的活动文档，而非视图所绑定的文档。 |
| [Window](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/View/member/Window) | 获取当前活动窗口对象。注意：当前实现返回的是应用程序的活动窗口，而非视图所归属的窗口。 |
| [CurrentPageIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/View/member/CurrentPageIndex) | 获取当前显示的页码索引。 |
| [Zoom](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/View/member/Zoom) | 获取或设置缩放比例。 |
| [FullScreen](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/View/member/FullScreen) | 获取或设置是否全屏模式。 |
| [ReadingMode](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/View/member/ReadingMode) | 获取或设置是否阅读模式。 |
| [ContinuousRead](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/View/member/ContinuousRead) | 获取或设置是否连续阅读模式。 |
| [PlaySlide](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/View/member/PlaySlide) | 获取或设置是否幻灯片播放模式。 |
| [ViewRotation](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/View/member/ViewRotation) | 获取或设置视图旋转角度（仅旋转显示，不修改文档内容）。有效值为 `0`–`3`，详见 [SetViewRotation](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/View/member/SetViewRotation)。 |
| [FitMode](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/View/member/FitMode) | 获取或设置适应模式。 |
| [BackgroundMode](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/View/member/BackgroundMode) | 获取或设置背景模式。 |
| [IsDarkMode](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/View/member/IsDarkMode) | 获取当前是否为暗黑模式。 |
