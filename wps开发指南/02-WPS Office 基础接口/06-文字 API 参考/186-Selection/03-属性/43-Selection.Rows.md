# Selection.Rows

返回一个 **[Rows](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Rows/obj)** 集合，该集合代表某个区域、选定内容或表格中所有的表格行。只读。



## 语法

express.**Rows**

express   一个代表 **Selection** 对象的变量。

## 类型

Rows

## 示例


```JavaScript
/*本示例为插入点所在行的各单元格设置边框。*/
function test() {
    Selection.Collapse(wdCollapseStart)
    if (Selection.Information(wdWithInTable)) {
        Selection.Rows.Item(1).Borders.OutsideLineStyle = wdLineStyleSingle
    } else {
        MsgBox("The insertion point is not in a table.")
    }
}
```


```JavaScript
/*本示例将选中内容中表格的所有行高设置为 1 英寸。*/
function test() {
    Selection.Rows.SetHeight(InchesToPoints(1), wdRowHeightExactly)
}
```
