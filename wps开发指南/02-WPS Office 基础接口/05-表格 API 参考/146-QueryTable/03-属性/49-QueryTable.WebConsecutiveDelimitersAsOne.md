# QueryTable.WebConsecutiveDelimitersAsOne

当从网页的 HTML \<PRE\> 标记中向查询表导入数据时，如果将连续多个分隔符看作单个分隔符，并且数据将被分列，则该值为 **True** 。如果将连续多个分隔符看作多个分隔符，则该值为 **False** 。默认值是 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**WebConsecutiveDelimitersAsOne**

express   一个代表 **QueryTable** 对象的变量。

## 类型

boolean

## 说明


仅当查询表的 **QueryType** 属性设置为 **xlWebQuery** ，查询返回 HTML 文档，并且 **WebPreFormattedTextToColumns** 属性设置为 **True** 时，才使用此属性。

如果使用用户界面导入数据，来自 Web 查询或文本查询的数据将作为 **QueryTable** 对象导入，而所有其他外部数据将作为 **ListObject** 对象导入。

如果使用对象模型导入数据，来自 Web 查询或文本查询的数据必须作为 **QueryTable** 导入，而所有其他外部数据既可作为 **ListObject** 导入，也可作为 **QueryTable** 导入。

 **WebConsecutiveDelimitersAsOne** 属性仅适用于 **QueryTable** 对象。



## 示例


```JavaScript
/*本示例将第一个工作簿中第一张工作表上新增的查询表的分隔符设置为空格字符，然后刷新该查询表。连续多个空格作为单个空格处理。*/
function test() {
    let sheet = Application.Workbooks.Item(1).Worksheets.Item(1)
    let connection = "URL;https://bbs.wps.cn"
    let qyTable = sheet.QueryTables.Add(connection, sheet.Cells.Item(1, 3))
    qyTable.WebConsecutiveDelimitersAsOne = true
    qyTable.Refresh()
}
```


```JavaScript
/*本示例显示第一张工作表上第一张查询表的连续分隔符是否被视为单个分隔符。*/
function test() {
    let qyTable = Worksheets.Item(1).QueryTables.Item(1)
    alert(qyTable.WebConsecutiveDelimitersAsOne)
}
```
