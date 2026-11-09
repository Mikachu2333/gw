# LegendKey.Format

返回 **ChartFormat** 对象。只读。



## 语法

express.**Format**

express   一个代表 **LegendKey** 对象的变量。

## 类型

ChartFormat

## 示例


```JavaScript
/*下例将 Sheet1 上的第一个图表的第三个图例项的图例标示前景填充色设置为绿色。*/
function test() {
    let legend = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.Legend
    legend.LegendEntries(3).LegendKey.Format.Fill.ForeColor.RGB = RGB(0, 255, 0)
}
```


```JavaScript
/*本示例设置图表工作表 Chart1 上第二个图例项的图例标示边框线条的粗细。*/
function test() {
    let legend = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Legend
    legend.LegendEntries(2).LegendKey.Format.Line.Weight = 2
}
```
