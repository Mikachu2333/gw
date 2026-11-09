# ChartArea.Select

选择对象。



## 语法

express.**Select()**

express   一个代表 **ChartArea** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例选中活动文档中第一个内嵌图表的图表区。*/
function test() {
    let chartArea = Application.ActiveDocument.InlineShapes.Item(1).Chart.ChartArea
    chartArea.Select()
}
```


```JavaScript
/*本示例判断如果第一个文档上第一张图表的标题为“成绩表”，则选中该图表的图表区。*/
function test() {
    let chart = Application.Documents.Item(1).InlineShapes(1).Chart
    if (chart.ChartTitle.Text == "成绩表") {
        chart.ChartArea.Select()
    }
}
```
