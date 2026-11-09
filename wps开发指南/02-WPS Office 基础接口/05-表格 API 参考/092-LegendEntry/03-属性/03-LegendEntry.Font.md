# LegendEntry.Font

返回一个 **Font** 对象，它代表指定对象的字体。



## 语法

express.**Font**

express   一个代表 **LegendEntry** 对象的变量。

## 类型

Font

## 示例


```JavaScript
/*下例将 Sheet1 中的第一个图表的第二个图例项字体设置加粗。*/
function test() {
    let legend = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.Legend
    legend.LegendEntries(2).Font.Bold = true
}
```


```JavaScript
/*下例将 Chart1 上第一个图例项字体颜色设置成绿色。*/
function test() {
    let legend = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Legend
    legend.LegendEntries(1).Font.Color = RGB(0, 255, 0)
}
```
