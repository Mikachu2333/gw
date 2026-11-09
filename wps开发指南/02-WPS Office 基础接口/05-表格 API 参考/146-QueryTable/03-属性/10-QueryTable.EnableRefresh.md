# QueryTable.EnableRefresh

如果用户可刷新数据透视表高速缓存或查询表，则为 **True** 。默认值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**EnableRefresh**

express   一个代表 **QueryTable** 对象的变量。

## 类型

boolean

## 说明


如果 **EnableRefresh** 属性设置为 **False** ，则忽略 **RefreshOnFileOpen** 属性。

对于 OLAP（OLAP：为查询和报表（而不是处理事务）而进行了优化的数据库技术。OLAP 数据是按分级结构组织的，它存储在多维数据集而不是表中。） 数据源，将此属性设置为 **False** 会禁用更新。

如果使用用户界面导入数据，来自 Web 查询或文本查询的数据将作为 **QueryTable** 对象导入，而所有其他外部数据将作为 **ListObject** 对象导入。

如果使用对象模型导入数据，来自 Web 查询或文本查询的数据必须作为 **QueryTable** 导入，而所有其他外部数据既可作为 **ListObject** 导入，也可作为 **QueryTable** 导入。

可以使用 **ListObject** 的 **QueryTable** 属性访问 **EnableRefresh** 属性。



## 示例


```JavaScript
/*本示例将第一张工作表上第一张查询表设置为（用户）不可刷新。*/
function test() {
    Application.Worksheets.Item(1).QueryTables.Item(1).EnableRefresh = false
}
```


```JavaScript
/*本示例显示活动工作表上包含 B1 单元格的查询表（用户）是否可以刷新。*/
function test() {
    alert(ActiveSheet.Range("B1").QueryTable.EnableRefresh)
}
```
