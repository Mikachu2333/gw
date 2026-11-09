# ChartTitle.Shadow

返回或设置一个值，该值指示对象是否带有阴影。可读/写 **Boolean** 类型。



## 语法

express.**Shadow**

express   一个代表 **ChartTitle** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将活动文档上第一张内嵌图表上的图表标题的阴影设置为可见。*/
function test() {
    let chart = Application.ActiveDocument.InlineShapes.Item(1).Chart
    chart.ChartTitle.Shadow = true
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表标题的阴影是否可见。*/
function test() {
    let chartTitle = Application.Documents.Item(1).Shapes.Item(1).Chart.ChartTitle
    alert(chartTitle.Shadow)
}
```
