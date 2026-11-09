# Rows.Count

返回一个 **Long** 类型的值，该值代表集合中的行数。只读。



## 语法

express.**Count**

express   一个代表 **Rows** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动文档第一张表格的行数。*/
function test() {
    alert(ActiveDocument.Tables.Item(1).Rows.Count)
}
```
