# PivotTable.Value

返回或设置一个 **String** 值，它代表数据透视表的名称。



## 语法

express.**Value**

express   一个代表 **PivotTable** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示第一张数据表的名称*/
function test() {
    alert(Worksheets.Item(1).PivotTables(1).Value)
}
```


```JavaScript
/*本示例将活动工作表中第一张数据透视表的名称设置为“总结”，并弹窗显示名称*/
function test() {
    ActiveSheet.PivotTables(1).Value = "总结"
    alert(ActiveSheet.PivotTables(1).Value)
}
```
