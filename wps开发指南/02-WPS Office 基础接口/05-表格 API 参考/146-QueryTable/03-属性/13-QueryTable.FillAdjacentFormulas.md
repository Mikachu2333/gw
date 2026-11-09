# QueryTable.FillAdjacentFormulas

如果每当查询表刷新时，指定查询表右侧的公式就自动更新，则该属性值为 **True** 。默认值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**FillAdjacentFormulas**

express   一个代表 **QueryTable** 对象的变量。

## 类型

boolean

## 说明


如果使用用户界面导入数据，来自 Web 查询或文本查询的数据将作为 **QueryTable** 对象导入，而所有其他外部数据将作为 **ListObject** 对象导入。

如果使用对象模型导入数据，来自 Web 查询或文本查询的数据必须作为 **QueryTable** 导入，而所有其他外部数据既可作为 **ListObject** 导入，也可作为 **QueryTable** 导入。

 **FillAdjacentFormulas** 属性仅适用于 **QueryTable** 对象。



## 示例


```JavaScript
/*本示例对工作表 Sheet1 上第一张查询表进行设置，每当查询表刷新时就自动更新右侧的公式。*/
function test() {
    Application.Sheets.Item("sheet1").QueryTables.Item(1).FillAdjacentFormulas = true
}
```


```JavaScript
/*本示例显示活动工作表上包含 B1 单元格的查询表刷新时，该查询表右侧的公式是否自动更新。*/
function test() {
    alert(Application.ActiveSheet.Range("B1").QueryTable.FillAdjacentFormulas)
}
```
