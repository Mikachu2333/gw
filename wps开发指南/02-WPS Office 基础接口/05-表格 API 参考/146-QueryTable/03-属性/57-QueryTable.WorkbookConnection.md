# QueryTable.WorkbookConnection

返回查询表所使用的 **WorkbookConnection** 对象。只读。



## 语法

express.**WorkbookConnection**

express   一个代表 **QueryTable** 对象的变量。

## 类型

WorkbookConnection

## 说明


如果使用用户界面导入数据，来自 Web 查询或文本查询的数据将作为 **QueryTable** 对象导入，而所有其他外部数据将作为 **ListObject** 对象导入。  

如果使用对象模型导入数据，来自 Web 查询或文本查询的数据必须作为 **QueryTable** 导入，而所有其他外部数据既可作为 **ListObject** 导入，也可作为 **QueryTable** 导入。

 **WorkbookConnection** 属性仅适用于 **QueryTable** 对象。



## 示例


```JavaScript
/*本示例显示活动工作表上第一个查询表连接到文本数据源的文本文件的名称。*/
function test() {
    let qyTable = Application.ActiveSheet.QueryTables.Item(1)
    alert(qyTable.WorkbookConnection.TextConnection.Connection)
}
```


```JavaScript
/*本示例删除包含工作表 Sheet1 上第一个查询表的工作簿的外部数据连接。*/
function test() {
    let qyTable = Application.Worksheets.Item("Sheet1").QueryTables.Item(1)
    qyTable.WorkbookConnection.Delete()
}
```
