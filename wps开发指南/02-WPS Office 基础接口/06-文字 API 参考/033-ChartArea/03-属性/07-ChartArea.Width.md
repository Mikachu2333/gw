# ChartArea.Width

以磅为单位返回或设置对象的宽度。可读/写 **Double** 类型。



## 语法

express.**Width**

express   一个代表 **ChartArea** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例显示活动文档中第一张内嵌图表的图表区的宽度。*/
function test() {
    let chartArea = Application.ActiveDocument.InlineShapes.Item(1).Chart.ChartArea
    alert(chartArea.Width)
}
```


```JavaScript
/*本示例将第一个文档上第一个形状中的图表的图表区的宽度设置为400磅。*/
function test() {
    let chartArea = Application.Documents.Item(1).Shapes.Item(1).Chart.ChartArea
    chartArea.Width = 400
}
```
