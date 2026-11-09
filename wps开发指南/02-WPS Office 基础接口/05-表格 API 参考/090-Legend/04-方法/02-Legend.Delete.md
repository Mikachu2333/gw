# Legend.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **Legend** 对象的变量。

## 返回值

Variant

## 示例


```JavaScript
/*本示例将工作表一上嵌入图表一的图例删除。*/
function test() {
    Worksheets.Item(1).ChartObjects(1).Chart.Legend.Delete()
}
```


```JavaScript
/*此示例删除图表工作表 Chart1 上的第一个图表中的图例。*/
function test() {
    Application.Charts.Item("Chart1").ChartObjects(1).Chart.Legend.Delete()
}
```
