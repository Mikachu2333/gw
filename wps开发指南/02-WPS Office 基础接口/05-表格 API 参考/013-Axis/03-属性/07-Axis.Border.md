# Axis.Border

返回一个 **Border** 对象，它代表对象的边框。



## 语法

express.**Border**

express   一个代表 **Axis** 对象的变量。

## 类型

Border

## 示例


```JavaScript
/*本示例将工作表 Sheet1 上第一个图表中的分类轴设置为绿色。*/
function test() {
    let axis = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlCategory)
    axis.Border.Color = RGB(0, 255, 0)
}
```


```JavaScript
/*本示例将图表工作表 Chart1 中图表的数值轴设置为粗边框，并将其颜色设置为红色。*/
function test() {
    let axis = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlValue)
    axis.Border.Weight = xlThick
    axis.Border.ColorIndex  = 3
}
```
