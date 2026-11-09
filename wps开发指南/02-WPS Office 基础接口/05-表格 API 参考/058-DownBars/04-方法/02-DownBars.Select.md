# DownBars.Select

选择对象。



## 语法

express.**Select()**

express   一个代表 **DownBars** 对象的变量。

## 返回值

Variant

## 示例


```JavaScript
/*本示例选中图表工作表 Chart1 中图表的第一个图表组的跌柱线。*/
function test() {
    let downbars = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartGroups(1).DownBars
    downbars.Select()
}
```


```JavaScript
/*本示例选中工作表 Sheet1 中第一个图表的第一个图表组的跌柱线，并设置该跌柱线的前景色为红色。*/
function test() {
    let downbars = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.ChartGroups(1).DownBars
    downbars.Select()
    Selection.Format.Fill.ForeColor.RGB = RGB(255, 0, 0)
}
```
