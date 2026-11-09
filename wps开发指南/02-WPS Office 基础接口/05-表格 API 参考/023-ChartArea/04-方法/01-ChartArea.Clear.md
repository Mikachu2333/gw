# ChartArea.Clear

清除整个对象。



## 语法

express.**Clear()**

express   一个代表 **ChartArea** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*此示例清除图表工作表 Chart1 中的图表区域（图表数据和格式设置）。*/
function test() {
    let chartarea = Application.Charts.Item("Chart1").ChartArea
    chartarea.Clear()
}
```


```JavaScript
/*此示例清除工作表 Sheet1 第一个内嵌图表的图表区域（图表数据和格式设置）。*/
function test() {
    let chartarea = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.ChartArea
    chartarea.Clear()
}
```
