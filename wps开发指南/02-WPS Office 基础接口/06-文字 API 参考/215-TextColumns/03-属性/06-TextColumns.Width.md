# TextColumns.Width

返回或设置文本栏的宽度（以磅为单位）。 **Long** 类型，可读写。



## 语法

express.**Width**

express   一个代表 **TextColumns** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例设置活动文档的第一节的文本栏的宽度。*/
function test() {
    ActiveDocument.Sections.Item(1).PageSetup.TextColumns.Width = 80
}
```


```JavaScript
/*本示例显示活动文档的文本栏的宽度。*/
function test() {
    alert(ActiveDocument.PageSetup.TextColumns.Width + " 磅")
}
```
