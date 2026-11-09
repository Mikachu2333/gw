# Legend.Clear

清除整个对象。



## 语法

express.**Clear()**

express   一个代表 **Legend** 对象的变量。

## 返回值

Variant

## 示例


```JavaScript
/*本示例将工作表一上嵌入图表一的图例清除。*/
function test() {
    Worksheets.Item(1).ChartObjects(1).Chart.Legend.Clear()
}
```


```JavaScript
/*此示例清除图表工作表 Chart1 上的第一个图表中的图例。*/
function test() {
    Application.Charts.Item("Chart1").ChartObjects(1).Chart.Legend.Clear()
}
```
