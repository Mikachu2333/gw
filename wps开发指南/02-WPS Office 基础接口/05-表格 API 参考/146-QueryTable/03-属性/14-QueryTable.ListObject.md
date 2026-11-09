# QueryTable.ListObject

为 **QueryTable** 对象返回一个 **ListObject** 对象。 **ListObject** 对象类型，只读。



## 语法

express.**ListObject**

express   一个代表 **QueryTable** 对象的变量。

## 类型

ListObject

## 说明


如果使用用户界面导入数据，来自 Web 查询或文本查询的数据将作为 **QueryTable** 对象导入，而所有其他外部数据将作为 **ListObject** 对象导入。  

如果使用对象模型导入数据，来自 Web 查询或文本查询的数据必须作为 **QueryTable** 导入，而所有其他外部数据既可作为 **ListObject** 导入，也可作为 **QueryTable** 导入。

 **ListObject** 属性仅适用于 **ListObject** 对象。



## 示例


```JavaScript
/*本示例显示活动工作表上包含 A1 单元格的表格上查询表的ListObject的地址。*/
function test() {
    let qyTable = Application.ActiveSheet.Range("A1").ListObject.QueryTable
    alert(qyTable.ListObject.Range.Address())
}
```


```JavaScript
/*本示例显示活动工作表上第一张表格上查询表的ListObject当前源是否为xlSrcQuery。*/
function test() {
    alert(ActiveSheet.ListObjects.Item(1).QueryTable.ListObject.SourceType == xlSrcQuery)
}
```
