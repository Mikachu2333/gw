# PivotItem.Value

返回或设置一个 **String** 值，它代表数据透视表中指定的数据项的名称。



## 语法

express.**Value**

express   一个代表 **PivotItem** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示活动工作表中数据透视表的字段“name”的第二个数据项的名称。*/
function test() {
    let pvtItem = ActiveSheet.Range("I1").PivotTable.PivotFields("name").PivotItems(2)
    alert(pvtItem.Value)
}
```


```JavaScript
/*本示例将工作表 Sheet1 中第一张数据透视表的字段“name”中数据项“张三”的名称设置为“张三三”。*/
function test() {
    let pvtItem = Worksheets.Item("Sheet1").PivotTables(1).PivotFields("name").PivotItems("张三")
    pvtItem.Value = "张三三"
}
```
