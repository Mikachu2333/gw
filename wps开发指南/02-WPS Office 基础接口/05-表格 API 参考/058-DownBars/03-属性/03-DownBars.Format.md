# DownBars.Format

返回 **ChartFormat** 对象。只读。



## 语法

express.**Format**

express   一个代表 **DownBars** 对象的变量。

## 类型

ChartFormat

## 示例


```JavaScript
/*本示例将工作表 Sheet1 中第一个图表的第一个图表组的跌柱线的前景色设置为绿色。*/
function test() {
    let downbars = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.ChartGroups(1).DownBars
    downbars.Format.Fill.ForeColor.RGB = RGB(0, 255, 0)
}
```


```JavaScript
/*本示例将图表工作表 Chart1 中图表的第一个图表组的跌柱线的线条设置为红色的点划线。*/
function test() {
    let downbars = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartGroups(1).DownBars
    downbars.Format.Line.DashStyle = msoLineDashDot
    downbars.Format.Line.ForeColor.RGB = RGB(255, 0, 0)
}
```
