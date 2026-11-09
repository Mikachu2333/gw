# Range.TopLevelTables

返回一个 **Tables** 集合，该集合代表当前范围最外部嵌套层上的表格。只读。



## 语法

express.**TopLevelTables**

express   一个代表 **Range** 对象的变量。

## 类型

Tables

## 说明


此方法返回一个集合，该集合仅包含当前范围的上下文中最外部嵌套层上的表格。这些表格可能不在整套嵌套表格的最外嵌套层中。



## 示例


```JavaScript
/*本示例新建一个文档，创建一个三层嵌套表格，并在每张表格的第一个单元格中填入该表格所在的嵌套层数，接着选定第二层表格的第二列，然后选定所选内容中最外部嵌套层的第一个表格，尽管最里面的表格在整套嵌套表格的上下文关系中并非顶层表格，但仍会被选定。*/
function test() {
    Documents.Add()
    ActiveDocument.Tables.Add(Selection.Range, 3, 3, wdWord9TableBehavior, wdAutoFitContent)
    let range1 = ActiveDocument.Tables.Item(1).Range
    range1.Copy()
    range1.Cells.Item(1).Range.Text = range1.Cells.Item(1).NestingLevel
    range1.Cells.Item(5).Range.Select()
    Selection.PasteAsNestedTable()
    let range2 = range1.Cells.Item(5).Tables.Item(1).Range
    range2.Cells.Item(1).Range.Text = range2.Cells.Item(1).NestingLevel
    range2.Cells.Item(5).Range.Select()
    Selection.PasteAsNestedTable()
    let range3 = range2.Cells.Item(5).Tables.Item(1).Range
    range3.Cells.Item(1).Range.Text = range3.Cells.Item(1).NestingLevel
    range2.Columns.Item(2).Select()
    Selection.Range.TopLevelTables.Item(1).Select()
}
```


```JavaScript
/*本示例为活动文档的第一个表格的最外部嵌套层上的第一个表格的单元格设置文本内容。*/
function test() {
    let cells = ActiveDocument.Tables.Item(1).Range.TopLevelTables.Item(1).Range.Cells
    for (let i = 1; i <= cells.Count; i++) {
        cells.Item(i).Range.Text = "example " + i
    }
}
```
