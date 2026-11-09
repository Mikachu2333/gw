# Pane 对象

代表窗口中的窗格。

## 说明


 **Pane** 对象只对于工作表和 ET 4.0 宏表存在。 **Pane** 对象是 **[Panes](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Panes/obj)** 集合的成员。 **Panes** 集合包含在一个窗口中显示的所有窗格。

使用 **[Panes](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Panes/obj)** (*index* )（其中 *index* 是窗格索引号）可返回一个 **Pane** 对象。


## 示例


```JavaScript
/*此示例激活第一个窗口为活动窗口，拆分该窗口，然后滚动左下角的窗格，直至第五行处于该窗格的顶端。*/
function test() {
    Application.Windows.Item(1).Activate()
    Application.ActiveWindow.Split = true
    Application.ActiveWindow.Panes.Item(3).ScrollRow = 5
}
```


```JavaScript
/*本示例将活动窗口的第三个窗格中第七行移动到窗格顶部。*/
function test() {
    Application.ActiveWindow.Panes.Item(3).ScrollRow = 7
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Activate](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Pane/member/Activate) | 激活窗格。 |
| [LargeScroll](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Pane/member/LargeScroll) | 按页滚动窗口内容。 |
| [PointsToScreenPixelsX](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Pane/member/PointsToScreenPixelsX) | 返回屏幕上的像素点。 |
| [PointsToScreenPixelsY](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Pane/member/PointsToScreenPixelsY) | 返回屏幕像素的位置。 |
| [ScrollIntoView](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Pane/member/ScrollIntoView) | 滚动文档窗口，使指定矩形区域中的内容显示在文档窗口或窗格的左上角或右下角（取决于 *Start* 参数值）。 |
| [SmallScroll](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Pane/member/SmallScroll) | 按行或按列滚动窗口内容。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Pane/member/Application) | 如果不使用对象识别符，则该属性返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Pane/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Index](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Pane/member/Index) | 返回 **Long** 值，它代表对象在其同类对象所组成的集合内的索引号。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Pane/member/Parent) | 返回指定对象的父对象。只读。 |
| [ScrollColumn](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Pane/member/ScrollColumn) | 返回或设置指定窗格或窗口最左边的列号。 **Long** 型，可读写。 |
| [ScrollRow](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Pane/member/ScrollRow) | 返回或设置指定窗格或窗口最上面显示的行号。 **Long** 型，可读写。 |
| [VisibleRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Pane/member/VisibleRange) | 返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，它代表显示在窗口或窗格中的单元格区域。如果列或行只显示了一部分，则说明它是包括在区域之内的。只读。 |