# Paragraph.HalfWidthPunctuationOnTopOfLine

如果为 **True** ，则 WPS 会将指定段落行首的标点符号改为半角字符。如果仅将某些指定段落的该属性设置为 **True** ，则此属性将返回 **wdUndefined** 。 **Long** 类型，可读写。



## 语法

express.**HalfWidthPunctuationOnTopOfLine**

express   一个代表 **Paragraph** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例设置 WPS 将活动文档第一段的行首标点符号改为半角字符。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).HalfWidthPunctuationOnTopOfLine = true
}
```


```JavaScript
/*本示例设置选中内容第二段的行首标点符号改为半角字符。*/
function test() {
    Selection.Paragraphs.Item(2).HalfWidthPunctuationOnTopOfLine = true
}
```
