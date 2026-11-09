# ChartGroup.FirstSliceAngle

以度为单位返回或设置饼图或圆环图的第一扇区的角度（从垂直方向顺时针计算）。仅应用于饼图、三维饼图和圆环图。值的范围从 0 到 360。 **Long** 类型，可读写。



## 语法

express.**FirstSliceAngle**

express   一个代表 **ChartGroup** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例设置图表工作表 Chart1 中的第一个图表组中的第一个扇区的角度。本示例应在二维饼图上运行。*/
function test() {
    let chartgroup = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartGroups(1)
    chartgroup.FirstSliceAngle = 15
}
```


```JavaScript
/*本示例显示工作表 Sheet1 第一个内嵌图表中第一个图表组中的第一个扇区的角度。本示例应在二维饼图上运行。*/
function test() {
    let chartgroup = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.ChartGroups(1)
    alert(chartgroup.FirstSliceAngle)
}
```
