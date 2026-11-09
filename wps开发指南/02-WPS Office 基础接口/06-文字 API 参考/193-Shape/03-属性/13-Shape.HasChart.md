# Shape.HasChart

如果指定的形状具有图表，则为 **msoTrue** 。只读。



## 语法

express.**HasChart**

express   一个代表 **Shape** 对象的变量。

## 类型

MsoTriState

## 说明


对于 OLE 图表，此属性总是返回 msoFalse。此时请使用 `ActiveDocument.InlineShape(1).OLEFormat.ProgID`，并且检查是否存在下列可能的值：“Excel.Chart.8”、“MSGraph.Chart.8”、“Excel.Sheet.8”、“Excel.Chart.5”、“MSGraph.Chart.5”或“Excel.Sheet.5”。



## 示例


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的第二个数据系列的趋势线数目。*/
function test() {
    let shape = Documents.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        alert(shape.Chart.SeriesCollection(2).Trendlines().Count)
    }
}
```


```JavaScript
/*本示例显示活动文档上第一个形状是否包含图表。*/
function test() {
    alert(ActiveDocument.Shapes.Item(1).HasChart === msoTrue)
}
```
