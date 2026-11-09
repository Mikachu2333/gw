# DropLines.Format

返回 **ChartFormat** 对象。只读。



## 语法

express.**Format**

express   一个代表 **DropLines** 对象的变量。

## 类型

ChartFormat

## 示例


```JavaScript
/*本示例将图表工作表 Chart1 中图表的第一个图表组的垂直线的线条样式设置为点划线。*/
function test() {
    let droplines = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartGroups(1).DropLines
    droplines.Format.Line.DashStyle = msoLineDashDot
}
```


```JavaScript
/*本示例将工作表 Sheet1 中第一个图表的第一个图表组的垂直线的线条颜色设置为红色。*/
function test() {
    let droplines = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.ChartGroups(1).DropLines
    droplines.Format.Line.ForeColor.RGB = RGB(255, 0, 0)
}
```
