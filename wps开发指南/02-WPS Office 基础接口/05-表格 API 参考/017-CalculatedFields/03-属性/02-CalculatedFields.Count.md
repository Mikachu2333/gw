# CalculatedFields.Count

返回一个 **Long** 值，它代表集合中对象的数量。



## 语法

express.**Count**

express   一个代表 **CalculatedFields** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*此示例显示活动工作表上的数据透视表计算字段的数量。*/
function test() {
    alert(ActiveSheet.Range("I1").PivotTable.CalculatedFields().Count)
}
```
