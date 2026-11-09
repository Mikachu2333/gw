# FormatConditions.Count

返回一个 **Long** 值，它代表集合中对象的数量。



## 语法

express.**Count**

express   一个代表 **FormatConditions** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动工作表上单元格区域 A1:A10 条件格式的数量。*/
function test() {
    alert(ActiveSheet.Range("A1:A10").FormatConditions.Count)
}
```
