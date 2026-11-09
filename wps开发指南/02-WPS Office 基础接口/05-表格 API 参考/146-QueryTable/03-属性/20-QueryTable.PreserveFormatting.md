# QueryTable.PreserveFormatting

如果将数据前五行的任何常用格式设置应用到查询表的新数据行，则为 **True** 。对未使用的单元格不进行格式设置。如果将应用到查询表的最新一次自动套用格式应用于新数据行，则属性为 **False** 。默认值是 **True** 。



## 语法

express.**PreserveFormatting**

express   一个代表 **QueryTable** 对象的变量。

## 类型

boolean

## 说明


对于数据库查询表，默认的格式设置为 **xlSimple** 。

刷新查询表时，将对查询表应用新的自动套用格式样式。只要 **PreserveFormatting** 的值为 **False** ，则 AutoFormat（自动套用格式）就会被设置为 **None** 。这样，任何在 **PreserveFormatting** 被设置为 **False** 或在查询表刷新之前设置的自动套用格式都不会起作用，且相应产生的查询表也不会被应用任何格式。

如果使用用户界面导入数据，来自 Web 查询或文本查询的数据将作为 **QueryTable** 对象导入，而所有其他外部数据将作为 **ListObject** 对象导入。

如果使用对象模型导入数据，来自 Web 查询或文本查询的数据必须作为 **QueryTable** 导入，而所有其他外部数据既可作为 **ListObject** 导入，也可作为 **QueryTable** 导入。

可以使用 **ListObject** 的 **QueryTable** 属性访问 **PreserveFormatting** 属性。



## 示例


```JavaScript
/*此示例将第一张工作表上的第一张查询表的PreserveFormatting属性设置为true。*/
function test() {
    Application.Worksheets.Item(1).QueryTables.Item(1).PreserveFormatting = true
}
```


```JavaScript
/*此示例将第一张工作簿上第一张工作表中第一张查询表的 PreserveFormatting 属性设置为 false 。*/
function test() {
    let qyTable = Application.Workbooks.Item(1).Worksheets.Item(1).QueryTables.Item(1)
    qyTable.PreserveFormatting = false
    qyTable.Refresh()
}
```
