# Cell.Select

选择指定的对象。



## 语法

express.**Select()**

express   一个代表 **Cell** 对象的变量。

## 返回值

void

## 说明


使用该方法后，可用 **[Selection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/obj)** 对象来处理选定项目。有关详细信息，请参阅 处理 Selection 对象。



## 示例


```JavaScript
/*本示例判断如果选中内容位于表格中，则选中第一个单元格，然后显示该单元格中的文本。*/
function test() {
    if (Application.Selection.Information(wdWithInTable)) {
        let cell = Application.Selection.Cells.Item(1)
        cell.Select()
        alert(Application.Selection.Text)
    } else {
        alert("选中内容不位于表格")
    }
}
```


```JavaScript
/*本示例选中活动文档上第一张表格的第一行中所有单元格，并显示选中单元格中的文本。*/
function test() {
    let table = Application.ActiveDocument.Tables.Item(1)
    let firstRow = table.Rows.Item(1)
    for (let i = 1; i <= firstRow.Cells.Count; i++) {
        let cell = firstRow.Cells.Item(i)
        cell.Select()
        alert(Application.Selection.Text)
    }
}
```
