# Table.NestingLevel

返回指定表格的嵌套层。只读 **Long** 类型。



## 语法

express.**NestingLevel**

express   一个代表 **Table** 对象的变量。

## 类型

number（int4 精度）

## 说明


最外围表格的嵌套层为 1。每一个相连嵌套表格的嵌套层比其前面表格的嵌套层高 1。



## 示例


```JavaScript
/*本示例显示活动文档中第一个表格所在的嵌套层数。*/
function test() {
    alert(ActiveDocument.Tables.Item(1).NestingLevel)
}
```


```JavaScript
/*本示例在第一个文档中每个嵌套表格的第一个单元格上填入该表格所在的嵌套层数。*/
function test() {
    let table1 = Documents.Item(1).Tables.Item(1)
    table1.Range.Cells.Item(1).Range.Text = table1.NestingLevel

    let table2 = table1.Range.Cells.Item(5).Tables.Item(1)
    table2.Range.Cells.Item(1).Range.Text = table2.NestingLevel

    let table3 = table2.Range.Cells.Item(4).Tables.Item(1)
    table3.Range.Cells.Item(1).Range.Text = table3.NestingLevel
}
```
