# TickLabels.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **TickLabels** 对象的变量。

## 返回值

Variant

## 示例


```JavaScript
/*以下示例删除 Chart1 上数值轴上的刻度线标志。*/
function test() {
    let tickLabels = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlValue).TickLabels
    tickLabels.Delete()
}
```


```JavaScript
/*下例删除 Sheet1 上的第一个图表分类轴上的刻度线标志。*/
function test() {
    let tickLabels = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlCategory).TickLabels
    tickLabels.Delete()
}
```
