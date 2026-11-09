# Trendlines.Add

创建新的趋势线。



## 语法

express.**Add(Type, Order, Period, Forward, Backward, Intercept, DisplayEquation, DisplayRSquared, Name)**

express   一个代表 **Trendlines** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Type | 可选 | XlTrendlineType | 指定趋势线类型的一个枚举值。默认值为 **xlLinear** 。 |
| Order | 可选 | any | 指定趋势线阶数。如果 _Type_ 设置为 **xlPolynomial** ，则该参数为必需参数。如果指定该参数，则指定的值必须为 2 到 6 之间的整数。 |
| Period | 可选 | any | 趋势线周期。如果 _Type_ 设置为 **xlMovingAvg** ，则该参数为必需参数。如果指定该参数，则指定的值必须为整数，且介于 1 和要向其中添加趋势线的系列中的数据点数之间。 |
| Forward | 可选 | any | 趋势线向前延伸的周期数目（或散点图中的单位个数）。 |
| Backward | 可选 | any | 趋势线向后延伸的周期数目（或散点图中的单位个数）。 |
| Intercept | 可选 | any | 趋势线的截距。如果指定该参数，则指定的值必须为双精度浮点数。如果省略该参数，则回归分析将自动设置截距，并且生成的 **[Trendline](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Trendline/obj)** 对象的 **[InterceptIsAuto](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Trendline/member/InterceptIsAuto)** 属性会设置为 **True** 。仅当 Type 设置为 **xlExponential** 、 **xlLinear** 或 **xlPolynomial** 时，此参数才适用。 |
| DisplayEquation | 可选 | any | 如果值为 **True** ，则在图表中显示趋势线的公式（与 R 平方值显示在同一数据标签中）。默认值为 **False** 。 |
| DisplayRSquared | 可选 | any | 如果值为 **True** ，则在图表中显示趋势线的 R 平方值（与公式显示在同一数据标签中）。默认值为 **False** 。 |
| Name | 可选 | any | 趋势线的名称。如果省略该参数，则由 WPS文字 生成名称，并且生成的 **[Trendline](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Trendline/obj)** 对象的 **[NameIsAuto](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Trendline/member/NameIsAuto)** 属性会设置为 **True** 。 |

## 返回值

一个代表新趋势线的 **[Trendline](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Trendline/obj)** 对象。

## 示例


```JavaScript
/*本示例为活动文档中的第一个内嵌图表的系列1新建一条线性趋势线。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.SeriesCollection(1).Trendlines().Add()
    }
}
```


```JavaScript
/*本示例为第一个文档上第一个形状中图表的系列2新建一条移动平均趋势线。*/
function test() {
    Documents.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).Trendlines().Add(xlMovingAvg, null, 2, null, null, null, true, true, "MovingAvg")
}
```
