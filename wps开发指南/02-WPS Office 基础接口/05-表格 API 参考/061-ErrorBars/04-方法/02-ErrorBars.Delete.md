# ErrorBars.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **ErrorBars** 对象的变量。

## 返回值

Variant

## 示例


```JavaScript
/*此示例删除工作表 Sheet1 中第一张图表的第一个系列的误差线。*/
function test() {
    let errorbars = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.SeriesCollection(1).ErrorBars
    errorbars.Delete()
}
```


```JavaScript
/*此示例删除图表工作表 Chart1 中图表的第三个系列的误差线。*/
function test() {
    let errorbars = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(3).ErrorBars
    errorbars.Delete()
}
```
