# Paragraphs.Style

返回或设置指定段落的样式。可读写 **Variant** 类型。



## 语法

express.**Style**

express   一个代表 **Paragraphs** 对象的变量。

## 类型

any

## 说明


要设置该属性，请指定样式的本地名称、一个整数、一个 **WdBuiltinStyle** 常量或一个代表样式的对象。  

如果返回包含多个样式的范围的样式，则只返回第一个字符样式或段落样式。



## 示例


```JavaScript
/*本示例将活动文档中所有段落的样式设置为“正文文本缩进”样式。*/
function test() {
    ActiveDocument.Paragraphs.Style = wdStyleBodyTextIndent
}
```


```JavaScript
/*本示例显示第一个文档中所有段落的样式是否为首行缩进。*/
function test() {
    alert(Documents.Item(1).Paragraphs.Style == wdStyleBodyTextFirstIndent)
}
```
