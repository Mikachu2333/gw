# Cells.NestingLevel

返回指定单元格的嵌套层。 **Long** 类型，只读。



## 语法

express.**NestingLevel**

express   一个代表 **Cells** 对象的变量。

## 类型

number（int4 精度）

## 说明


最外围表格的嵌套层为 1。每一个相连嵌套表格的嵌套层比其前面表格的嵌套层高 1。



## 示例


```JavaScript
/*本示例新建一个文档，创建一个三层嵌套表格，并在每张表格的第一个单元格中填入该表格所在的嵌套层数。*/
function test() {
    Application.Documents.Add()
    Application.ActiveDocument.Tables.Add(Selection.Range, 3, 3, wdWord9TableBehavior, wdAutoFitContent)
    let range1 = Application.ActiveDocument.Tables.Item(1).Range
    range1.Copy()
    range1.Cells.Item(1).Range.Text = range1.Cells.NestingLevel
    range1.Cells.Item(5).Range.Paste()
    let range2 = range1.Cells.Item(5).Tables.Item(1).Range
    range2.Cells.Item(1).Range.Text = range2.Cells.NestingLevel
    range2.Cells.Item(5).Range.Paste()
    let range3 = range2.Cells.Item(5).Tables.Item(1).Range
    range3.Cells.Item(1).Range.Text = range3.Cells.NestingLevel
}
```


```JavaScript
/*本示例显示第一个文档上第一张表格的第一个单元格内第一张表格的嵌套层数。*/
function test() {
    let cells = Documents.Item(1).Tables.Item(1).Cell(1, 1).Tables.Item(1).Range.Cells
    alert(`嵌套层数：${cells.NestingLevel}`)
}
```
