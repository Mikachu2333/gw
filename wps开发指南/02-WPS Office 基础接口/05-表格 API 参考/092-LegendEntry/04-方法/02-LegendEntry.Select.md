# LegendEntry.Select

选择对象。



## 语法

express.**Select()**

express   一个代表 **LegendEntry** 对象的变量。

## 返回值

Variant

## 示例


```JavaScript
/*本示例选中 Chart1 上第一个图例项。*/
function test() {
    Application.Charts.Item("Chart1").ChartObjects(1).Chart.Legend.LegendEntries().Item(1).Select()
}
```


```JavaScript
/*此示例选中 Sheet1 中第二个图例项。*/
function test() {
    Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.Legend.LegendEntries().Item(2).Select()
}
```
