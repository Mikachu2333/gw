# QueryTable.WebDisableDateRecognition

向查询表中导入网页时，如果将类似日期的数据当作文本进行处理，则该值为 **True** 。如果使用了日期识别，则该值为 **False** 。默认值为 **False** 。 **Boolean** 类型，可读写。



## 语法

express.**WebDisableDateRecognition**

express   一个代表 **QueryTable** 对象的变量。

## 类型

boolean

## 说明


仅当查询表的 **QueryType** 属性设置为 **xlWebQuery** 并且查询返回 HTML 文档时，才使用此属性。

如果使用用户界面导入数据，来自 Web 查询或文本查询的数据将作为 **QueryTable** 对象导入，而所有其他外部数据将作为 **ListObject** 对象导入。

如果使用对象模型导入数据，来自 Web 查询或文本查询的数据必须作为 **QueryTable** 导入，而所有其他外部数据既可作为 **ListObject** 导入，也可作为 **QueryTable** 导入。

 **WebDisableDateRecognition** 属性仅适用于 **QueryTable** 对象。



## 示例


```JavaScript
/*本示例关闭对第一张工作簿上第一张工作表中新增查询表的日期识别，以便类似于日期的网页数据将作为文本导入。然后刷新该查询表。*/
function test() {
    let sheet = Application.Workbooks.Item(1).Worksheets.Item(1)
    let connection = "URL;https://bbs.wps.cn"
    let qyTable = sheet.QueryTables.Add(connection, sheet.Cells.Item(1, 3))
    qyTable.WebDisableDateRecognition = true
    qyTable.Refresh()
}
```


```JavaScript
/*本示例显示第一张工作表上第一张查询表是否将类似日期的数据当作文本进行处理。*/
function test() {
    let qyTable = Application.Worksheets.Item(1).QueryTables.Item(1)
    alert(qyTable.WebDisableDateRecognition)
}
```
