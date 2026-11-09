# Cell.Range

返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 对象，该对象代表指定对象所含的部分文档。



## 语法

express.**Range**

express   一个代表 **Cell** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*本示例复制第一张表格的首行第一个单元格内容，并粘贴到选定位置*/
function test() {
    let tables = Application.ActiveDocument.Tables
    if (tables.Count >= 1) {
        tables.Item(1).Rows.Item(1).Cells.Item(1).Range.Copy()
        Application.Selection.Paste()
    }
}
```


```JavaScript
/*本示例选中第一张表格中第三行第二个单元格的内容*/
function test() {
    let tables = Application.ActiveDocument.Tables
    tables.Item(1).Rows.Item(3).Cells.Item(2).Range.Select()
}
```
