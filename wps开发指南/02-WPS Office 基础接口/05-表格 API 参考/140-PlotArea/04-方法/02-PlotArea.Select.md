# PlotArea.Select

选择对象。



## 语法

express.**Select()**

express   一个代表 **PlotArea** 对象的变量。

## 返回值

Varint

## 示例


```JavaScript
/*本示例选中 Chart1 中的绘图区。*/
function test() {
    let plotArea = Application.Charts.Item("Chart1").ChartObjects(1).Chart.PlotArea
    plotArea.Select()
}
```


```JavaScript
/*下例选中 Sheet1 上第一个图表的绘图区。*/
function test() {
    let plotArea = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.PlotArea
    plotArea.Select()
}
```
