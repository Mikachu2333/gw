# Table.PreferredWidth

返回或设置指定表格的指定宽度（以磅为单位或以窗口宽度的百分比表示）。可读写 **Single** 类型。



## 语法

express.**PreferredWidth**

express   一个代表 **Table** 对象的变量。

## 类型

number（float 精度）

## 说明


如果 **PreferredWidthType** 属性设置为 **wdPreferredWidthPoints** ，则 **PreferredWidth** 属性返回或设置宽度（以磅为单位）。如果 **PreferredWidthType** 属性设置为 **wdPreferredWidthPercent** ，则 **PreferredWidth** 属性返回或设置宽度（以窗口宽度的百分比表示）。



## 示例


```JavaScript
/*本示例将活动文档上第一个表格设置为以窗口宽度的百分比来表示指定宽度，然后将该表格的宽度设置为窗口宽度的 50%。*/
function test() {
    let table = ActiveDocument.Tables.Item(1)
    table.PreferredWidthType = wdPreferredWidthPercent
    table.PreferredWidth = 50
}
```


```JavaScript
/*本示例将选中的第一个表格设置为以磅为单位来表示指定宽度，然后显示该表格的宽度*/
function test() {
    let table = Selection.Tables.Item(1)
    table.PreferredWidthType = wdPreferredWidthPoints
    alert(table.PreferredWidth + "磅")
}
```
