# ChartArea.Shadow

返回或设置一个值，该值确定对象是否具有阴影。可读/写 **Boolean** 类型。



## 语法

express.**Shadow**

express   一个代表 **ChartArea** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示活动文档中第一张图表的图表区是否具有阴影。*/
function test() {
    let chartArea = Application.ActiveDocument.InlineShapes.Item(1).Chart.ChartArea
    alert(chartArea.Shadow)
}
```


```JavaScript
/*本示例将第一个文档上第一张图表的图表区设置为具有阴影。*/
function test() {
    let chart = Application.Documents.Item(1).InlineShapes(1).Chart
    chart.ChartArea.Shadow = true
}
```
