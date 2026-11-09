# DataLabels 对象

由数据系列中所有 **DataLabel** 对象组成的集合。

## 说明


每个 **DataLabel** 对象代表一个数据点或趋势线的数据标签。对于没有可定义数据点的数据系列（例如面积图数据系列）， **DataLabels** 集合包含单个数据标签。

使用 **DataLabels** 方法可返回单个 **DataLabels** 集合。


## 示例


```JavaScript
/*此示例设置图表工作表 Chart1 中图表的第一个数据系列中数据标签的数字格式。*/
function test() {
    let series = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(1)
    series.HasDataLabels = true
    series.DataLabels().NumberFormat = "#.##0"
}
```
使用 **DataLabels** (_index_)（其中 index 为数据标签的索引号）可返回单个 **DataLabel** 对象。



```JavaScript
/*此示例在第一张工作表上嵌入的第一个图表上，设置第一个数据系列中的第五个数据标签的数字格式。*/
function test() {
    let datalabel = Application.Worksheets.Item(1).ChartObjects(1).Chart.SeriesCollection(1).DataLabels(5)
    datalabel.NumberFormat = "0.000"
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataLabels/member/Delete) | 删除对象。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataLabels/member/Item) | 从集合中返回一个对象。 |
| [Propagate](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataLabels/member/Propagate) | 使你能够获取单个数据标签的内容和格式，并将其应用于系列中的其他每个数据标签。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataLabels/member/Select) | 选择对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataLabels/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [AutoText](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataLabels/member/AutoText) | 如果对象会根据内容自动生成合适的文字，则为 **True** 。可读/写 **Boolean** 类型。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataLabels/member/Count) | 返回一个 **Long** 值，它代表集合中对象的数量。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataLabels/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataLabels/member/Format) | 返回 **ChartFormat** 对象。只读。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataLabels/member/Name) | 返回一个 **String** 值，它代表对象的名称。 |
| [NumberFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataLabels/member/NumberFormat) | 返回或设置一个 **String** 值，它代表对象的格式代码。 |
| [NumberFormatLinked](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataLabels/member/NumberFormatLinked) | 如果指定数字格式指向单元格（以便当单元格的格式更改时数据标签的格式也作相应的改动），则为 **True** 。 **Boolean** 类型，可读写。 |
| [NumberFormatLocal](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataLabels/member/NumberFormatLocal) | 以采用用户语言字符串的形式返回或设置一个 **Variant** 值，它代表对象的格式代码。 |
| [Orientation](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataLabels/member/Orientation) | 返回或设置一个 **Variant** 值，它代表文本方向。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataLabels/member/Parent) | 返回指定对象的父对象。只读。 |
| [Position](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataLabels/member/Position) | 返回或设置一个 **XlDataLabelPosition** 值，它代表数据标签的位置。 |
| [Separator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataLabels/member/Separator) | 设置或返回一个 **Variant** 值，它代表用于图表中数据标签的分隔符。可读/写。 |
| [Shadow](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataLabels/member/Shadow) | 返回或设置一个 **Boolean** 值，它确定对象是否有阴影。 |
| [ShowBubbleSize](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataLabels/member/ShowBubbleSize) | 如果为 **True** ，则在图表中显示数据标签的气泡的大小。如果为 **False** ，则隐藏气泡的大小。 **Boolean** 类型，可读写。 |
| [ShowCategoryName](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataLabels/member/ShowCategoryName) | 如果为 **True** ，则在图表中显示数据标签的分类名称。如果为 **False** ，则隐藏该分类的名称。 **Boolean** 类型，可读写。 |
| [ShowLegendKey](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataLabels/member/ShowLegendKey) | 如果数据标签图例项标示可见，则为 **True** 。 **Boolean** 类型，可读写。 |
| [ShowPercentage](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataLabels/member/ShowPercentage) | 如果为 **True** ，则在图表中显示数据标签的百分比数值。如果为 **False** ，则隐藏该百分比数值。 **Boolean** 类型，可读写。 |
| [ShowSeriesName](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataLabels/member/ShowSeriesName) | 返回或设置一个 **Boolean** 值，它指明图表上数据标签的系列名称显示方式。如果为 **True** ，则显示系列名称。如果为 **False** ，则隐藏系列名称。可读写。 |
| [ShowValue](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataLabels/member/ShowValue) | 返回或设置一个 **Boolean** 值，该值对应所指定图表的数据标签值显示方式。如果为 **True** ，则显示数据标签值。如果为 **False** ，则隐藏数据标签值。可读写。 |