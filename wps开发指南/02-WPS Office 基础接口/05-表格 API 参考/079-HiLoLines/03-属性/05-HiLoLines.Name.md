# HiLoLines.Name

返回一个 **String** 值，它代表对象的名称。



## 语法

express.**Name**

express   一个代表 **HiLoLines** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示图表工作表 Chart1 中第一个图表组高低点连线的名称。*/
function test() {
    let chartGroup = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartGroups(1)
    alert(chartGroup.HiLoLines.Name)
}
```


```JavaScript
/*本示例将工作表 Sheet1 上第一个图表中第一个图表组高低点连线的名称赋值给C5单元格。*/
function test() {
    let chartGroup = Worksheets.Item("Sheet1").ChartObjects(1).Chart.ChartGroups(1)
    Range("C5").Value2 = chartGroup.HiLoLines.Name
}
```
