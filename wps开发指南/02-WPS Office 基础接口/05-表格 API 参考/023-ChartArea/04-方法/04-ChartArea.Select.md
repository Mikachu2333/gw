# ChartArea.Select

选择对象。



## 语法

express.**Select()**

express   一个代表 **ChartArea** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*此示例选中图表工作表 Chart1 的图表区。*/
function test() {
    let chartarea = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartArea
    chartarea.Select()
}
```


```JavaScript
/*此示例选中 Sheet1 工作表中第一个内嵌图表的图表区。*/
function test() {
    let chartarea = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.ChartArea
    chartarea.Select()
}
```
