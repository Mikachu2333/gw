# PivotItems.Count

返回一个 **Long** 值，它代表集合中对象的数量。



## 语法

express.**Count**

express   一个代表 **PivotItems** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动工作表上第一张数据透视表的字段“name”的数据项数量。*/
function test() {
    alert(ActiveSheet.PivotTables(1).PivotFields("name").PivotItems().Count)
}
```
