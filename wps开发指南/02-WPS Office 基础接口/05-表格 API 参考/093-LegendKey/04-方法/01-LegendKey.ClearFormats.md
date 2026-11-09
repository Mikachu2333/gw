# LegendKey.ClearFormats

清除对象的格式设置。



## 语法

express.**ClearFormats()**

express   一个代表 **LegendKey** 对象的变量。

## 返回值

Variant

## 示例


```JavaScript
/*下例清除 Sheet1 上第一个图表的第三个图例项的图例标示格式。*/
function test() {
    let legend = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.Legend
    legend.LegendEntries(3).LegendKey.ClearFormats()
}
```


```JavaScript
/*本示例清除图表工作表 Chart1 上第二个图例项的图例标示的格式。*/
function test() {
    let legend = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Legend
    legend.LegendEntries(2).LegendKey.ClearFormats()
}
```
