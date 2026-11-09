# Axis.Format

返回 ChartFormat 对象。只读。



## 语法

express.**Format**

express   一个代表 **Axis** 对象的变量。

## 类型

ChartFormat

## 示例


```JavaScript
/*本示例将工作表 Sheet1 中第一张图表的数值轴的背景填充色设置为蓝色。*/
function test() {
    let axis = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlValue)
    axis.Format.Fill.BackColor.RGB = RGB(0, 255, 255)
}
```


```JavaScript
/*本示例将图表工作表 Chart 中图表的类别轴的线条宽度设置为 3 。*/
function test() {
    let axis = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlCategory)
    axis.Format.Line.Weight = 3
}
```
