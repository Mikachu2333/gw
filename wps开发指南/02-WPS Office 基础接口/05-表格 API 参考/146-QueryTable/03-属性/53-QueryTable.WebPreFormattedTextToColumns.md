# QueryTable.WebPreFormattedTextToColumns

返回或设置向查询表中导入网页时，是否对网页 HTML \<PRE\> 标记内的数据进行分列。默认值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**WebPreFormattedTextToColumns**

express   一个代表 **QueryTable** 对象的变量。

## 类型

boolean

## 说明


仅当查询表的 **QueryType** 属性为 **xlWebQuery** 并且查询返回 HTML 文档时，才使用此属性。

如果使用用户界面导入数据，来自 Web 查询或文本查询的数据将作为 **QueryTable** 对象导入，而所有其他外部数据将作为 **ListObject** 对象导入。

如果使用对象模型导入数据，来自 Web 查询或文本查询的数据必须作为 **QueryTable** 导入，而所有其他外部数据既可作为 **ListObject** 导入，也可作为 **QueryTable** 导入。

 **WebPreFormattedTextToColumns** 属性仅适用于 **QueryTable** 对象。



## 示例


```JavaScript
/*本示例在第一个工作簿中第一张工作表上添加一个新的 Web 查询表。注意，本示例并未对 HTML <PRE> 标记之间的数据进行分列。*/
function test() {
    let sheet = Application.Workbooks.Item(1).Worksheets.Item(1)
    let connection = "URL;https://bbs.wps.cn"
    let qyTable = sheet.QueryTables.Add(connection, sheet.Cells.Item(1, 3))
    qyTable.WebFormatting = xlWebFormattingNone
    qyTable.WebPreFormattedTextToColumns = false
    qyTable.Refresh()
}
```


```JavaScript
/*本示例显示第一张工作表上包含 A1 单元格的查询表是否对网页 HTML <PRE> 标记内的数据进行分列。*/
function test() {
    let qyTable = Application.Worksheets.Item(1).Range("A1").QueryTable
    alert(qyTable.WebPreFormattedTextToColumns)
}
```
