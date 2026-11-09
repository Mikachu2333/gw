# ChartTitle.Select

选择对象。



## 语法

express.**Select()**

express   一个代表 **ChartTitle** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例选中活动文档上第一张内嵌图表的图表标题。*/
function test() {
    let chart = Application.ActiveDocument.InlineShapes.Item(1).Chart
    chart.ChartTitle.Select()
}
```


```JavaScript
/*本示例判断如果第一个文档上第一个形状中图表的标题文本为“成绩表_2”，则选中该标题。*/
function test() {
    let chartTitle = Application.Documents.Item(1).Shapes.Item(1).Chart.ChartTitle
    if (chartTitle.Caption == "成绩表_2") {
        chartTitle.Select()
    }
}
```
