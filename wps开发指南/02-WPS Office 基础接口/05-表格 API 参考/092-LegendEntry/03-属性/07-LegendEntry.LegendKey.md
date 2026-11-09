# LegendEntry.LegendKey

返回一个 **LegendKey** 对象，该对象表示与图例项相关的图例标示。



## 语法

express.**LegendKey**

express   一个代表 **LegendEntry** 对象的变量。

## 类型

LegendKey

## 示例


```JavaScript
/*本示例显示 Chart1 上图例项一的图例标示的宽度。*/
function test() {
    alert(Application.Charts.Item("Chart1").ChartObjects(1).Chart.Legend.LegendEntries(1).LegendKey.Width)
}
```


```JavaScript
/*下例显示 Sheet1 中的第一个图表的第二个图例项的图例标示的高度。*/
function test() {
    let legend = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.Legend
    alert(legend.LegendEntries(2).LegendKey.Height)
}
```
