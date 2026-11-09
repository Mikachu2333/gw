# HiLoLines.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **HiLoLines** 对象的变量。

## 返回值

Variant

## 示例


```JavaScript
/*本示例判断如果工作表 Sheet1 上第一个图表中第一个图表组有高低点连线，则将高低点连线删除。*/
function test() {
    let chartGroup = Worksheets.Item("Sheet1").ChartObjects(1).Chart.ChartGroups(1)
    if (chartGroup.HasHiLoLines) {
        chartGroup.HiLoLines.Delete()
    }
}
```


```JavaScript
/*本示例将图表工作表 Chart1 中第一个图表组的高低点连线删除。*/
function test() {
    let chartGroup = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartGroups(1)
    chartGroup.HiLoLines.Delete()
}
```
