# AxisTitle.Format

返回 **ChartFormat** 对象。只读。



## 语法

express.**Format**

express   一个代表 **AxisTitle** 对象的变量。

## 类型

ChartFormat

## 示例


```JavaScript
/*本示例将图表工作表 Chart1 中图表的分类轴标题的边框设置为虚线。*/
function test() {
    let axistitle = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlCategory).AxisTitle
    axistitle.Format.Line.DashStyle = msoLineDashDotDot
}
```


```JavaScript
/*本示例将工作表 Sheet1 中第一张图表的数值轴标题的前景色设置为蓝色。*/
function test() {
    let axistitle = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlValue).AxisTitle
    axistitle.Format.Fill.ForeColor.RGB = RGB(0, 255, 255)
}
```
