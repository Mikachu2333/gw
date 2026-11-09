# Trendline.Order

当趋势线类型为 **xlPolynomial** 时，返回或设置趋势线的顺序号（大于 1 的整数）。可读/写 **Long** 类型。



## 语法

express.**Order**

express   一个代表 **Trendline** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*此示例判断如果第一个文档上的第一个形状中图表的第一个数据系列的第一条趋势线的类型为xlPolynomial，则显示该趋势线的顺序号。*/
function test() {
    let trendline = Documents.Item(1).Shapes.Item(1).Chart.SeriesCollection(1).Trendlines(1)
    if (trendline.Type == xlPolynomial) {
        alert(trendline.Order)
    }
}
```


```JavaScript
/*本示例将活动文档中第一个内嵌图表的第二个数据系列的第一条趋势线的类型设置为xlPolynomial，然后设置该趋势线的顺序号。*/
function test() {
    let trendline = ActiveDocument.InlineShapes.Item(1).Chart.SeriesCollection(2).Trendlines(1)
    trendline.Type = xlPolynomial
    trendline.Order = 3
}
```
