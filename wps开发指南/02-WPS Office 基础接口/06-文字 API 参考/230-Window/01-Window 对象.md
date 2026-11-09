# Window 对象

代表一个窗口。许多文档特征（如滚动条和标尺）实际上是窗口的属性。

## 说明


 **Window** 对象是 **[Windows](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Windows/obj)** 集合的一个成员。 **Application** 对象的 **Windows** 集合包含应用程序中的所有窗口，而 **Document** 对象的 **Windows** 集合仅包含显示指定文档的窗口。

使用 **Windows** (Index) 可返回一个 **Window** 对象，其中 Index 为窗口名称或索引号。


## 示例


```JavaScript
/*本示例将 Document1 窗口最大化。*/
function test() {
    Windows.Item("Document1").WindowState = wdWindowStateMaximize
}
```
索引号是 **“窗口”** 菜单中窗口名称左侧的数字。



```JavaScript
/*本示例显示 Windows 集合中第一个窗口的标题。*/
function test() {
    alert(Windows.Item(1).Caption)
}
```
使用 **Add** 方法或 **NewWindow** 方法可向 **Windows** 集合添加新窗口。



```JavaScript
/*本示例每个语句都为活动窗口中的文档创建一个新窗口。*/
function test() {
    ActiveDocument.ActiveWindow.NewWindow()
    Windows.Add()
}
```
对同一文档打开多个窗口时，窗口标题中将出现一个冒号（:）和一个数字。

在将视图切换到打印预览时，会创建一个新窗口。关闭打印预览时，该窗口从 **Windows** 集合中删除。


{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Activate](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Window/member/Activate) | 激活指定窗口。 |
| [Close](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Window/member/Close) | 关闭指定的窗口。 |
| [GetPoint](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Window/member/GetPoint) | 返回指定区域或图形的屏幕坐标。 |
| [LargeScroll](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Window/member/LargeScroll) | 将窗口或窗格滚动指定的屏数。 |
| [NewWindow](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Window/member/NewWindow) | 打开一个新窗口，该窗口与指定窗口显示同一个文档。返回一个 **Window** 对象。 |
| [PageScroll](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Window/member/PageScroll) | 使指定的窗格或窗口逐页滚动。 |
| [PrintOut](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Window/member/PrintOut) | 打印指定窗口中显示的全部或部分文档。 |
| [RangeFromPoint](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Window/member/RangeFromPoint) | 返回 **Range** 或 **Shape** 对象，该对象位于由屏幕位置坐标对指定的位置。 |
| [ScrollIntoView](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Window/member/ScrollIntoView) | 滚动文档窗口，以便在文档窗口显示指定的区域或图形。 |
| [SetFocus](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Window/member/SetFocus) | 将指定文档窗口的焦点设置为电子邮件正文。 |
| [SmallScroll](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Window/member/SmallScroll) | 将窗口或窗格滚动指定的行数。 |
| [ToggleRibbon](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Window/member/ToggleRibbon) | 显示或隐藏功能区。 |
| [ToggleShowAllReviewers](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Window/member/ToggleShowAllReviewers) | 显示或隐藏包含备注和修订的文档中的所有备注。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Active](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Window/member/Active) | 如果指定窗口处于活动状态，则该属性值为 **True** 。只读 **Boolean** 。 |
| [ActivePane](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Window/member/ActivePane) | 返回 **[Pane](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Pane/obj)** 对象，该对象代表指定窗口的活动窗格。只读。 |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Window/member/Application) | 返回一个代表 WPS Office WPS 应用程序的 **Application** 对象。 |
| [Caption](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Window/member/Caption) | 返回或设置显示在文档或应用程序窗口的标题栏的窗口的标题文本。可读/写 **String** 类型。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Window/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [DisplayHorizontalScrollBar](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Window/member/DisplayHorizontalScrollBar) | 如果在指定的窗口中显示水平滚动条，则该属性值为 **True** 。可读/写 **Boolean** 类型。 |
| [DisplayRulers](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Window/member/DisplayRulers) | 如果在指定的窗口或窗格中显示标尺，则该属性值为 **True** 。可读/写 **Boolean** 类型。 |
| [DisplayScreenTips](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Window/member/DisplayScreenTips) | 如果批注、脚注、尾注和超链接以提示形式显示，则该属性值为 **True** 。可读/写 **Boolean** 类型。 |
| [DisplayVerticalRuler](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Window/member/DisplayVerticalRuler) | 如果在指定的窗口或窗格中显示垂直标尺，则该属性值为 **True** 。可读/写 **Boolean** 类型。 |
| [DisplayVerticalScrollBar](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Window/member/DisplayVerticalScrollBar) | 如果在指定的窗口中显示垂直滚动条，则该属性值为 **True** 。可读/写 **Boolean** 类型。 |
 | [Document](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Window/member/Document) | 返回一个 **Document** 对象，该对象与指定窗格、窗口或选定内容相关。只读。 |
| [DocumentMap](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Window/member/DocumentMap) | 如果显示文档结构图，则该属性值为 **True** 。可读/写 **Boolean** 类型。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Window/member/Height) | 返回或设置窗口的高度（以磅为单位）。可读/写 **Long** 类型。 |
| [HorizontalPercentScrolled](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Window/member/HorizontalPercentScrolled) | 返回或设置水平滚动条位置（以文档宽度的百分比表示）。可读/写 **Long** 类型。 |
| [Hwnd](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Window/member/Hwnd) | 返回一个 **Long** 类型的值，该值指示指定窗口的窗口句柄。只读。 |
| [Index](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Window/member/Index) | 返回一个 **Long** 类型的值，该值代表项目在集合中的位置。只读。 |
| [Left](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Window/member/Left) | 返回或设置一个 **Long** 类型的值，该值代表指定窗口的水平位置，以磅为单位。可读写。 |
| [Next](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Window/member/Next) | 返回打开的文档窗口集合中的下一个文档窗口。只读。 |
| [Panes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Window/member/Panes) | 返回一个 **Panes** 集合，该集合代表指定窗口中所有的窗格。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Window/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **Window** 对象的父对象。 |
| [Previous](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Window/member/Previous) | 返回打开的文档窗口集合中的上一个文档窗口。只读。 |
| [Selection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Window/member/Selection) | 返回一个 **Selection** 对象，该对象代表一个选定范围或插入点。只读。 |
| [ShowSourceDocuments](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Window/member/ShowSourceDocuments) | 返回或设置一个 **[WdShowSourceDocuments](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdShowSourceDocuments)** 常量，该常量代表 WPS 在比较和合并过程之后显示源文档的方式。可读写。 |
| [Split](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Window/member/Split) | 如果将窗口拆分为多个窗格，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [SplitVertical](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Window/member/SplitVertical) | 返回或设置指定窗口的垂直拆分百分比。 **Long** 类型，可读写。 |
| [StyleAreaWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Window/member/StyleAreaWidth) | 该属性返回或设置样式区的宽度，以磅为单位。 **Single** 类型，可读写。 |
| [Thumbnails](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Window/member/Thumbnails) | 设置或返回一个 **Boolean** 类型的值，该值代表是否沿 WPS 文档窗口的左侧显示文档页面的缩略图。 |
| [Top](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Window/member/Top) | 返回或设置指定文档窗口的垂直位置（以磅为单位）。可读写 **Long** 类型。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Window/member/Type) | 返回窗口的类型。只读 **[WdWindowType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdWindowType)** 类型。 |
| [VerticalPercentScrolled](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Window/member/VerticalPercentScrolled) | 返回或设置垂直滚动条的位置（以文档长度的百分比表示）。可读写 **Long** 类型。 |
| [View](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Window/member/View) | 返回一个 **[View](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/obj)** 对象，该对象代表指定窗口或窗格的视图。 |
| [Visible](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Window/member/Visible) | 如果指定对象可见，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Window/member/Width) | 返回或设置指定文档窗口的宽度（以磅为单位）。可读写 **Long** 类型。 |
| [WindowState](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Window/member/WindowState) | 返回或设置指定文档窗口或任务窗口的状态。 **[WdWindowState](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdWindowState)** 类型，可读写。 |