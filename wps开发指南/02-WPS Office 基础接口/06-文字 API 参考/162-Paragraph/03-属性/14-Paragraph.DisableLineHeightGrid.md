# Paragraph.DisableLineHeightGrid

如果该属性的值为 **True** ，则当指定每页的行数时，WPS 会将指定段落中的字符与行网格对齐。如果只将某些指定段落的 **DisableLineHeightGrid** 属性设置为 **True** ，则返回 **wdUndefined** 。 **Long** 类型，可读写。



## 语法

express.**DisableLineHeightGrid**

express   一个代表 **Paragraph** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例设定 WPS 在已指定每页行数的情况下，将选定段落中的字符与行网格对齐。*/
function test() {
    Selection.Paragraphs.Item(1).DisableLineHeightGrid = true
}
```


```JavaScript
/*本示例显示活动文档指定每页的行数时，WPS 是否会将第一个段落中的字符与行网格对齐。*/
function test() {
    alert(ActiveDocument.Paragraphs.Item(1).DisableLineHeightGrid == true)
}
```
