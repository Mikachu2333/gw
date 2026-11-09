# QueryTable.WebSelectionType

返回或设置一个值，该值决定是向查询表中导入整个网页、网页上的所有表格还是仅网页上的特定表格。 **XlWebSelectionType** 类型，可读写。



## 语法

express.**WebSelectionType**

express   一个代表 **QueryTable** 对象的变量。

## 类型

XlWebSelectionType

## 说明


仅当查询表的 **QueryType** 属性设置为 **xlWebQuery** 并且查询返回 HTML 文档时，才使用此属性。

如果此属性的值为 **xlSpecifiedTables** ，则可以使用 **WebTables** 属性指定要导入的表格。

| XlWebSelectionType 可为以下 XlWebSelectionType 常量之一。 |
| ------------------------------------------------ |
| **xlEntirePage**                                 |
| **xlAllTables** 默认值                              |
| **xlSpecifiedTables**                            |

如果使用用户界面导入数据，来自 Web 查询或文本查询的数据将作为 **QueryTable** 对象导入，而所有其他外部数据将作为 **ListObject** 对象导入。

如果使用对象模型导入数据，来自 Web 查询或文本查询的数据必须作为 **QueryTable** 导入，而所有其他外部数据既可作为 **ListObject** 导入，也可作为 **QueryTable** 导入。

 **WebSelectionType** 属性仅适用于 **QueryTable** 对象。



## 示例


```JavaScript
/*本示例在第一个工作簿中第一张工作表上添加一个新的 Web 查询表，然后导入网页中第一个和第二个表格中的数据。*/
function test() {
    let sheet = Application.Workbooks.Item(1).Worksheets.Item(1)
    let connection = "URL;https://bbs.wps.cn"
    let qyTable = sheet.QueryTables.Add(connection, sheet.Cells.Item(1, 6))
    qyTable.WebFormatting = xlWebFormattingNone
    qyTable.WebSelectionType = xlSpecifiedTables
    qyTable.WebTables = "1,2"
    qyTable.Refresh()
}
```


```JavaScript
/*本示例显示活动工作表上包含 A4 单元格的查询表的 WebSelectionType 属性是否为 xlEntirePage。*/
function test() {
    let qyTable = Application.ActiveSheet.Range("A4").QueryTable
    alert(qyTable.WebSelectionType == xlEntirePage)
}
```
