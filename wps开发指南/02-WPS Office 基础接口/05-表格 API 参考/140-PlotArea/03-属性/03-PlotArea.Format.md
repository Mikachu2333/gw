# PlotArea.Format

返回 **ChartFormat** 对象。只读。



## 语法

express.**Format**

express   一个代表 **PlotArea** 对象的变量。

## 类型

ChartFormat

## 示例


```JavaScript
/*本示例在 Chart1 中的绘图区右侧偏移 5 磅添加阴影。*/
function test() {
    let plotArea = Application.Charts.Item("Chart1").ChartObjects(1).Chart.PlotArea
    plotArea.Format.Shadow.Visible = true
    plotArea.Format.Shadow.OffsetX = 5
}
```


```JavaScript
/*下例将 Sheet1 上第一个图表的绘图区背景色设为红色。*/
function test() {
    let plotArea = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.PlotArea
    plotArea.Format.Fill.BackColor.RGB = RGB(255, 0, 0)
}
```
