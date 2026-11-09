# Row.Select

选择指定的表格行。



## 语法

express.**Select()**

express   一个代表 **Row** 对象的变量。

## 返回值

void

## 说明


使用此方法后，请使用 **Selection** 对象来处理所选行。有关详细信息，请参阅处理 Selection 对象。



## 示例


```JavaScript
/*本示例选择 example.docx 文档的第一个表格的第一行。*/
function test() {
    Documents.Item("example.docx").Tables.Item(1).Rows.Item(1).Select()
}
```


```JavaScript
/*本示例选择活动文档的第一个表格的第二行，并显示其内容。*/
function test() {
    ActiveDocument.Tables.Item(1).Rows.Item(2).Select()
    alert(Selection.Text)
}
```
