# ErrorBars.ClearFormats

清除对象的格式设置。



## 语法

express.**ClearFormats()**

express   一个代表 **ErrorBars** 对象的变量。

## 返回值

Variant

## 示例


```JavaScript
/*此示例清除工作表 Sheet1 中第一张图表的第一个系列的误差线的格式设置。*/
function test() {
    let errorbars = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.SeriesCollection(1).ErrorBars
    errorbars.ClearFormats()
}
```


```JavaScript
/*此示例判断如果图表工作表 Chart1 中图表的第三个系列的误差线为红色，则清除该误差线的格式设置。*/
function test() {
    let errorbars = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(3).ErrorBars
    if (errorbars.Border.ColorIndex == 3) {
        errorbars.ClearFormats()
    }
}
```
