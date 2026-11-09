# QueryTable.WebTables

向查询表中导入网页时，返回或设置由逗号分隔的表格名称或表格索引号的列表。 **String** 类型，可读写。



## 语法

express.**WebTables**

express   一个代表 **QueryTable** 对象的变量。

## 类型

string

## 说明


仅当查询表的 **QueryType** 属性设置为 **xlWebQuery** ，查询返回 HTML 文档，并且 **WebSelectionType** 属性的值为 **xlSpecifiedTables** 时，才使用此属性。

如果使用用户界面导入数据，来自 Web 查询或文本查询的数据将作为 **QueryTable** 对象导入，而所有其他外部数据将作为 **ListObject** 对象导入。

如果使用对象模型导入数据，来自 Web 查询或文本查询的数据必须作为 **QueryTable** 导入，而所有其他外部数据既可作为 **ListObject** 导入，也可作为 **QueryTable** 导入。

 **WebTables** 属性仅适用于 **QueryTable** 对象。



## 示例


```JavaScript
/*本示例在第一个工作簿中第一张工作表上添加一个新的 Web 查询表，然后导入网页中第一个和第二个表格中的数据。*/
function test() {
    let sheet = Application.Workbooks.Item(1).Worksheets.Item(1)
    let connection = "URL;https://bbs.wps.cn"
    let qyTable = sheet.QueryTables.Add(connection, sheet.Cells.Item(1, 1))
    qyTable.WebFormatting = xlWebFormattingNone
    qyTable.WebSelectionType = xlSpecifiedTables
    qyTable.WebTables = "1,2"
    qyTable.Refresh()
}
```


```JavaScript
/*本示例显示活动工作表上第一个查询表由逗号分隔的表格索引号的列表。*/
function test() {
    let qyTable = Application.ActiveSheet.QueryTables.Item(1)
    alert(qyTable.WebTables)
}
```
