# QueryTable.Refreshing

如果指定的查询表正在进行后台查询，则为 **True** 。 **Boolean** 类型，只读。



## 语法

express.**Refreshing**

express   一个代表 **QueryTable** 对象的变量。

## 类型

boolean

## 说明


使用 **CancelRefresh** 方法可以取消后台查询。

如果使用用户界面导入数据，来自 Web 查询或文本查询的数据将作为 **QueryTable** 对象导入，而所有其他外部数据将作为 **ListObject** 对象导入。

如果使用对象模型导入数据，来自 Web 查询或文本查询的数据必须作为 **QueryTable** 导入，而所有其他外部数据既可作为 **ListObject** 导入，也可作为 **QueryTable** 导入。

可以使用 **ListObject** 的 **QueryTable** 属性访问 **Refreshing** 属性。



## 示例


```JavaScript
/*本示例在第一张工作表上查询表一正在进行后台查询的情况下显示了一条信息。*/
function test() {
    let qyTable = Application.Worksheets.Item(1).QueryTables.Item(1)
    if (qyTable.Refreshing) {
        alert("Query is currently refreshing: please wait")
    } else {
        qyTable.Refresh(false)
        qyTable.ResultRange.Select()
    }
}
```


```JavaScript
/*本示例显示第一张工作表上包含 B1 单元格的查询表是否正在进行后台查询。*/
function test() {
    let qyTable = Application.Worksheets.Item(1).Range("B1").QueryTable
    alert(qyTable.Refreshing)
}
```
