# DataLabel 对象

代表图表数据点或趋势线上的数据标签。

## 说明


在系列上， **DataLabel** 对象是 **[DataLabels](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DataLabels/obj)** 集合的成员。 **DataLabels** 集合包含每个数据点的 **DataLabel** 对象。对于没有可定义数据点的系列（如面积图系列）， **DataLabels** 集合包含单个 **DataLabel** 对象。

使用 **[DataLabels](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Series/member/DataLabels)** (_Index_)（其中 _Index_为数据标签索引号）可返回单个 **DataLabel** 对象。


## 示例


```JavaScript
/*本示例设置活动演示文稿的第一张幻灯片中第一张图表上第一个数据系列的第三个数据标签的数字格式。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.SeriesCollection(1).DataLabels(3).NumberFormat = "0.000"
    }
}
```
使用 **[Point.DataLabel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Point/member/DataLabel)** 属性可返回单个数据点的 **DataLabel** 对象。



```JavaScript
/*本示例打开活动演示文稿的第一张幻灯片中第一个图表的第一个数据系列的第二个点的数据标签，并设置数据标签文本为“Saturday”。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        let point = shape.Chart.SeriesCollection(1).Points(2)
        point.HasDataLabel = true
        point.DataLabel.Text = "Saturday"
    }
}
```
在趋势线上， **[Trendline.DataLabel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Trendline/member/DataLabel)** 属性返回与趋势线图一起显示的文本。这些文本可能是公式、R 平方值或两者均有（如果两者都出现）。



```JavaScript
/*本示例将活动演示文稿的第一张幻灯片中第一个图表的第一个系列中第一个趋势线的趋势线文本设置为仅显示公式，并选中趋势线的数据标签。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        let trendline = shape.Chart.SeriesCollection(1).Trendlines(1)
        trendline.DisplayRSquared = false
        trendline.DisplayEquation = true
        trendline.DataLabel.Select()
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DataLabel/member/Delete) | 删除对象。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DataLabel/member/Select) | 选择对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [AutoText](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DataLabel/member/AutoText) | 如果对象会根据内容自动生成合适的文本，则为 **True** 。可读/写 **Boolean** 类型。 |
| [Caption](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DataLabel/member/Caption) | 返回或设置数据标签文本。可读/写 **String** 类型。 |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DataLabel/member/Format) | 返回对象的线条、填充和效果格式。只读 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartFormat/obj)** 。 |
| [Formula](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DataLabel/member/Formula) | 使用 A1 样式表示法返回或设置对象的公式。可读写。 |
| [FormulaLocal](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DataLabel/member/FormulaLocal) | 返回或设置对象的公式，使用用户语言中的 A1 样式引用。可读/写 **String** 类型。 |
| [FormulaR1C1](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DataLabel/member/FormulaR1C1) | 以宏语言使用 R1C1 样式表示法返回或设置对象的公式。可读写 **String** 类型。 |
| [FormulaR1C1Local](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DataLabel/member/FormulaR1C1Local) | 以用户语言使用 R1C1 样式表示法返回或设置对象的公式。可读/写 **String** 类型。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DataLabel/member/Height) | 返回对象的高度（以磅为单位）。只读。 |
| [Left](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DataLabel/member/Left) | 以磅为单位返回或设置对象左边缘至图表区左边缘的距离。可读/写 **Double** 类型。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DataLabel/member/Name) | 返回对象的名称。只读 **String** 类型。 |
| [NumberFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DataLabel/member/NumberFormat) | 返回或设置对象的格式代码。可读/写 **String** 类型。 |
| [NumberFormatLinked](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DataLabel/member/NumberFormatLinked) | 如果指定数字格式指向单元格（以便当单元格的格式更改时数据标签的格式也作相应的改动），则为 **True** 。可读/写 **Boolean** 类型。 |
| [NumberFormatLocal](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DataLabel/member/NumberFormatLocal) | 以用户语言返回或设置对象的格式代码字符串。可读/写 **Variant** 类型。 |
| [Orientation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DataLabel/member/Orientation) | 返回或设置文本方向。可读/写 **Long** 类型。 |
| [Position](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DataLabel/member/Position) | 返回或设置数据标签的位置。可读/写 **[XlDataLabelPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlDataLabelPosition)** 。 |
| [Separator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DataLabel/member/Separator) | 返回或设置用于图表中的数据标签的分隔符。可读/写 **Variant** 类型。 |
| [Shadow](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DataLabel/member/Shadow) | 返回或设置一个表示对象是否有阴影的值。可读/写 **Boolean** 类型。 |
| [ShowBubbleSize](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DataLabel/member/ShowBubbleSize) | 如果为 **True** ，则在图表中显示数据标签的气泡大小。如果为 **False** ，则隐藏气泡大小。可读/写 **Boolean** 类型。 |
| [ShowCategoryName](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DataLabel/member/ShowCategoryName) | 如果为 **True** ，则在图表中显示数据标签的分类名称。如果为 **False** ，则隐藏分类名称。可读/写 **Boolean** 类型。 |
| [ShowLegendKey](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DataLabel/member/ShowLegendKey) | 如果数据标签图例项标示可见，则为 **True** 。可读/写 **Boolean** 类型。 |
| [ShowPercentage](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DataLabel/member/ShowPercentage) | 如果为 **True** ，则在图表中显示数据标签的百分比值。如果为 **False** ，则隐藏该百分比值。可读/写 **Boolean** 类型。 |
| [ShowRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DataLabel/member/ShowRange) | 设置为 **True** 可显示指定图表数据标签的“ **来自单元格的值** ”区域字段。设置为 **False** 可隐藏该字段。可读/写 **Boolean** 类型。 |
| [ShowSeriesName](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DataLabel/member/ShowSeriesName) | 如果为 **True** ，则在图表中显示数据标签的系列名称。如果为 **False** ，则隐藏系列名称。可读/写 **Boolean** 类型。 |
| [ShowValue](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DataLabel/member/ShowValue) | 如果为 **True** ，则显示指定图表的数据标签值。如果为 **False** ，则隐藏这些值。可读/写 **Boolean** 类型。 |
| [Text](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DataLabel/member/Text) | 返回或设置指定对象中的文本。可读/写 **String** 类型。 |
| [Top](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DataLabel/member/Top) | 返回或设置一个以磅为单位的距离，它代表从对象的上边缘到图表区顶部（在图表上）的距离。可读/写 **Double** 类型。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DataLabel/member/Width) | 返回或设置对象的宽度（以磅为单位）。可读写。 |