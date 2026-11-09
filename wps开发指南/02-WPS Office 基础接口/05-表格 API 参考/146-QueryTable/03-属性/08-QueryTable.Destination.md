# QueryTable.Destination

返回查询表目标区域（查询结果表放置的区域）的左上角单元格。目标区域必须位于包含 **QueryTable** 对象的工作表中。 **Range** 类型，只读。



## 语法

express.**Destination**

express   一个代表 **QueryTable** 对象的变量。

## 类型

Range

## 说明


如果使用用户界面导入数据，来自 Web 查询或文本查询的数据将作为 **QueryTable** 对象导入，而所有其他外部数据将作为 **ListObject** 对象导入。

如果使用对象模型导入数据，来自 Web 查询或文本查询的数据必须作为 **QueryTable** 导入，而所有其他外部数据既可作为 **ListObject** 导入，也可作为 **QueryTable** 导入。

可以使用 **ListObject** 的 **QueryTable** 属性访问 **Destination** 属性。



## 示例


```JavaScript
/*本示例滚动活动窗口，将第一张工作表上第一张查询表的左上角单元格滚动至窗口的左上角。*/
function test() {
    let destion = Application.Worksheets.Item(1).QueryTables.Item(1).Destination
    Application.ActiveWindow.ScrollColumn = destion.Column
    Application.ActiveWindow.ScrollRow = destion.Row
}
```


```JavaScript
/*本示例显示活动工作表上第一张查询表左上角单元格的地址。*/
function test() {
    alert(ActiveSheet.QueryTables.Item(1).Destination.Address())
}
```
