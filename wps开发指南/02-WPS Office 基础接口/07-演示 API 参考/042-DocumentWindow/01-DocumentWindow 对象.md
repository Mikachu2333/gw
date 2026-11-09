# DocumentWindow 对象

代表一个文档窗口。 **DocumentWindow** 对象是 **[DocumentWindows](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DocumentWindows/obj)** 集合的成员。 **[DocumentWindows](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DocumentWindows/obj)** 集合包含所有打开的文档窗口。

## 说明


使用 **Presentation** 属性返回指定文档窗口中当前运行的演示文稿。  
使用 **Selection** 属性可返回选定范围。
使用 **SplitHorizontal** 属性返回普通视图中大纲窗格所占屏幕宽度的百分比。  
使用 **SplitVertical** 属性返回普通视图中幻灯片窗格所占屏幕高度的百分比。  
使用 **View** 属性返回指定文档窗口中的视图。


## 示例


```JavaScript
/*本示例激活第二个文档窗口。*/
function test() {
    Windows.Item(2).Activate()
}
```


```JavaScript
/*本示例将活动窗口最大化。*/
function test() {
    ActiveWindow.WindowState = ppWindowMaximized
}
```


```JavaScript
/*本示例激活窗格三，是备注窗格。*/
function test() {
    ActiveWindow.Panes(3).Activate()
}
```


```JavaScript
/*以下示例检查活动窗格是否为幻灯片窗格。如果不是，则激活活动窗口的第一个窗格。*/
function test() {
    let pane = ActiveWindow.ActivePane
    if (pane.ViewType !== ppViewSlide) {
        ActiveWindow.Panes(1).Activate()
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Activate](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DocumentWindow/member/Activate) | 激活指定的对象 |
| [Close](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DocumentWindow/member/Close) | 关闭指定的文档窗口。 |
| [NewWindow](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DocumentWindow/member/NewWindow) | 打开一个包含指定窗口中所显示文档的新窗口。返回一个代表新窗口的 **DocumentWindow** 对象。 |
| [PointsToScreenPixelsX](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DocumentWindow/member/PointsToScreenPixelsX) | 将横向度量值的单位由磅值转换为像素。可用于返回文本框或形状的横向屏幕位置。以类型 **Single** 返回转换后的度量值。 |
| [PointsToScreenPixelsY](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DocumentWindow/member/PointsToScreenPixelsY) | 将纵向度量值的单位由磅值转换为像素。可用于返回文本框或形状的纵向屏幕位置。以类型 **Single** 返回转换后的度量值。 |
| [RangeFromPoint](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DocumentWindow/member/RangeFromPoint) | 返回位于某一点（由屏幕上的位置坐标对指定）的 **Shape** 对象。如果在指定的坐标对上没有形状，则此方法将返回 **null** 。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Active](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DocumentWindow/member/Active) | 返回指定的窗格或窗口是否处于激活的状态。只读 **MsoTriState** 类型。 |
| [ActivePane](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DocumentWindow/member/ActivePane) | 返回一个代表文档窗口中活动窗格的 **Pane** 对象。只读。 |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DocumentWindow/member/Application) | 返回一个Application对象，该对象表示指定对象的创建者。 |
| [Caption](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DocumentWindow/member/Caption) | 返回在文档窗口标题栏中显示的文本。只读。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DocumentWindow/member/Height) | 返回或设置指定对象的高度（以磅为单位）。读/写。 |
| [Left](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DocumentWindow/member/Left) | 返回或设置 **Single** 值，表示文档窗口的左边缘到应用程序窗口的工作区左边缘的距离，以磅为单位。读/写。 |
| [Panes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DocumentWindow/member/Panes) | 返回一个 **Panes** 集合，该集合代表文档窗口中的窗格（窗格：文档窗口的一部分，以垂直或水平条为界限并由此与其他部分分隔开。）只读。 |
| [Presentation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DocumentWindow/member/Presentation) | 返回一个 **Presentation** 对象，该对象代表创建指定文档窗口或幻灯片放映窗口的演示文稿。只读。 |
| [Selection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DocumentWindow/member/Selection) | 返回一个 **Selection** 对象，该对象代表指定的文档窗口中的选定内容。只读。 |
| [Top](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DocumentWindow/member/Top) | 返回或设置一个 **Single** 类型值，表示应用程序窗口的工作区的上边缘到文档、应用程序和幻灯片放映窗口的上边缘的距离，以磅为单位。读/写。 |
| [View](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DocumentWindow/member/View) | 返回一个代表指定文档窗口中视图的 **View** 对象。只读。 |
| [ViewType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DocumentWindow/member/ViewType) | 返回或设置指定文档窗口中所包含的视图类型。可读/写。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DocumentWindow/member/Width) | 返回或设置指定对象的宽度（以磅为单位）。读/写。 |
| [WindowState](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DocumentWindow/member/WindowState) | 返回或设置指定窗口的状态。可读/写。 |