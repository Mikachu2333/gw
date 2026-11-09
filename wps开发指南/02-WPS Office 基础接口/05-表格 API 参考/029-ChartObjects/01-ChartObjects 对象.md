# ChartObjects 对象

由指定的图表工作表、对话框工作表或工作表上的所有 **[ChartObject](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObject/obj)** 对象组成的集合。

## 说明


每个 **ChartObject** 对象都代表一个嵌入图表。 **ChartObject** 对象充当 **[Chart](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/obj)** 对象的容器。 **ChartObject** 对象的属性和方法控制工作表上嵌入图表的外观和大小。

使用 **[ChartObjects](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/ChartObjects)** 方法返回 **ChartObjects** 集合。


## 示例


```JavaScript
/*本示例删除工作表 Sheet1 中所有图表。*/
function test() {
    Application.Worksheets.Item("Sheet1").ChartObjects().Delete()
}
```
不能使用 **ChartObjects** 集合来调用以下属性和方法：

* **Locked** 属性
* **Placement** 属性
* **PrintObject** 属性

与早期版本不同， **ChartObjects** 集合现在可以读取表示高度、宽度、左对齐和顶对齐的属性。

使用 **[Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObjects/member/Add)** 方法可创建一个新的空嵌入图表并将它添加到集合中。使用 **[ChartWizard](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/ChartWizard)** 方法可添加数据并设置新图表的格式。



```JavaScript
/*本示例在工作表 Sheet1 中新建一个内嵌图表，然后以折线图形式添加单元格 A1:A20 中的数据。*/
function test() {
    let chartobject = Application.Worksheets.Item("Sheet1").ChartObjects().Add(100, 30, 400, 250)
    chartobject.Chart.ChartWizard(Worksheets.Item("Sheet1").Range("A1:A20"), xlLine, null, null, null, null, null, "New Chart", null, null, null)
}
```
使用 **ChartObjects** (*index*)（其中 *index* 是嵌入图表的索引号或名称）可以返回单个对象。



```JavaScript
/*本示例将工作表 Sheet1 上第一张图表填充方案设置为浅色下对角线。*/
function test() {
    let chart = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart
    chart.ChartArea.Format.Fill.Patterned(msoPatternLightDownwardDiagonal)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObjects/member/Add) | 创建新的嵌入式图表。 |
| [Copy](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObjects/member/Copy) | 将对象复制到剪贴板。 |
| [CopyPicture](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObjects/member/CopyPicture) | 将所选对象作为图片复制到剪贴板。 |
| [Cut](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObjects/member/Cut) | 将对象剪切到剪贴板。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObjects/member/Delete) | 删除对象。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObjects/member/Item) | 从集合中返回一个对象。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObjects/member/Select) | 选择对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObjects/member/Application) | 如果不使用对象识别符，则该属性返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObjects/member/Count) | 返回一个 **Long** 值，它代表集合中对象的数量。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObjects/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObjects/member/Height) | 返回或设置一个 **Double** 值，它代表对象的高度（以磅为单位）。 |
| [Left](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObjects/member/Left) | 返回或设置 **Double** 值，它代表从对象左边缘到工作表的 A 列左边缘或图表上的图表区左边缘的距离（以磅为单位）。 |
| [Locked](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObjects/member/Locked) | 返回或设置一个 **Boolean** 值，它指明对象是否已被锁定。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObjects/member/Parent) | 返回指定对象的父对象。只读。 |
| [Placement](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObjects/member/Placement) | 返回或设置一个包含 **[XlPlacement](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlPlacement)** 常量的 **Variant** 值，它代表对象附加到它所在的单元格的方式。 |
| [PrintObject](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObjects/member/PrintObject) | 如果打印文档时也打印指定对象，则为 **True** 。 **Boolean** 类型，可读写。 |
| [ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObjects/member/ShapeRange) | 返回一个 **[ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/obj)** 对象，它代表指定的一个或多个对象。只读。 |
| [Top](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObjects/member/Top) | 返回或设置一个 **Double** 值，它代表从对象的上边缘到工作表第一行顶部或图表上的图表区顶部的距离（以磅为单位）。 |
| [Visible](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObjects/member/Visible) | 返回或设置一个 **Boolean** 值，它确定对象是否可见。可读写。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObjects/member/Width) | 返回或设置一个 **Double** 值，它代表对象的宽度（以磅为单位）。 |