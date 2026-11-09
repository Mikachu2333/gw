# ChartGroup.DoughnutHoleSize

返回或设置圆环图图表组的内径大小。内径大小以图表大小的百分比表示，有效取值范围为 10% 到 90%。 **Long** 类型，可读写。



## 语法

express.**DoughnutHoleSize**

express   一个代表 **ChartGroup** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例对图表工作表 Chart1 中第一个圆环图组的内径大小进行设置。本示例应在二维圆环图上运行。*/
function test() {
    let chartgroup = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartGroups(1)
    chartgroup.DoughnutHoleSize = 10
}
```


```JavaScript
/*本示例显示工作表 Sheet1 中第一个内嵌图表中第一个图表组的内径大小。本示例应在二维圆环图上运行。*/
function test() {
    let chartgroup = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.ChartGroups(1)
    alert(chartgroup.DoughnutHoleSize)
}
```
