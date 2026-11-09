# QueryTable.RefreshPeriod

返回或设置两次刷新之间的时间间隔。 **Long** 型，可读写。



## 语法

express.**RefreshPeriod**

express   一个代表 **QueryTable** 对象的变量。

## 类型

number（int4 精度）

## 说明


将周期设置为 0（零），则会禁用自动定时刷新，并且等同于将该属性设置为 **Null** 。  

 **RefreshPeriod** 属性的值可以是一个 0 到 32767 之间的整数。

如果使用用户界面导入数据，来自 Web 查询或文本查询的数据将作为 **QueryTable** 对象导入，而所有其他外部数据将作为 **ListObject** 对象导入。

如果使用对象模型导入数据，来自 Web 查询或文本查询的数据必须作为 **QueryTable** 导入，而所有其他外部数据既可作为 **ListObject** 导入，也可作为 **QueryTable** 导入。

可以使用 **ListObject** 的 **QueryTable** 属性访问 **RefreshPeriod** 属性。



## 示例


```JavaScript
/*本示例将第一张工作表上第一张查询表两次刷新之间的时间间隔设置为 10 分钟，并刷新该查询表。*/
function test() {
    let qyTable = Application.Worksheets.Item(1).QueryTables.Item(1)
    qyTable.RefreshPeriod = 10
    qyTable.Refresh()
}
```


```JavaScript
/*本示例显示第一张工作表上包含单元格 B1 的查询表两次刷新之间的时间间隔。*/
function test() {
    let qyTable = Application.Worksheets.Item(1).Range("B1").QueryTable
    alert(qyTable.RefreshPeriod)
}
```
