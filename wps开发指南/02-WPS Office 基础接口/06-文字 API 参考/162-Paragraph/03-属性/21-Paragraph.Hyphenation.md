# Paragraph.Hyphenation

如果指定的段落进行自动断字，则该属性值为 **True** 。如果指定的段落不进行自动断字，则该属性值为 **False** 。可读写 **Long** 类型。



## 语法

express.**Hyphenation**

express   一个代表 **Paragraph** 对象的变量。

## 类型

number（int4 精度）

## 说明


此属性可以是 **True** 、 **False** 或 **wdUndefined** 。



## 示例


```JavaScript
/*本示例关闭活动文档中第一段的自动断字功能。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).Hyphenation = false
}
```


```JavaScript
/*本示例启用第一个文档的第二个段落自动断字功能。*/
function test() {
    Documents.Item(1).Paragraphs.Item(2).Hyphenation = true
}
```
