# Borders.Count

返回 **Borders** 集合中的项目数。 **Long** 类型，只读。



## 语法

express.**Count**

express   一个代表 **Borders** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动文档的第一表格的边框数量*/
function test() {
    alert(ActiveDocument.Tables.Item(1).Borders.Count)
}
```
