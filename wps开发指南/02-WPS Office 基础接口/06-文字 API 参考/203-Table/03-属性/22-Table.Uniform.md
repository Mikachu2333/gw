# Table.Uniform

如果表格中所有的行具有相同的列数，则该属性值为 **True** 。 **Boolean** 类型，只读。



## 语法

express.**Uniform**

express   一个代表 **Table** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例创建一个包含拆分单元格的表格，然后显示一个消息框，确认并非表格中的每一行都具有相同的列数。*/
function test() {
    let newDocument = Documents.Add()
    let newTable = newDoc.Tables.Add(Selection.Range, 5, 5)
    newTable.Cell(3, 3).Split(1, 2)
    if (!newTable.Uniform) {
        MsgBox("Table is not uniform")
    }
}
```


```JavaScript
/*本示例显示选定内容的表格中的各行是否具有相同的列数。*/
function test() {
    if (Selection.Information(wdWithInTable)) {
        alert(Selection.Tables.Item(1).Uniform)
    }
}
```
