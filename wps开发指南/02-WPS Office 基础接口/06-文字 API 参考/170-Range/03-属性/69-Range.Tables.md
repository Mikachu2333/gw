# Range.Tables

返回一个 **Tables** 集合，该集合代表指定范围内的所有表格。只读。



## 语法

express.**Tables**

express   一个代表 **Range** 对象的变量。

## 类型

Tables

## 示例


```JavaScript
/*本示例在活动文档的主文档文章中创建一个 5x5 表格，然后对其应用预定义格式。*/
function test() {
    Selection.Collapse(wdCollapseStart)
    let table = ActiveDocument.Content.Tables.Add(Selection.Range, 5, 5)
    table.AutoFormat(wdTableFormatClassic2)
}
```


```JavaScript
/*本示例在活动文档中第一个表格的首列中插入数值和文本。*/
function test() {
    let num = 90
    let cells = ActiveDocument.Range().Tables.Item(1).Columns.Item(1).Cells
    for (let i = 1; i <= cells.Count; i++) {
        cells.Item(i).Range.Text = num + " Sales"
        num = num + 1
    }
}
```
