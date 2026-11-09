# Zooms 对象

 **[Zoom](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Zoom/obj)** 对象的集合，该集合代表每个视图（如大纲视图、普通视图或页面视图）的缩放选项。

## 说明


使用 **Zooms** 属性返回 **Zooms** 集合。


## 示例


```JavaScript
/*本示例将活动窗口的缩放百分比设置为页面视图下的100%。*/
function test() {
    ActiveDocument.ActiveWindow.ActivePane.Zooms.Item(wdPrintView).Percentage = 100
}
```
 **Add** 方法不适用于 **Zooms** 集合。 **Zooms** 集合包括各种视图类型（如大纲、正常或页面布局）的单个 **Zoom** 对象。不能使用 **For Each** 循环枚举 **Zooms** 集合。

使用 **Zooms** (index)（其中 index 标识视图类型）返回单个 **Zoom** 对象。索引指定的视图类型可以是以下 **WdViewType** 常量之一： **wdMasterView** 、 **wdNormalView** 、 **wdOutlineView** 、 **wdPrintPreview** 、 **wdPrintView** 或 **wdWebView** 。



```JavaScript
/*本示例设置活动窗口的放大倍数，以便可以看到整个页面。*/
function test() {
    ActiveDocument.ActiveWindow.ActivePane.Zooms.Item(wdPrintView).PageFit = wdPageFitFullPage
}
```
还可以使用 **View** 对象的 **Zoom** 属性返回单个 **Zoom** 对象。



```JavaScript
/*本示例将第一个窗口的第一个窗格的缩放百分比设置为页面视图下的110%。*/
function test() {
    let zoom = Windows.Item(1).Panes.Item(1).Zooms.Item(wdPrintView)
    zoom.Percentage = 110
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Zooms/member/Item) | 返回指定的 **Zoom** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Zooms/member/Application) | 返回一个代表 WPS 应用程序的 [Application ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/obj)对象。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Zooms/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Zooms/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **Zooms** 对象的父对象。 |