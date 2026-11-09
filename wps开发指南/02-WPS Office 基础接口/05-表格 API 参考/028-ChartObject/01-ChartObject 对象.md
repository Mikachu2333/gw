# ChartObject 对象

代表工作表上的嵌入图表。

## 说明


 **ChartObject** 对象充当 **[Chart](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/obj)** 对象的容器。 **ChartObject** 对象的属性和方法控制工作表上嵌入图表的外观和大小。 **ChartObject** 对象是 **[ChartObjects](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObjects/obj)** 集合的成员。 **ChartObjects** 集合包含单一工作表上的所有嵌入图表。

使用 **ChartObjects** (*index*)（其中 *index* 是嵌入图表的索引号或名称）可以返回单个 **ChartObject** 对象。


## 示例


```JavaScript
/*本示例将工作表 Sheet1 第一个图表的填充方案设置为浅色下对角线。*/
function test() {
    let chartobject = Application.Worksheets.Item("Sheet1").ChartObjects(1)
    chartobject.Chart.ChartArea.Format.Fill.Patterned(msoPatternLightDownwardDiagonal)
}
```
当选定嵌入图表时，其名称显示在“名称”框中。使用 **[Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObject/member/Name)** 属性可设置或返回 **ChartObject** 对象的名称。



```JavaScript
/*此示例为工作表 Sheet1 的第二个图表添加圆角。*/
function test() {
    let chartobject = Application.Worksheets.Item("Sheet1").ChartObjects(2)
    chartobject.RoundedCorners = true
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Activate](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObject/member/Activate) | 使当前图表成为活动图表。 |
| [BringToFront](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObject/member/BringToFront) | 将对象放到 z-次序前面。 |
| [Copy](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObject/member/Copy) | 将对象复制到剪贴板。 |
| [CopyPicture](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObject/member/CopyPicture) | 将所选对象作为图片复制到剪贴板。 |
| [Cut](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObject/member/Cut) | 将对象剪切到剪贴板。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObject/member/Delete) | 删除对象。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObject/member/Select) | 选择对象。 |
| [SendToBack](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObject/member/SendToBack) | 将对象放到 z-次序的后面。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObject/member/Application) | 如果不使用对象识别符，则该属性返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [BottomRightCell](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObject/member/BottomRightCell) | 返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，它代表位于该对象右下角下方的单元格。只读。 |
| [Chart](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObject/member/Chart) | 返回一个 **[Chart](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/obj)** 对象，该对象代表对象中包含的图表。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObject/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObject/member/Height) | 返回或设置一个 **Double** 值，它代表对象的高度（以磅为单位）。 |
| [Index](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObject/member/Index) | 返回 **Long** 值，它代表对象在其同类对象所组成的集合内的索引号。 |
| [Left](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObject/member/Left) | 返回或设置 **Double** 值，它代表从对象左边缘到工作表的 A 列左边缘或图表上的图表区左边缘的距离（以磅为单位）。 |
| [Locked](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObject/member/Locked) | 返回或设置一个 **Boolean** 值，它指明对象是否已被锁定。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObject/member/Name) | 返回一个 **String** 值，它代表对象的名称。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObject/member/Parent) | 返回指定对象的父对象。只读。 |
| [Placement](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObject/member/Placement) | 返回或设置一个包含 **[XlPlacement](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlPlacement)** 常量的 **Variant** 值，它代表对象附加到它所在的单元格的方式。 |
| [PrintObject](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObject/member/PrintObject) | 如果打印文档时也打印指定对象，则为 **True** 。 **Boolean** 类型，可读写。 |
| [RoundedCorners](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObject/member/RoundedCorners) | 如果嵌入式图表使用圆角，则为 **True** 。 **Boolean** 类型，可读写。 |
| [Shadow](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObject/member/Shadow) | 返回或设置 **Boolean** 值，它确定字体是否是阴影字体或对象是否带有阴影。 |
| [ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObject/member/ShapeRange) | 返回一个 **[ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/obj)** 对象，它代表指定的一个或多个对象。只读。 |
| [Top](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObject/member/Top) | 返回或设置一个 **Double** 值，它代表从对象的上边缘到工作表第一行顶部或图表上的图表区顶部的距离（以磅为单位）。 |
| [TopLeftCell](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObject/member/TopLeftCell) | 返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，它代表位于指定对象左上角下方的单元格。只读。 |
| [Visible](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObject/member/Visible) | 返回或设置一个 **Boolean** 值，它确定对象是否可见。可读写。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObject/member/Width) | 返回或设置一个 **Double** 值，它代表对象的宽度（以磅为单位）。 |