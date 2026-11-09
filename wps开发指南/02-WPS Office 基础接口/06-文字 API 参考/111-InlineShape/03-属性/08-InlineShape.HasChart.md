# InlineShape.HasChart

如果指定的形状是图表，则为 **msoTrue** 。只读。



## 语法

express.**HasChart**

express   一个代表 **InlineShape** 对象的变量。

## 类型

MsoTriState

## 说明


对于 OLE 图表，此属性总是返回 False。此时请使用 `InlineShape.OLEFormat.ProgID`，并且检查是否存在下列可能的值：“Excel.Chart.8”、“MSGraph.Chart.8”、“Excel.Sheet.8”、“Excel.Chart.5”、“MSGraph.Chart.5”或“Excel.Sheet.5”。



## 示例


```JavaScript
/*本示例显示活动文档中第一个嵌入式图形是否为图表。*/
function test() {
    alert(ActiveDocument.InlineShapes.Item(1).HasChart === msoTrue)
}
```


```JavaScript
/*本示例判断如果活动文档中的第一个内嵌图形为图表，则向该图表添加带外边框的模拟运算表。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.HasDataTable = true
        inlineShape.Chart.DataTable.HasBorderOutline = true
    }
}
```
