# UpBars.Format

返回 **ChartFormat** 对象。只读。



## 语法

express.**Format**

express   一个代表 **UpBars** 对象的变量。

## 类型

ChartFormat

## 示例


```JavaScript
/*本示例将工作表 Sheet1 中第一个图表的第一个图表组的涨柱线的前景色设置为黄色。*/
function test() {
    let upbars = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.ChartGroups(1).UpBars
    upbars.Format.Fill.ForeColor.RGB = RGB(255, 255, 0)
}
```


```JavaScript
/*本示例将图表工作表 Chart1 中图表的第一个图表组的涨柱线的线条设置为蓝色的长划线。*/
function test() {
    let upbars = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartGroups(1).UpBars
    upbars.Format.Line.DashStyle = msoLineLongDash
    upbars.Format.Line.ForeColor.RGB = RGB(0, 0, 255)
}
```
