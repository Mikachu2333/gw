# Row.Index

返回 **Long** 值，该值表示项目在集合中的位置。只读。



## 语法

express.**Index**

express   一个代表 **Row** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动文档的第一个表格的第二行的索引号。*/
function test() {
    alert(ActiveDocument.Tables.Item(1).Rows.Item(2).Index)
}
```


```JavaScript
/*本示例显示所选表格内容的第二行所在的索引号。*/
function test() {
    alert(Selection.Rows.Item(2).Index)
}
```
