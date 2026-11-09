# Rows.NestingLevel

返回指定表格行的嵌套层。只读 **Long** 类型。



## 语法

express.**NestingLevel**

express   一个代表 **Rows** 对象的变量。

## 类型

number（int4 精度）

## 说明


最外围表格的嵌套层为 1。每一个相连嵌套表格的嵌套层比其前面表格的嵌套层高 1。



## 示例


```JavaScript
/*本示例新建一个文档，创建一个三层嵌套表格，并在每张表格的第一个单元格中填入该表格所在的嵌套层数。*/
function test() {
    Documents.Add()
    ActiveDocument.Tables.Add(Selection.Range, 3, 3, wdWord9TableBehavior, wdAutoFitContent)

    let range1 = ActiveDocument.Tables.Item(1).Range
    range1.Copy()
    range1.Cells.Item(1).Range.Text = range1.Rows.NestingLevel
    range1.Cells.Item(5).Range.Paste()

    let range2 = range1.Cells.Item(5).Tables.Item(1).Range
    range2.Cells.Item(1).Range.Text = range2.Rows.NestingLevel
    range2.Cells.Item(5).Range.Paste()

    let range3 = range2.Cells.Item(5).Tables.Item(1).Range
    range3.Cells.Item(1).Range.Text = range3.Rows.NestingLevel
}
```


```JavaScript
/*本示例显示所选表格行的嵌套层。*/
function test() {
    alert(Selection.Rows.NestingLevel)
}
```
