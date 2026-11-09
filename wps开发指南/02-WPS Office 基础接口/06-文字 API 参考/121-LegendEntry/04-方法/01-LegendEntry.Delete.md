# LegendEntry.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **LegendEntry** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例删除活动文档中第一个图表上位于图例顶部的图例项（这通常是第一个系列的图例）。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.Legend.LegendEntries().Item(1).Delete()
    }
}
```


```JavaScript
/*本示例删除第一个文档第一个形状中图表上位于图例顶部的图例项（这通常是第一个系列的图例）。*/
function test() {
    Documents.Item(1).Shapes.Item(1).Chart.Legend.LegendEntries().Item(1).Delete()
}
```
