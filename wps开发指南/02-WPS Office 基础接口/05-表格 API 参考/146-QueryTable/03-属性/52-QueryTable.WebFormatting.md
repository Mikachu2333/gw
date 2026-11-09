# QueryTable.WebFormatting

返回或设置一个值，该值确定向查询表中导入网页时网页中应用了多少格式设置（如果有）。 **XlWebFormatting** 类型，可读写。



## 语法

express.**WebFormatting**

express   一个代表 **QueryTable** 对象的变量。

## 类型

XlWebFormatting

## 说明


仅当查询表的 **QueryType** 属性设置为 **xlWebQuery** 并且查询返回 HTML 文档时，才使用此属性。

| XlWebFormatting 可为以下 XlWebFormatting 常量之一。 |
| ------------------------------------------ |
| **xlWebFormattingAll**                     |
| **xlWebFormattingRTF**                     |
| **xlWebFormattingNone** 默认值                 |

如果使用用户界面导入数据，来自 Web 查询或文本查询的数据将作为 **QueryTable** 对象导入，而所有其他外部数据将作为 **ListObject** 对象导入。

如果使用对象模型导入数据，来自 Web 查询或文本查询的数据必须作为 **QueryTable** 导入，而所有其他外部数据既可作为 **ListObject** 导入，也可作为 **QueryTable** 导入。

 **WebFormatting** 属性仅适用于 **QueryTable** 对象。



## 示例


```JavaScript
/*本示例在第一个工作簿中第一张工作表上添加一个新的 Web 查询表，并导入应用于数据的所有网页格式，然后刷新该查询表。*/
function test() {
    let sheet = Application.Workbooks.Item(1).Worksheets.Item(1)
    let connection = "URL;https://bbs.wps.cn"
    let qyTable = sheet.QueryTables.Add(connection, sheet.Cells.Item(1, 5))
    qyTable.WebFormatting = xlWebFormattingAll
    qyTable.Refresh()
}
```


```JavaScript
/*本示例显示第一张工作表上第一张查询表从网页应用的格式设置是否为xlWebFormattingNone。*/
function test() {
    let qyTable = Application.Worksheets.Item(1).QueryTables.Item(1)
    alert(qyTable.WebFormatting == xlWebFormattingNone)
}
```
