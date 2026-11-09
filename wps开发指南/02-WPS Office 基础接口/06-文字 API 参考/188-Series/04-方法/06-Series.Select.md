# Series.Select

选择对象。



## 语法

express.**Select()**

express   一个代表 **Series** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例将活动文档中第一个图表的第一个系列选中。*/
function test() {
    let inlineShapes = ActiveDocument.InlineShapes.Item(1)
    if (inlineShapes.HasChart) {
        inlineShapes.Chart.SeriesCollection(1).Select()
    }
}
```


```JavaScript
/*本示例将第一个文档中第一个图表的第三个系列选中。*/
function test() {
    let inlineShapes = Documents.Item(1).InlineShapes.Item(1)
    if (inlineShapes.HasChart) {
        inlineShapes.Chart.SeriesCollection(3).Select()
    }
}
```
