# ErrorBars.Name

返回一个 **String** 值，它代表对象的名称。



## 语法

express.**Name**

express   一个代表 **ErrorBars** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示图表工作表 Chart1 中图表的第二个数据系列的误差线的名称。*/
function test() {
    let errorbars = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(2).ErrorBars
    alert(errorbars.Name)
}
```


```JavaScript
/*本示例显示工作表 Sheet1 中第一个图表的第三个系列的误差线的名称。*/
function test() {
    let errorbars = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.SeriesCollection(3).ErrorBars
    alert(`误差线的名称：${errorbars.Name}`)
}
```
