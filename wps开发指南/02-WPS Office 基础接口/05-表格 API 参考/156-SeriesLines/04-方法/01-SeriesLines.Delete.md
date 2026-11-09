# SeriesLines.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **SeriesLines** 对象的变量。

## 返回值

Variant

## 示例


```JavaScript
/*本示例将图表工作表 Chart1 上第一个图表组的系列线删除。*/
function test() {
    let chartgroup = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartGroups(1)
    chartgroup.SeriesLines.Delete()
}
```


```JavaScript
/*本示例将工作表 Sheet1 第一个内嵌图表上第一个图表组的系列线删除，并显示是否删除成功。*/
function test() {
    let chartgroup = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.ChartGroups(1)
    alert(chartgroup.SeriesLines.Delete())
}
```
