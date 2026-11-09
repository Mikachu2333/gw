# QueryTable.ResultRange

返回一个 **Range** 对象，该对象代表指定查询表所覆盖的工作表区域。只读。



## 语法

express.**ResultRange**

express   一个代表 **QueryTable** 对象的变量。

## 类型

Range

## 说明


该区域不包括字段名称行或行号列。

如果使用用户界面导入数据，来自 Web 查询或文本查询的数据将作为 **QueryTable** 对象导入，而所有其他外部数据将作为 **ListObject** 对象导入。

如果使用对象模型导入数据，来自 Web 查询或文本查询的数据必须作为 **QueryTable** 导入，而所有其他外部数据既可作为 **ListObject** 导入，也可作为 **QueryTable** 导入。

可以使用 **ListObject** 的 **QueryTable** 属性访问 **ResultRange** 属性。



## 示例


```JavaScript
/*本示例对工作表 Sheet1 上查询表一中的第一列数据进行汇总，并在数据区域下方显示第一列数据的总和。*/
function test() {
    let range = Application.Sheets.Item("sheet1").QueryTables.Item(1).ResultRange.Columns.Item(1)
    range.Name = "Column1"
    range.End(xlDown).Offset(2, 0).Formula = "=sum(Column1)"
}
```


```JavaScript
/*本示例选中第一张工作表上包含单元格 B1 的查询表的第二行。*/
function test() {
    let qyTable = Application.Worksheets.Item(1).Range("B1").QueryTable
    qyTable.ResultRange.Rows.Item(2).Select()
}
```
