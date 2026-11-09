# ChartTitle.Name

返回对象的名称。只读 **String** 类型。



## 语法

express.**Name**

express   一个代表 **ChartTitle** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示活动文档上第一张内嵌图表的图表标题的名称。*/
function test() {
    let chart = Application.ActiveDocument.InlineShapes.Item(1).Chart
    alert(`图表标题的名称为：${chart.ChartTitle.Name}`)
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表标题的名称。*/
function test() {
    let chartTitle = Application.Documents.Item(1).Shapes.Item(1).Chart.ChartTitle
    alert(chartTitle.Name)
}
```
