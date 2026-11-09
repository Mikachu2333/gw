# Table.Range

返回一个 **Range** 对象，该对象代表指定表格中所含的文档部分。



## 语法

express.**Range**

express   一个代表 **Table** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*本示例设置活动文档中的第一个表格的内部边框和外部边框*/
function test() {
    let range = ActiveDocument.Tables.Item(1).Range
    range.Borders.InsideLineStyle = wdLineStyleSingle
    range.Borders.OutsideLineStyle = wdLineStyleDouble
}
```


```JavaScript
/*本示例向选中的第一个表格的第一个单元格添加文本*/
function test() {
    let range = Selection.Tables.Item(1).Range
    range.Cells.Item(1).Range.InsertAfter("Cell 1")
}
```
