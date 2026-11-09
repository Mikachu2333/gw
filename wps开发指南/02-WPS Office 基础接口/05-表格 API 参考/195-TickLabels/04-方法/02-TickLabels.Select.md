# TickLabels.Select

选择对象。



## 语法

express.**Select()**

express   一个代表 **TickLabels** 对象的变量。

## 返回值

Variant

## 示例


```JavaScript
/*以下示例选中 Chart1 上数值轴上的刻度线标志。*/
function test() {
    let tickLabels = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlValue).TickLabels
    tickLabels.Select()
}
```


```JavaScript
/*下例选中 Sheet1 上的第一个图表分类轴上的刻度线标志。*/
function test() {
    let tickLabels = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlCategory).TickLabels
    tickLabels.Select()
}
```
