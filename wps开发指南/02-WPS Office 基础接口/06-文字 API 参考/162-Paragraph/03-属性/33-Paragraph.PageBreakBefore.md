# Paragraph.PageBreakBefore

如果在指定段落前插入了分页符，则该属性值为 **True** 。可读写 **Long** 类型。



## 语法

express.**PageBreakBefore**

express   一个代表 **Paragraph** 对象的变量。

## 类型

number（int4 精度）

## 说明


此属性可以是 **True** 、 **False** 或 **wdUndefined** 。



## 示例


```JavaScript
/*本示例在所选内容的第一段前插入分页符。*/
function test() {
    Selection.Paragraphs.Item(1).PageBreakBefore = true
}
```


```JavaScript
/*本示例将删除第四段前的分页符。*/
function test() {
    ActiveDocument.Paragraphs.Item(4).PageBreakBefore = false
}
```
