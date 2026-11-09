# ChartArea.Name

返回对象的名称。只读 **String** 类型。



## 语法

express.**Name**

express   一个代表 **ChartArea** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示活动文档中第一个图表的图表区的名称。*/
function test() {
    let chartArea = ActiveDocument.InlineShapes.Item(1).Chart.ChartArea
    alert(chartArea.Name)
}
```


```JavaScript
/*本示例判断如果第一个文档上第一张图表的标题为“成绩表”，则显示该图表的图表区的名称。*/
function test() {
    let chart = Application.Documents.Item(1).InlineShapes(1).Chart
    if (chart.ChartTitle.Text == "成绩表") {
        alert(chart.ChartArea.Name)
    }
}
```
