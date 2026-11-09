# DataLabel 对象

代表图表数据点或趋势线上的数据标签。

## 说明


在数据系列上， **DataLabel** 对象是 **DataLabels** 集合的成员。 **DataLabels** 集合包含每个数据点的 **DataLabel** 对象。对于没有可定义数据点的数据系列（如面积图数据系列）， **DataLabels** 集合包含单个 **DataLabel** 对象。

使用 **DataLabels** ( *index*)（其中 *index* 为数据标签的索引号）可返回单个 **DataLabel** 对象。


## 示例


```JavaScript
/*本示例在工作表 Sheet1 上第一个图表上，设置第一个数据系列中的第五个数据标签的数字格式。*/
function test() {
    let datalabel = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.SeriesCollection(1).DataLabels(5)
    datalabel.NumberFormat = "0.000"
}
```
使用 **DataLabel** 属性可返回单个数据点的 **DataLabel** 对象。



```JavaScript
/*此示例打开名为“Chart1”的图表工作表上第一个数据系列中第二个数据点的数据标签，并将数据标签文本设置为“Saturday”。*/
function test() {
    let point = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(1).Points(2)
    point.HasDataLabel = true
    point.DataLabel.Text = "Saturday"
}
```
在趋势线上， **DataLabel** 返回与趋势线一起显示的文本。这些文本可能是公式、R 平方值或两者均有（如果两者都出现）。



```JavaScript
/*本示例将趋势线文本设置为仅显示公式，并将数据标签的名称置于工作表“Sheet1”上的单元格 A1 中。*/
function test() {
    let trendline = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(1).Trendlines(1)
    trendline.DisplayRSquared = false
    trendline.DisplayEquation = true
    Worksheets.Item("Sheet1").Range("A1").Value2 = trendline.DataLabel.Name
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Characters](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataLabel/member/Characters) | 返回 **Characters** 对象，它代表对象文本内某个区域的字符。使用 **Characters** 对象可为文本字符串内的字符设置格式。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataLabel/member/Delete) | 删除对象。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataLabel/member/Select) | 选择对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataLabel/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [AutoText](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataLabel/member/AutoText) | 如果对象会根据内容自动生成合适的文字，则为 **True** 。 **Boolean** 类型，可读写。 |
| [Caption](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataLabel/member/Caption) | 返回或设置一个 **String** 值，它代表数据标签文本。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataLabel/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataLabel/member/Format) | 返回 **ChartFormat** 对象。只读。 |
| [Formula](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataLabel/member/Formula) | 获取或设置一个 **String** 值，该值以英语使用 A1 样式表示法来表示对象的公式。可读/写。 |
| [FormulaLocal](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataLabel/member/FormulaLocal) | 获取或设置一个 **String** 值，该值以用户的语言使用 A1 样式表示法来表示对象的公式。可读/写。 |
| [FormulaR1C1](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataLabel/member/FormulaR1C1) | 获取或设置一个 **String** 值，该值以英语使用 R1C1 样式表示法来表示对象的公式。可读/写。 |
| [FormulaR1C1Local](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataLabel/member/FormulaR1C1Local) | 获取或设置一个 **String** 值，该值以用户的语言使用 R1C1 样式表示法来表示对象的公式。可读/写。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataLabel/member/Height) | 返回对象的高度（以磅为单位）。只读。 |
| [Left](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataLabel/member/Left) | 返回或设置 **Double** 值，它代表从对象左边缘到工作表的 A 列左边缘或图表上的图表区左边缘的距离（以磅为单位）。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataLabel/member/Name) | 返回一个 **String** 值，它代表对象的名称。 |
| [NumberFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataLabel/member/NumberFormat) | 返回或设置一个 **String** 值，它代表对象的格式代码。 |
| [NumberFormatLinked](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataLabel/member/NumberFormatLinked) | 如果指定数字格式指向单元格（以便当单元格的格式更改时数据标签的格式也作相应的改动），则为 **True** 。 **Boolean** 类型，可读写。 |
| [NumberFormatLocal](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataLabel/member/NumberFormatLocal) | 以采用用户语言字符串的形式返回或设置一个 **Variant** 值，它代表对象的格式代码。 |
| [Orientation](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataLabel/member/Orientation) | 返回或设置一个 **Variant** 值，它代表文本方向。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataLabel/member/Parent) | 返回指定对象的父对象。只读。 |
| [Position](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataLabel/member/Position) | 返回或设置一个 **XlDataLabelPosition** 值，它代表数据标签的位置。 |
| [Separator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataLabel/member/Separator) | 设置或返回一个 **Variant** 值，它代表用于图表中数据标签的分隔符。可读/写。 |
| [Shadow](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataLabel/member/Shadow) | 返回或设置一个 **Boolean** 值，它确定对象是否有阴影。 |
| [ShowBubbleSize](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataLabel/member/ShowBubbleSize) | 如果为 **True** ，则在图表中显示数据标签的气泡的大小。如果为 **False** ，则隐藏气泡的大小。 **Boolean** 类型，可读写。 |
| [ShowCategoryName](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataLabel/member/ShowCategoryName) | 如果为 **True** ，则在图表中显示数据标签的分类名称。如果为 **False** ，则隐藏该分类的名称。 **Boolean** 类型，可读写。 |
| [ShowLegendKey](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataLabel/member/ShowLegendKey) | 如果数据标签图例项标示可见，则为 **True** 。 **Boolean** 类型，可读写。 |
| [ShowPercentage](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataLabel/member/ShowPercentage) | 如果为 **True** ，则在图表中显示数据标签的百分比数值。如果为 **False** ，则隐藏该百分比数值。 **Boolean** 类型，可读写。 |
| [ShowRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataLabel/member/ShowRange) | 用于切换数据标签区域上存在的 **Range** 字段。 **Boolean** 型，可读写。 |
| [ShowSeriesName](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataLabel/member/ShowSeriesName) | 返回或设置一个 **Boolean** 值，它指明图表上数据标签的系列名称显示方式。如果为 **True** ，则显示系列名称。如果为 **False** ，则隐藏系列名称。可读写。 |
| [ShowValue](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataLabel/member/ShowValue) | 返回或设置一个 **Boolean** 值，该值对应所指定图表的数据标签值显示方式。如果为 **True** ，则显示数据标签值。如果为 **False** ，则隐藏数据标签值。可读写。 |
| [Text](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataLabel/member/Text) | 返回或设置指定对象中的文本。 **String** 型，可读写。 |
| [Top](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataLabel/member/Top) | 返回或设置一个 **Double** 值，它代表从对象的上边缘到工作表第一行顶部或图表上的图表区顶部的距离（以磅为单位）。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataLabel/member/Width) | 返回或设置对象的宽度（以磅为单位）。 |