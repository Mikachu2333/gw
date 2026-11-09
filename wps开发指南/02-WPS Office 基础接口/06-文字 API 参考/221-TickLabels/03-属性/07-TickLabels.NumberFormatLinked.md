# TickLabels.NumberFormatLinked

如果数字格式链接到单元格，则为 **True** （以便单元格中的数字格式更改时，标签中的数字格式也会发生变化）。可读/写 **Boolean** 类型。



## 语法

express.**NumberFormatLinked**

express   一个代表 **TickLabels** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将活动文档中第一个内嵌图表的数值轴上刻度线标签的数字格式链接到其单元格。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart == msoTrue) {
        inlineShape.Chart.Axes(xlValue).TickLabels.NumberFormatLinked = true
    }
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的类别轴刻度线标签的数字格式是否链接到单元格。*/
function test() {
    let tickLabels = Documents.Item(1).Shapes.Item(1).Chart.Axes(xlCategory).TickLabels
    alert(tickLabels.NumberFormatLinked)
}
```
