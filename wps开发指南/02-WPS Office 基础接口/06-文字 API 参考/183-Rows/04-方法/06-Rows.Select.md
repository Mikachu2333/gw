# Rows.Select

选择表格中行的集合。



## 语法

express.**Select()**

express   一个代表 **Rows** 对象的变量。

## 返回值

void

## 说明


使用此方法后，可使用 **Selection** 对象处理所选项目。有关详细信息，请参阅处理 Selection 对象。



## 示例


```JavaScript
/*本示例选择 example.docx 文档的第一个表格的所有行。*/
function test() {
    Documents.Item("example.docx").Tables.Item(1).Rows.Select()
}
```


```JavaScript
/*本示例选择活动文档的第一个表格的所有行，并显示其内容。*/
function test() {
    ActiveDocument.Tables.Item(1).Rows.Select()
    alert(Selection.Text)
}
```
