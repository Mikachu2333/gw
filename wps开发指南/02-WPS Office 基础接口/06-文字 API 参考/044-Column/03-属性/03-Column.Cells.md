# Column.Cells

返回一个 **[Cells](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cells/obj)** 集合，该集合代表表格列中的表格单元格。只读。



## 语法

express.**Cells**

express   一个代表 **Column** 对象的变量。

## 类型

Cells

## 示例


```JavaScript
/*本示例显示所选表格列的第一列的单元格数量。*/
function test() {
    alert(Selection.Columns.Item(1).Cells.Count)
}
```


```JavaScript
/*本示例显示活动文档第一个表格的第二列单元格的宽度。*/
function test() {
    alert(ActiveDocument.Tables.Item(1).Columns.Item(2).Cells.Width)
}
```
