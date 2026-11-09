# Cells.HeightRule

返回或设置一个 **WdRowHeightRule** 常量，该常量代表确定指定单元格高度的规则。可读写。



## 语法

express.**HeightRule**

express   一个代表 **Cells** 对象的变量。

## 类型

WdRowHeightRule

## 说明


设置 **Cells** 集合的 **HeightRule** 属性将自动设置整行的高度。



## 示例


```JavaScript
/*本示例将活动文档上第一个表格的第一行的所有单元格的高度设置为至少100磅*/
function test() {
    let cells = Application.ActiveDocument.Tables.Item(1).Rows.Item(1).Cells
    cells.HeightRule = wdRowHeightAtLeast
    cells.Height = 100
}
```


```JavaScript
/*本示例显示第一个文档上第一个表格的第一列的所有单元格的高度规则是否为wdRowHeightExactly。*/
function test() {
    let cells = Application.Documents.Item(1).Tables.Item(1).Columns.Item(1).Cells
    alert(cells.HeightRule == wdRowHeightExactly)
}
```
