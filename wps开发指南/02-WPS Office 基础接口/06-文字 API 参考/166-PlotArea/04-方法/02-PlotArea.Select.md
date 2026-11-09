# PlotArea.Select

选择对象。



## 语法

express.**Select()**

express   一个代表 **PlotArea** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例选中活动文档中第一个图表的绘图区。*/
function test() {
    ActiveDocument.InlineShapes.Item(1).Chart.PlotArea.Select()
}
```


```JavaScript
/*本示例选中活动文档中第一个图表的绘图区，并通知用户。*/
function test() {
    if (ActiveDocument.InlineShapes.Count > 0 && ActiveDocument.InlineShapes.Item(1).HasChart) {
        let chart = ActiveDocument.InlineShapes.Item(1).Chart
        chart.PlotArea.Select()
        alert("绘图区已选中")
    } else {
        alert("活动文档无图表")
    }
}
```
