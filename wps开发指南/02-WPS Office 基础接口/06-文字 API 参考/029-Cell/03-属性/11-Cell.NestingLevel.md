# Cell.NestingLevel

返回指定单元格的嵌套层。 **Long** 类型，只读。



## 语法

express.**NestingLevel**

express   一个代表 **Cell** 对象的变量。

## 类型

number（int4 精度）

## 说明


最外围表格的嵌套层为 1。每一个相连嵌套表格的嵌套层比其前面表格的嵌套层高 1。



## 示例


```JavaScript
/*本示例新建一个文档，创建一个三层嵌套表格，并在每个表格的第一个单元格中填入该表格所在的嵌套层数。*/
function test() {
    Application.Documents.Add()
    Application.ActiveDocument.Tables.Add(Selection.Range, 3, 3, wdWord9TableBehavior, wdAutoFitContent)

    let Rng1 = Application.ActiveDocument.Tables.Item(1).Range
    Rng1.Copy()
    Rng1.Cells.Item(1).Range.Text = Rng1.Cells.Item(1).NestingLevel
    Rng1.Cells.Item(5).Select()
    Application.Selection.PasteAsNestedTable()

    let Rng2 = Rng1.Cells.Item(5).Tables.Item(1).Range
    Rng2.Cells.Item(1).Range.Text = Rng2.Cells.Item(1).NestingLevel
    Rng2.Cells.Item(5).Select()
    Application.Selection.PasteAsNestedTable()

    let Rng3 = Rng2.Cells.Item(5).Tables.Item(1).Range
    Rng3.Cells.Item(1).Range.Text = Rng3.Cells.Item(1).NestingLevel
}
```


```JavaScript
/*本示例中创建一个二层嵌套表格，并显示第二个表格的嵌套层数。*/
function test() {
    let tables = Application.ActiveDocument.Tables
    let table = tables.Add(Selection.Range, 3, 3, wdWord9TableBehavior, wdAutoFitContent)
    let table2 = tables.Add(table.Cell(2, 2).Range, 3, 3, wdWord9TableBehavior, wdAutoFitContent)
    alert(table2.Cell(2, 2).NestingLevel)
}
```
