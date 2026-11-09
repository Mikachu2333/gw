# QueryTable.WebDisableRedirections

如果对 **QueryTable** 对象禁用 Web 查询重定向，则该属性的值为 **True** 。默认值为 **False** 。 **Boolean** 类型，可读写。



## 语法

express.**WebDisableRedirections**

express   一个代表 **QueryTable** 对象的变量。

## 类型

boolean

## 说明


如果使用用户界面导入数据，来自 Web 查询或文本查询的数据将作为 **QueryTable** 对象导入，而所有其他外部数据将作为 **ListObject** 对象导入。

如果使用对象模型导入数据，来自 Web 查询或文本查询的数据必须作为 **QueryTable** 导入，而所有其他外部数据既可作为 **ListObject** 导入，也可作为 **QueryTable** 导入。

 **WebDisableRedirections** 属性仅适用于 **QueryTable** 对象。



## 示例


```JavaScript
/*本示例为 ET 确定工作簿中活动工作表的 Web 查询重定向的设置。本示例假定 QueryTable 对象位于活动工作表上，否则将出现运行错误。*/
function test() {
    alert(ActiveSheet.QueryTables.Item(1).WebDisableRedirections)
}
```


```JavaScript
/*本示例开启对第一张工作表上第一张查询表的 Web 查询重定向。*/
function test() {
    let qyTable = Application.Worksheets.Item(1).QueryTables.Item(1)
    qyTable.WebDisableRedirections = false
}
```
