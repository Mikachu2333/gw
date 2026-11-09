# QueryTable.FieldNames

如果数据源的字段名称作为返回数据的列标题显示，则该值为 **True** 。默认值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**FieldNames**

express   一个代表 **QueryTable** 对象的变量。

## 类型

boolean

## 说明


如果使用用户界面导入数据，来自 Web 查询或文本查询的数据将作为 **QueryTable** 对象导入，而所有其他外部数据将作为 **ListObject** 对象导入。

如果使用对象模型导入数据，来自 Web 查询或文本查询的数据必须作为 **QueryTable** 导入，而所有其他外部数据既可作为 **ListObject** 导入，也可作为 **QueryTable** 导入。

 **FieldNames** 属性仅适用于 **QueryTable** 对象。



## 示例


```JavaScript
/*本示例对第一张工作表上第一张查询表进行设置，使表中不显示字段名称。*/
function test() {
    let qytable = Application.Worksheets.Item(1).QueryTables.Item(1)
    qytable.FieldNames = false
    qytable.Refresh()
}
```


```JavaScript
/*本示例显示活动工作表上包含 B1 单元格的查询表是否展示字段名称。*/
function test() {
    alert(Application.ActiveSheet.Range("B1").QueryTable.FieldNames)
}
```
