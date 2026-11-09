# Row.Cells

返回一个 **[Cells](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cells/obj)** 集合，该集合代表在某一列、行、选定内容或区域中的表格单元格。只读。



## 语法

express.**Cells**

express   一个代表 **Row** 对象的变量。

## 类型

Cells

## 示例


```JavaScript
/*本示例显示所选内容中第一行的单元格的数量。*/
function test() {
    let cells = Selection.Rows.Item(1).Cells
    alert(cells.Count)
}
```


```JavaScript
/*本示例显示活动文档的第一个表格中第二行单元格的高度。*/
function test() {
    alert(ActiveDocument.Tables.Item(1).Rows.Item(2).Cells.Height)
}
```
