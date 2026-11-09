# Range.Cells

返回一个 **[Cells](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cells/obj)** 集合，该集合代表在某区域中的表格单元格。只读。



## 语法

express.**Cells**

express   一个代表 **Range** 对象的变量。

## 类型

Cells

## 示例


```JavaScript
/*本示例在新文档中创建一个 3x3 表格并给表格中的每个单元格依次分配一个单元格编号。*/
function test() {
    let table = Documents.Add().Tables.Add(Selection.Range, 3, 3)
    let cells = table.Range.Cells
    for (let i = 1; i <= cells.Count; i++) {
        cells.Item(i).Range.InsertAfter('Cell ' + i)
    }
}
```


```JavaScript
/*本示例首先将选定单元格合并为一个单元格，然后将该单元格拆分为同一行中的四个单元格。*/
function test() {
    Selection.Information(wdWithInTable)
    Selection.Range.Cells.Split(1, 4, true)
}
```
