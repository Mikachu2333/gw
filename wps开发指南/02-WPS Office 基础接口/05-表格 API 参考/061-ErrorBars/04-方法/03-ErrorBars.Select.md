# ErrorBars.Select

选择对象。



## 语法

express.**Select()**

express   一个代表 **ErrorBars** 对象的变量。

## 返回值

Variant

## 示例


```JavaScript
/*本示例选中图表工作表 Chart1 中图表的第二个系列的误差线。*/
function test() {
    let errorbars = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(2).ErrorBars
    errorbars.Select()
}
```


```JavaScript
/*本示例选中工作表 Sheet1 中第一个图表的第一个系列的误差线，并显示该误差线的名称。*/
function test() {
    let errorbars = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.SeriesCollection(1).ErrorBars
    errorbars.Select()
    alert(Selection.Name)
}
```
