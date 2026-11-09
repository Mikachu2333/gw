# QueryTable.RobustConnect

返回或设置数据透视表缓存与其数据源连接的方式。 **XlRobustConnect** 类型，可读写。



## 语法

express.**RobustConnect**

express   一个代表 **QueryTable** 对象的变量。

## 类型

XlRobustConnect

## 说明


| **XlRobustConnect** 可为以下这些 **XlRobustConnect** 常量之一。                                  |
| ------------------------------------------------------------------------------------- |
| **xlAlways** 。缓存始终使用外部源信息（由 **SourceConnectionFile** 或 **SourceDataFile** 属性定义）进行重新连接。 |
| **xlAsRequired** 。缓存通过 **Connection** 属性使用外部源信息进行重新连接。                                 |
| **xlNever** 。缓存从不使用源信息进行重新连接。                                                         |

如果使用用户界面导入数据，来自 Web 查询或文本查询的数据将作为 **QueryTable** 对象导入，而所有其他外部数据将作为 **ListObject** 对象导入。

如果使用对象模型导入数据，来自 Web 查询或文本查询的数据必须作为 **QueryTable** 导入，而所有其他外部数据既可作为 **ListObject** 导入，也可作为 **QueryTable** 导入。

可以使用 **ListObject** 的 **QueryTable** 属性访问 **RobustConnect** 属性。



## 示例


```JavaScript
/*本示例显示第一张工作表上包含单元格 B1 的查询表连接到数据源的方式是否为 xlAsRequired。*/
function test() {
    let qyTable = Application.Worksheets.Item(1).Range("B1").QueryTable
    alert(qyTable.RobustConnect == xlAsRequired)
}
```


```JavaScript
/*本示例设置第一张工作表上第一张查询表连接到数据源的方式，并刷新该查询表。*/
function test() {
    let qyTable = Application.Worksheets.Item(1).QueryTables.Item(1)
    qyTable.RobustConnect = xlAlways
    qyTable.Refresh()
}
```
