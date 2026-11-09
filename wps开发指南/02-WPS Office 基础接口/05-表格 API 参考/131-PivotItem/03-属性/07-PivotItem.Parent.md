# PivotItem.Parent

返回指定对象的父对象。只读。



## 语法

express.**Parent**

express   一个代表 **PivotItem** 对象的变量。

## 类型

PivotField

## 示例


```JavaScript
/*本示例显示活动工作表中数据透视表的第一个字段的第一个数据项的父对象的名称。*/
function test() {
    let pvtItem = ActiveSheet.Range("I1").PivotTable.PivotFields(1).PivotItems(1)
    alert(pvtItem.Parent.Name)
}
```
