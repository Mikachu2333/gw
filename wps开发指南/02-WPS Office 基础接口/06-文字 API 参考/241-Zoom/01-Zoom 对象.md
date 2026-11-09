# Zoom 对象

包含窗口或窗格的显示比例选项（例如，显示比例）。 **Zoom** 对象是 **Zooms** 集合的一个成员。

## 说明


使用 **View** 对象的 **Zoom** 属性可返回一个 **Zoom** 对象。


## 示例


```JavaScript
/*本示例将活动窗口的显示比例设置为 110%。*/
function test() {
    ActiveDocument.ActiveWindow.View.Zoom.Percentage = 110
}
```
使用 **Zooms** (*Index*) 可返回一个 **Zoom** 对象，其中 *Index* 标识视图类型。由 Index 指定的视图类型可以是下列 **[WdViewType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdViewType)** 常量之一： **[wdMasterView](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdViewType)** 、 **[wdNormalView](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdViewType)** 、 **[wdOutlineView](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdViewType)** 、 **[wdPrintPreview](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdViewType)** 、 **[wdPrintView](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdViewType)** 或 **[wdWebView](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdViewType)** 。



```JavaScript
/*本示例设置活动窗口的缩放比例，以便看到整个页面。*/
function test() {
    ActiveDocument.ActiveWindow.ActivePane.Zooms.Item(wdPrintView).PageFit = wdPageFitFullPage
}
```
 **Add** 方法不可用于 **Zooms** 集合。对于每个不同的视图类型（如大纲视图、普通视图或页面视图）， **Zooms** 集合都只包含一个 **Zoom** 对象。


{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Zoom/member/Application) | 返回一个代表 WPS 应用程序的 [Application ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/obj)对象。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Zoom/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [PageColumns](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Zoom/member/PageColumns) | 返回或设置需要在页面视图或打印预览中在屏幕上并排显示的页数。 **Long** 类型，可读写。 |
| [PageFit](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Zoom/member/PageFit) | 返回或设置窗口的显示比例，以便能查看整页或整个页宽的范围。 **WdPageFit** 类型，可读写。 |
| [PageRows](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Zoom/member/PageRows) | 返回或设置在页面视图或打印预览中在屏幕上垂直显示的页数。 **Long** 类型，可读写。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Zoom/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **Zoom** 对象的父对象。 |
| [Percentage](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Zoom/member/Percentage) | 用百分比的形式返回或设置窗口的显示比例。 **Long** 类型，可读写。 |