# QueryTable.FetchedRowOverflow

如果上次使用 **Refresh** 方法返回的行数比工作表中可用行数大，则该值为 **True** 。 **Boolean** 类型，只读。



## 语法

express.**FetchedRowOverflow**

express   一个代表 **QueryTable** 对象的变量。

## 类型

boolean

## 说明


如果使用用户界面导入数据，来自 Web 查询或文本查询的数据将作为 **QueryTable** 对象导入，而所有其他外部数据将作为 **ListObject** 对象导入。

如果使用对象模型导入数据，来自 Web 查询或文本查询的数据必须作为 **QueryTable** 导入，而所有其他外部数据既可作为 **ListObject** 导入，也可作为 **QueryTable** 导入。

可以使用 **ListObject** 的 **QueryTable** 属性访问 **FetchedRowOverflow** 属性。



## 示例


```JavaScript
/*本示例对第一张工作表上第一张查询表进行刷新。如果由查询返回的行数超过工作表中的可用行数，则显示一条错误消息。*/
function test() {
    let Qtable = Application.Worksheets.Item(1).QueryTables.Item(1)
    Qtable.Refresh()
    if (Qtable.FetchedRowOverflow) {
        alert("Query too large: please redefine.")
    }
}
```


```JavaScript
/*本示例对活动工作表上包含 B2 单元格的查询表进行刷新。显示由查询返回的行数是否超过工作表中的可用行数。*/
function test() {
    let qytable = Application.ActiveSheet.Range("B2").QueryTable
    qytable.Refresh()
    alert(qytable.FetchedRowOverflow)
}
```
