# ChartArea.Clear

清除整个对象。



## 语法

express.**Clear()**

express   一个代表 **ChartArea** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例清除活动文档中第一个图表的图表区域（图表数据和格式设置）。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.ChartArea.Clear()
    }
}
```


```JavaScript
/*本示例清除第一个文档上第一个图表的图表区域（图表数据和格式设置）。*/
function test() {
    let chartArea = Application.Documents.Item(1).InlineShapes.Item(1).Chart.ChartArea
    chartArea.Clear()
}
```
