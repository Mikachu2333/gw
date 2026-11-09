# Gridlines.Name

返回一个 **String** 值，它代表对象的名称。



## 语法

express.**Name**

express   一个代表 **Gridlines** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示图表工作表 Chart1 数值轴的主要网格线的名称。*/
function test() {
    let axis = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlValue)
    alert(axis.MajorGridlines.Name)
}
```


```JavaScript
/*本示例将工作表 Sheet1 中第一个图表类别轴的主要网格线名称赋值给A5单元格。*/
function test() {
    let axis = Worksheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlCategory)
    Range("A5").Value2 = axis.MajorGridlines.Name
}
```
