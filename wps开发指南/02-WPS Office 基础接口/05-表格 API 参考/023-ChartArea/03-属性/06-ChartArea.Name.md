# ChartArea.Name

返回一个 **String** 值，它代表对象的名称。只读。



## 语法

express.**Name**

express   一个代表 **ChartArea** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*此示例显示工作表 Sheet1 中第一个内嵌图表区的名称。*/
function test() {
    let chartarea = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.ChartArea
    alert(chartarea.Name)
}
```


```JavaScript
/*本示例显示图表工作表 Chart1 的图表区名称是否为图表。*/
function test() {
    let chartarea = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartArea
    alert(chartarea.Name == "图表")
}
```
