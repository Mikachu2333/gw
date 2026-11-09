# Trendline 对象

代表图表上的趋势线。

## 说明


趋势线显示系列中数据的趋势或方向。 **Trendline** 对象是 **Trendlines** 集合的成员。 **Trendlines** 集合包含某一个系列的所有 **Trendline** 对象。
  
使用 **Trendlines** (*index*)（其中 *index*是趋势线索引号）可返回一个 **Trendline** 对象。

索引号指出趋势线添加到系列中的顺序。`Trendlines(1)` 是第一个添加到系列中的趋势线，而 `Trendlines(Trendlines.Count)` 是最后一个。


## 示例


```JavaScript
/*下例更改工作表一上嵌入式图表一中第一个系列的趋势线类型。如果该系列没有趋势线，则本示例会失败。*/
function test() {
    Application.Worksheets.Item(1).ChartObjects(1).Chart.SeriesCollection(1).Trendlines(1).Type = xlMovingAvg
}
```


```JavaScript
/*本示例删除 Chart1 中第三个数据系列索引为2的趋势线。*/
function test() {
    let series = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(3)
    series.Trendlines(2).Delete()
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [ClearFormats](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Trendline/member/ClearFormats) | 清除对象的格式设置。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Trendline/member/Delete) | 删除对象。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Trendline/member/Select) | 选择对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Trendline/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Backward2](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Trendline/member/Backward2) | 返回或设置趋势线向后延伸的周期数目（或散点图中的单位个数）。可读/写 **Double** 类型。 |
| [Border](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Trendline/member/Border) | 返回一个 **Border** 对象，它代表对象的边框。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Trendline/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [DataLabel](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Trendline/member/DataLabel) | 返回一个 **DataLabel** 对象，它代表与趋势线相关的数据标签。只读。 |
| [DisplayEquation](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Trendline/member/DisplayEquation) | 如果显示图表中的趋势线公式，则该值为 **True** （其数据标签与 R-平方值相同）。将该属性设为 **True** 可自动显示数据标签。 **Boolean** 类型，可读写。 |
| [DisplayRSquared](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Trendline/member/DisplayRSquared) | 如果显示图表中趋势线的 R-平方值，则该值为 **True** （其数据标签与公式的相同）。将该属性设为 **True** 可自动显示数据标签。 **Boolean** 类型，可读写。 |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Trendline/member/Format) | 返回 **ChartFormat** 对象。只读。 |
| [Forward2](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Trendline/member/Forward2) | 返回或设置趋势线向前延伸的周期数目（或散点图中的单位个数）。可读/写 **Double** 类型。 |
| [Index](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Trendline/member/Index) | 返回 **Long** 值，它代表对象在其同类对象所组成的集合内的索引号。 |
| [Intercept](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Trendline/member/Intercept) | 返回或设置趋势线与数值轴的交叉点。可读/写 **Double** 类型。 |
| [InterceptIsAuto](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Trendline/member/InterceptIsAuto) | 如果趋势线与数值轴的交叉点由回归分析自动确定，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Trendline/member/Name) | 返回或设置一个 **String** 值，它代表对象的名称。 |
| [NameIsAuto](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Trendline/member/NameIsAuto) | 如果 ET 自动确定趋势线的名称，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [Order](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Trendline/member/Order) | 返回或设置一个 **Long** 值，它代表趋势线类型为 **xlPolynomial** 时趋势线的顺序号（大于 1 的整数）。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Trendline/member/Parent) | 返回指定对象的父对象。只读。 |
| [Period](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Trendline/member/Period) | 返回或设置移动平均趋势线的周期。可以是从 2 至 255 的值。可读/写 **Long** 类型。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Trendline/member/Type) | 返回或设置一个 **XlTrendlineType** 值，它代表趋势线的类型。 |