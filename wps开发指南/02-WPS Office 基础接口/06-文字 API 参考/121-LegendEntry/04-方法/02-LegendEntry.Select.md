# LegendEntry.Select

选择对象。



## 语法

express.**Select()**

express   一个代表 **LegendEntry** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例选中活动文档中第一个图表上位于图例顶部的图例项（这通常是第一个系列的图例）。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.Legend.LegendEntries().Item(1).Select()
    }
}
```


```JavaScript
/*本示例选中第一个文档第一个形状中图表上位于图例底部的图例项（这通常是最后一个系列的图例）。*/
function test() {
    let legendEntries = Documents.Item(1).Shapes.Item(1).Chart.Legend.LegendEntries()
    legendEntries.Item(legendEntries.Count).Select()
}
```
