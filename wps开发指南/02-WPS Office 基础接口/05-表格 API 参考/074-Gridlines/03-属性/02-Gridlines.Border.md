# Gridlines.Border

返回一个 **Border** 对象，它代表对象的边框。



## 语法

express.**Border**

express   一个代表 **Gridlines** 对象的变量。

## 类型

Border

## 示例


```JavaScript
/*本示例打开工作表 Sheet1 中第一个图表类别轴的次要网格线，并将网格线边框设置为绿色。*/
function test() {
    let axis = Worksheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlCategory)
    axis.HasMinorGridlines = true
    axis.MinorGridlines.Border.ColorIndex = 4
}
```


```JavaScript
/*本示例显示图表工作表 Chart1 数值轴的主要网格线的边框粗细是否为细线 。*/
function test() {
    let axis = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlValue)
    alert(axis.MajorGridlines.Border.Weight == xlHairline)
}
```
