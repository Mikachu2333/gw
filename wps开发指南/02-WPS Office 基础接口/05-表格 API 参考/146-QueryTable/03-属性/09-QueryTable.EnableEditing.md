# QueryTable.EnableEditing

如果允许用户对指定查询表进行编辑，则该值为 **True** ；如果用户只能刷新查询表，则该值为 **False** 。 **Boolean** 类型，可读写。



## 语法

express.**EnableEditing**

express   一个代表 **QueryTable** 对象的变量。

## 类型

boolean

## 说明


如果使用用户界面导入数据，来自 Web 查询或文本查询的数据将作为 **QueryTable** 对象导入，而所有其他外部数据将作为 **ListObject** 对象导入。

如果使用对象模型导入数据，来自 Web 查询或文本查询的数据必须作为 **QueryTable** 导入，而所有其他外部数据既可作为 **ListObject** 导入，也可作为 **QueryTable** 导入。

可以使用 **ListObject** 的 **QueryTable** 属性访问 **EnableEditing** 属性。



## 示例


```JavaScript
/*本示例对第一张工作表上第一张查询表进行设置，使用户不能对其进行编辑。*/
function test() {
    Application.Worksheets.Item(1).QueryTables.Item(1).EnableEditing = false
}
```


```JavaScript
/*本示例显示活动工作表上包含 B1 单元格的查询表是否允许用户对该查询表进行编辑。*/
function test() {
    alert(ActiveSheet.Range("B1").QueryTable.EnableEditing)
}
```
