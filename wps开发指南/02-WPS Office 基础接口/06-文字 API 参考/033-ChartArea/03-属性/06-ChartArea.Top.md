# ChartArea.Top

返回或设置一个以磅为单位的距离，它代表从对象的上边缘到图表区顶部（在图表上）的距离。可读/写 **Double** 类型。



## 语法

express.**Top**

express   一个代表 **ChartArea** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例显示活动文档中第一张内嵌图表的图表区到顶部的距离。*/
function test() {
    let chartArea = Application.ActiveDocument.InlineShapes.Item(1).Chart.ChartArea
    alert(chartArea.Top)
}
```


```JavaScript
/*本示例将第一个文档上第一个形状中的图表的图表区到顶部的距离设置为10磅。*/
function test() {
    let chartArea = Application.Documents.Item(1).Shapes.Item(1).Chart.ChartArea
    chartArea.Top = 10
}
```
