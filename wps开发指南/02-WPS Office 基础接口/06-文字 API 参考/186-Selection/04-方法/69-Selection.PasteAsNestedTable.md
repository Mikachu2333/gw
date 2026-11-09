# Selection.PasteAsNestedTable

将一个或一组单元格作为嵌套表格粘贴到所选内容中。



## 语法

express.**PasteAsNestedTable()**

express   一个代表 **Selection** 对象的变量。

## 返回值

void

## 说明


仅当“剪贴板”中包含一个或一组单元格，并且所选范围是当前文档的一个或一组单元格时，才能使用 **PasteAsNestedTable** 方法。



## 示例


```JavaScript
/*本示例将活动文档第一个表格作为嵌套表格粘贴到所选内容中。*/
function test() {
    ActiveDocument.Tables.Item(1).Range.Copy()
    Selection.PasteAsNestedTable()
}
```


```JavaScript
/*本示例将第一个文档的第三个表格的第一个单元格作为嵌套表格粘贴到所选内容中。*/
function test() {
    Documents.Item(1).Tables.Item(3).Cell(1, 1).Range.Copy()
    Selection.PasteAsNestedTable()
}
```
