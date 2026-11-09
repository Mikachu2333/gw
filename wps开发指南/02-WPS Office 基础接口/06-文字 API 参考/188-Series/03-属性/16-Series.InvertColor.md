# Series.InvertColor

返回或设置数据系列中负数据点的填充颜色。可读/写。



## 语法

express.**InvertColor**

express   一个代表 **Series** 对象的变量。

## 类型

number（int4 精度）

## 说明


通过 **InvertColor** 属性，可以将负数据点的填充颜色设置为特定数值、十六进制值、八进制值或 RGB 颜色值。若要将值设置为 RGB 值，请使用 RGB 函数。不使用 **InvertColor** 属性，您可以改为使用 [InvertColorIndex](#TODO) 属性，该属性使用当前调色板中一组更简单的整数值。为了使 **InvertColor** 属性起作用，还必须将 **Series** 对象的 [InvertIfNegative](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Series/member/InvertIfNegative) 属性设置为 **True** 。



## 示例


```JavaScript
/*本示例将活动文档中第一个图表的第一个系列的负数据点填充色设置为洋红色*/
function test() {
    let series = ActiveDocument.InlineShapes.Item(1).Chart.SeriesCollection(1)
    series.InvertIfNegative = true
    series.InvertColor = RGB(255, 0, 255)
}
```


```JavaScript
/*本示例显示选中图表的第二个系列的负数据点填充色是否为红色*/
function test() {
    let series = Selection.InlineShapes.Item(1).Chart.SeriesCollection(2)
    alert(series.InvertColor == RGB(255, 0, 0))
}
```
