# QueryTable.WebSingleBlockTextImport

向查询表中导入网页时，如果位于指定网页的 HTML \<PRE\> 标记中的数据是同时进行处理的，则该值为 **True** 。如果数据是以连续行的数据块方式导入的，以便能识别标题行，则该值为 **False** 。默认值为 **False** 。 **Boolean** 类型，可读写。



## 语法

express.**WebSingleBlockTextImport**

express   一个代表 **QueryTable** 对象的变量。

## 类型

boolean

## 说明


仅当查询表的 **QueryType** 属性设置为 **xlWebQuery** 并且查询返回 HTML 文档时，才使用此属性。

如果使用用户界面导入数据，来自 Web 查询或文本查询的数据将作为 **QueryTable** 对象导入，而所有其他外部数据将作为 **ListObject** 对象导入。

如果使用对象模型导入数据，来自 Web 查询或文本查询的数据必须作为 **QueryTable** 导入，而所有其他外部数据既可作为 **ListObject** 导入，也可作为 **QueryTable** 导入。

 **WebSingleBlockTextImport** 属性仅适用于 **QueryTable** 对象。



## 示例


```JavaScript
/*本示例在第一个工作簿中第一张工作表上添加一个新的 Web 查询表，然后同时导入 HTML <PRE> 标记中的所有数据。*/
function test() {
    let sheet = Application.Workbooks.Item(1).Worksheets.Item(1)
    let connection = "URL;https://bbs.wps.cn"
    let qyTable = sheet.QueryTables.Add(connection, sheet.Cells.Item(1, 5))
    qyTable.WebSingleBlockTextImport = true
    qyTable.Refresh()
}
```


```JavaScript
/*本示例显示活动工作表上第一个查询表是否同时进行处理网页上 HTML <PRE> 标记中的数据。*/
function test() {
    let qyTable = Application.ActiveSheet.QueryTables.Item(1)
    alert(qyTable.WebSingleBlockTextImport)
}
```
