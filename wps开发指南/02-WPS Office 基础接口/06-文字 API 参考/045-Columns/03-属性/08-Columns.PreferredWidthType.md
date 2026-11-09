# Columns.PreferredWidthType

返回或设置用于指定单元格、列或表格的首选度量单位。可读/写 **WdPreferredWidthType** 类型。



## 语法

express.**PreferredWidthType**

express   一个代表 **Columns** 对象的变量。

## 类型

WdPreferredWidthType

## 示例


```JavaScript
/*本示例设置 WPS 以窗口宽度的百分比来接受宽度，然后将活动文档的第一个表格的所有列宽设置为窗口宽度的 50%。*/
function test() {
    let columns = ActiveDocument.Tables.Item(1).Columns
    columns.PreferredWidthType = wdPreferredWidthPercent
    columns.PreferredWidth = 50
}
```


```JavaScript
/*本示例将第一个窗口上所选内容中表格的所有列的宽度设置为 40 磅。*/
function test() {
    let columns = Windows.Item(1).Selection.Columns
    columns.PreferredWidthType = wdPreferredWidthPoints
    columns.PreferredWidth = 40
}
```
