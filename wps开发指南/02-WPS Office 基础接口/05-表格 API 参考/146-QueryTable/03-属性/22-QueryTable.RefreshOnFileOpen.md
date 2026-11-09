# QueryTable.RefreshOnFileOpen

如果每次打开工作簿时，数据透视表高速缓存或查询表自动更新，则为 **True** 。默认值为 **False** 。 **Boolean** 类型，可读写。



## 语法

express.**RefreshOnFileOpen**

express   一个代表 **QueryTable** 对象的变量。

## 类型

boolean

## 说明


在 JavaScript 中使用 **Open** 方法打开工作簿时，不会自动刷新查询表和数据透视表。请在打开工作簿后，使用 **Refresh** 方法刷新数据。

如果使用用户界面导入数据，来自 Web 查询或文本查询的数据将作为 **QueryTable** 对象导入，而所有其他外部数据将作为 **ListObject** 对象导入。

如果使用对象模型导入数据，来自 Web 查询或文本查询的数据必须作为 **QueryTable** 导入，而所有其他外部数据既可作为 **ListObject** 导入，也可作为 **QueryTable** 导入。

可以使用 **ListObject** 的 **QueryTable** 属性访问 **RefreshOnFileOpen** 属性。



## 示例


```JavaScript
/*本示例显示第一张工作表上包含单元格 B1 的查询表是否自动更新。*/
function test() {
    let qyTable = Application.Worksheets.Item(1).Range("B1").QueryTable
    alert(qyTable.RefreshOnFileOpen)
}
```


```JavaScript
/*本示例将第一张工作表上第一张查询表设置为自动更新，并刷新该查询表。*/
function test() {
    let qyTable = Application.Worksheets.Item(1).QueryTables.Item(1)
    qyTable.RefreshOnFileOpen = true
    qyTable.Refresh()
}
```
