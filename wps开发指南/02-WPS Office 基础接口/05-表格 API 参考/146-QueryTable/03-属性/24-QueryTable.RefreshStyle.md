# QueryTable.RefreshStyle

返回或设置为了容纳查询返回的记录集中的行数而在指定工作表中插入或删除行时所使用的方式。 **XlCellInsertionMode** 类型。可读写。



## 语法

express.**RefreshStyle**

express   一个代表 **QueryTable** 对象的变量。

## 类型

XlCellInsertionMode

## 说明


| **XlCellInsertionMode** 可为以下 **XlCellInsertionMode** 常量之一。 |
| ---------------------------------------------------------- |
| **xlInsertDeleteCells** 插入或者删除部分行以适应新记录集所需要的实际行数。           |
| **xlOverwriteCells** 不向工作表添加新的单元格或行。如果溢出则覆盖周围单元格的数据。        |
| **xlInsertEntireRows** 必要时插入所有行以允许溢出。不从工作表删除单元格或行。          |

如果使用用户界面导入数据，来自 Web 查询或文本查询的数据将作为 **QueryTable** 对象导入，而所有其他外部数据将作为 **ListObject** 对象导入。

如果使用对象模型导入数据，来自 Web 查询或文本查询的数据必须作为 **QueryTable** 导入，而所有其他外部数据既可作为 **ListObject** 导入，也可作为 **QueryTable** 导入。

可以使用 **ListObject** 的 **QueryTable** 属性访问 **RefreshStyle** 属性。



## 示例


```JavaScript
/*本示例向 Sheet1 添加查询表，并对 RefreshStyle 属性进行设置，插入两个新行以放置查询结果数据。*/
function test() {
    let qyTable = Application.Sheets.Item("Sheet1").QueryTables.Add("Finder;D:\\示例\\test6.dqy", Range("Sheet1!A1"), "SELECT * FROM `student`")
    qyTable.RefreshStyle = xlInsertEntireRows
    qyTable.Refresh()
}
```


```JavaScript
/*本示例显示第二张工作表上包含单元格 B1 的查询表 RefreshStyle 属性是否为 xlInsertDeleteCells。*/
function test() {
    let qyTable = Application.Worksheets.Item(2).Range("B1").QueryTable
    alert(qyTable.RefreshStyle == xlInsertDeleteCells)
}
```
