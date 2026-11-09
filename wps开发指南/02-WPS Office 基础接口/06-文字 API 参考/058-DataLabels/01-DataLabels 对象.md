# DataLabels 对象

由指定系列中所有 **[DataLabel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DataLabel/obj)** 对象组成的集合。

## 说明


每个 **DataLabel** 对象代表一个数据点或趋势线的数据标签。对于没有可定义数据点的数据系列（例如面积图数据系列）， **DataLabels** 集合包含单个数据标签。

可以使用 **[DataLabels](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Series/member/DataLabels)** 方法返回 **DataLabels** 集合。


## 示例


```JavaScript
/*本示例设置活动文档中第一张内嵌图表上第一个数据系列的数据标签的数字格式。*/
function test() {
    let inlineShape = Application.ActiveDocument.InlineShapes(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.SeriesCollection(1).HasDataLabels = true
        inlineShape.Chart.SeriesCollection(1).DataLabels().NumberFormat = "0%"
    }
}
```
可以使用 **[DataLabels](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Series/member/DataLabels)** (_Index_)（其中 _Index_ 为数据标签的索引号）返回单个 **DataLabel** 对象。



```JavaScript
/*本示例设置活动文档中第一张内嵌图表上第一个数据系列的第三个数据标签的数字格式。*/
function test() {
    let inlineShape = Application.ActiveDocument.InlineShapes(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.SeriesCollection(1).DataLabels().Item(3).NumberFormat = "0.000"
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DataLabels/member/Delete) | 删除对象。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DataLabels/member/Item) | 从集合中返回一个对象。 |
| [Propagate](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DataLabels/member/Propagate) | 将指定数据标签的内容和格式传播到系列中的所有其他数据标签。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DataLabels/member/Select) | 选择对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [AutoText](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DataLabels/member/AutoText) | 如果集合中的所有对象根据上下文自动生成合适的文字，则为 **True** 。可读/写 **Boolean** 类型。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DataLabels/member/Count) | 返回集合中对象的数目。只读 **Long** 类型。 |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DataLabels/member/Format) | 返回对象的线条、填充和效果格式。只读 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartFormat/obj)** 。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DataLabels/member/Name) | 返回对象的名称。只读 **String** 类型。 |
| [NumberFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DataLabels/member/NumberFormat) | 返回或设置对象的格式代码。可读/写 **String** 类型。 |
| [NumberFormatLinked](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DataLabels/member/NumberFormatLinked) | 如果指定数字格式指向单元格（以便当单元格的格式更改时数据标签的格式也作相应的改动），则为 **True** 。可读/写 **Boolean** 类型。 |
| [NumberFormatLocal](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DataLabels/member/NumberFormatLocal) | 以用户语言返回或设置对象的格式代码字符串。可读/写 **Variant** 类型。 |
| [Orientation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DataLabels/member/Orientation) | 返回或设置文本方向。可读/写 **Long** 类型。 |
| [Position](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DataLabels/member/Position) | 返回或设置数据标签的位置。可读/写 **[XlDataLabelPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlDataLabelPosition)** 。 |
| [Separator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DataLabels/member/Separator) | 设置或返回用于图表中的数据标签的分隔符。可读/写 **Variant** 类型。 |
| [Shadow](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DataLabels/member/Shadow) | 返回或设置一个表示对象是否有阴影的值。可读/写 **Boolean** 类型。 |
| [ShowBubbleSize](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DataLabels/member/ShowBubbleSize) | 如果为 **True** ，则在图表中显示数据标签的气泡大小。如果为 **False** ，则隐藏气泡大小。可读/写 **Boolean** 类型。 |
| [ShowCategoryName](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DataLabels/member/ShowCategoryName) | 如果为 **True** ，则在图表中显示数据标签的分类名称。如果为 **False** ，则隐藏该名称。可读/写 **Boolean** 类型。 |
| [ShowLegendKey](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DataLabels/member/ShowLegendKey) | 如果数据标签图例项标示可见，则为 **True** 。可读/写 **Boolean** 类型。 |
| [ShowPercentage](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DataLabels/member/ShowPercentage) | 如果为 **True** ，则在图表中显示数据标签的百分比值。如果为 **False** ，则隐藏该百分比值。可读/写 **Boolean** 类型。 |
| [ShowRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DataLabels/member/ShowRange) | 设置为 **True** 可显示指定图表的所有图表数据标签中的“ **单元格值** ”区域字段。设置为 **False** 可隐藏该字段。可读/写 **Boolean** 类型。 |
| [ShowSeriesName](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DataLabels/member/ShowSeriesName) | 如果为 **True** ，则在图表中显示数据标签的系列名称。如果为 **False** ，则隐藏该名称。可读/写 **Boolean** 类型。 |
| [ShowValue](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DataLabels/member/ShowValue) | 如果为 **True** ，则显示指定图表的数据标签值。如果为 **False** ，则隐藏这些值。可读/写 **Boolean** 类型。 |