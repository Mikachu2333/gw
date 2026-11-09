# Chart.ChartStyle

返回或设置图表的图表样式。可读/写 **Variant** 类型。



## 语法

express.**ChartStyle**

express   一个代表 **Chart** 对象的变量。

## 类型

any

## 说明


您可以使用介于 1 到 48 之间的数字设置图表样式。



## 示例


```JavaScript
/*本示例显示第一个文档上的第一张图表的样式。*/
function test() {
    alert(Documents.Item(1).InlineShapes.Item(1).Chart.ChartStyle)
}
```


```JavaScript
/*本示例修改活动文档上第一张图表的样式。*/
function test() {
    let chart = Application.ActiveDocument.InlineShapes.Item(1).Chart
    chart.ChartStyle = 4
}
```
