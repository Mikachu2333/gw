# PivotTable.Name

返回或设置一个 **String** 值，它代表对象的名称。



## 语法

express.**Name**

express   一个代表 **PivotTable** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示活动工作表中第一张数据透视表的名称*/
function test() {
    alert(ActiveSheet.PivotTables(1).Name)
}
```


```JavaScript
/*本示例将工作表 Sheet1 中第一张数据透视表的名称设置为数据透视表1，并弹窗显示此属性*/
function test() {
    Worksheets.Item("Sheet1").PivotTables(1).Name = "数据透视表1"
    alert(Worksheets.Item("Sheet1").PivotTables(1).Name)
}
```
