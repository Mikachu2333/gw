# PivotItem.Visible

返回或设置一个 **Boolean** 值，它确定对象是否可见。可读写。



## 语法

express.**Visible**

express   一个代表 **PivotItem** 对象的变量。

## 类型

boolean

## 说明


如果数据透视表中的某一项在当前是可见的，则该项的 **Visible** 属性为 **True** 。



## 示例


```JavaScript
/*本示例显示活动工作表中数据透视表的字段“id”的第二个数据项是否可见。*/
function test() {
    let pvtItem = ActiveSheet.Range("I1").PivotTable.PivotFields("id").PivotItems(2)
    alert(pvtItem.Visible)
}
```


```JavaScript
/*本示例将工作表 Sheet1 中第一张数据透视表的字段“name”中数据项“张三”设置为不可见。*/
function test() {
    let pvtItem = Worksheets.Item("Sheet1").PivotTables(1).PivotFields("name").PivotItems("张三")
    pvtItem.Visible = false
}
```
