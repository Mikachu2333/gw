# Axis.HasMajorGridlines

如果坐标轴有主要网格线，则该值为 **True** 。只有主要坐标轴组中的坐标轴才能有网格线。 **Boolean** 类型，可读写。



## 语法

express.**HasMajorGridlines**

express   一个代表 **Axis** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例判断如果图表工作表 Chart1 中图表的数值轴拥有主要网格线，则将其设置为红色。*/
function test() {
    let axis = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlValue)
    if (axis.HasMajorGridlines) {
        axis.MajorGridlines.Border.ColorIndex = 3
    }
}
```


```JavaScript
/*本示例显示工作表 Sheet1 中第一张图表类别轴是否拥有主要网格线。*/
function test() {
    let axis = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlCategory)
    alert(axis.HasMajorGridlines)
}
```
