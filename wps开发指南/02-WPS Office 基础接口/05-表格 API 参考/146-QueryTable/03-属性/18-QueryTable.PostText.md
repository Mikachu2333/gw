# QueryTable.PostText

返回或设置用于 post 方法的字符串，post 方法用于向 Web 服务器输入数据以从 Web 查询中返回数据。 **String** 类型，可读写。



## 语法

express.**PostText**

express   一个代表 **QueryTable** 对象的变量。

## 类型

string

## 说明


如果使用用户界面导入数据，来自 Web 查询或文本查询的数据将作为 **QueryTable** 对象导入，而所有其他外部数据将作为 **ListObject** 对象导入。

如果使用对象模型导入数据，来自 Web 查询或文本查询的数据必须作为 **QueryTable** 导入，而所有其他外部数据既可作为 **ListObject** 导入，也可作为 **QueryTable** 导入。

 **PostText** 属性仅适用于 **QueryTable** 对象。



## 示例


```JavaScript
/*本示例显示活动工作表上包含 A1 单元格的查询表用于 post 方法的字符串*/
function test() {
    let qyTable = Application.ActiveSheet.Range("A1").QueryTable
    alert(qyTable.PostText)
}
```


```JavaScript
/*本示例设置第一张工作表上第一张查询表用于 post 方法的字符串*/
function test() {
    let qyTable = Application.Worksheets.Item(1).QueryTables.Item(1)
    qyTable.PostText = "example1=a&example2=b"
    qyTable.Refresh()
}
```
