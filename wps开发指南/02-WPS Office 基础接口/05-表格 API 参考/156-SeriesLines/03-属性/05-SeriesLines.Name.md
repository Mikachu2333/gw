# SeriesLines.Name

返回一个 **String** 值，它代表对象的名称。



## 语法

express.**Name**

express   一个代表 **SeriesLines** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示图表工作表 Chart1 上第一个图表组的系列线名称。*/
function test() {
    let chartgroup = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartGroups(1)
    alert(chartgroup.SeriesLines.Name)
}
```


```JavaScript
/*本示例显示工作表 Sheet1 第一个内嵌图表上第一个图表组的系列线名称。*/
function test() {
    let chartgroup = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.ChartGroups(1)
    alert(chartgroup.SeriesLines.Name)
}
```
