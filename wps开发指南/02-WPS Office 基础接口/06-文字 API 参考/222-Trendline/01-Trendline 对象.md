# Trendline 对象

代表图表上的趋势线。

## 说明


趋势线显示系列中数据的趋势，或者说发展方向。 **Trendline** 对象是 **[Trendlines](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Trendlines/obj)** 集合的成员。 **Trendlines** 集合包含单个系列的所有 **Trendline** 对象。

可以使用 **[Trendlines](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Series/member/Trendlines)** (_Index_)（其中 _Index_ 是趋势线的索引号）返回单个 **Trendline** 对象。

索引号指出趋势线添加到系列中的顺序。`Trendlines(1)` 是第一个添加到系列中的趋势线，而 `Trendlines(Trendlines.Count)` 是最后一个。


## 示例


```JavaScript
/*本示例更改活动文档中第一个内嵌图表的第一个系列的第一条趋势线的趋势线类型。如果该系列没有趋势线，该示例将失败。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.SeriesCollection(1).Trendlines(1).Type = xlMovingAvg
    }
}
```


```JavaScript
/*此示例设置第一个文档上第一个形状中图表的第一个数据系列的第一条趋势线的线条粗细。*/
function test() {
    let trendline = Documents.Item(1).Shapes.Item(1).Chart.SeriesCollection(1).Trendlines(1)
    trendline.Format.Line.Weight = 4
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [ClearFormats](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Trendline/member/ClearFormats) | 清除对象的格式设置。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Trendline/member/Delete) | 删除对象。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Trendline/member/Select) | 选择对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Backward2](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Trendline/member/Backward2) | 返回或设置趋势线向后延伸的周期数目（或散点图中的单位个数）。可读/写 **Double** 类型。 |
| [Border](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Trendline/member/Border) | 返回对象的边框。只读 **[ChartBorder](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartBorder/obj)** 对象。 |
| [DataLabel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Trendline/member/DataLabel) | 返回与趋势线相关联的数据标签。只读 **[DataLabel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DataLabel/obj)** 对象。 |
| [DisplayEquation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Trendline/member/DisplayEquation) | 如果图表中显示趋势线公式（与 R 平方值位于同一数据标签中），则为 **True** 。可读/写 **Boolean** 类型。 |
| [DisplayRSquared](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Trendline/member/DisplayRSquared) | 如果趋势线的 R 平方值显示在图表上（与公式位于同一数据标签中），则为 **True** 。可读/写 **Boolean** 类型。 |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Trendline/member/Format) | 返回对象的线条、填充和效果格式。只读 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartFormat/obj)** 。 |
| [Forward2](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Trendline/member/Forward2) | 返回或设置趋势线向前延伸的周期数目（或散点图中的单位个数）。可读/写 **Double** 类型。 |
| [Index](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Trendline/member/Index) | 返回对象在其同类对象所组成的集合内的索引号。只读 **Long** 类型。 |
| [Intercept](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Trendline/member/Intercept) | 返回或设置趋势线与数值轴的交叉点。可读/写 **Double** 类型。 |
| [InterceptIsAuto](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Trendline/member/InterceptIsAuto) | 如果趋势线与数值轴的交叉点由回归分析自动确定，则该属性值为 **True** 。可读/写 **Boolean** 类型。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Trendline/member/Name) | 返回或设置对象的名称。可读/写 **String** 类型。 |
| [NameIsAuto](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Trendline/member/NameIsAuto) | 如果自动确定趋势线的名称，则为 **True** 。可读/写 **Boolean** 类型。 |
| [Order](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Trendline/member/Order) | 当趋势线类型为 **xlPolynomial** 时，返回或设置趋势线的顺序号（大于 1 的整数）。可读/写 **Long** 类型。 |
| [Period](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Trendline/member/Period) | 返回或设置移动平均趋势线的周期。可读/写 **Long** 类型。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Trendline/member/Type) | 返回或设置趋势线类型。可读/写 **[XlTrendlineType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlTrendlineType)** 。 |