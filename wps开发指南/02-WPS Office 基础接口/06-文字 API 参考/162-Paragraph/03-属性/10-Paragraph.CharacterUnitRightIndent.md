# Paragraph.CharacterUnitRightIndent

该属性返回或设置指定段落的右缩进量（以字符为单位）。 **Single** 类型，可读写。



## 语法

express.**CharacterUnitRightIndent**

express   一个代表 **Paragraph** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例将活动文档中第一段的右缩进设为从右边距缩进一个字符。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).CharacterUnitRightIndent = 1
}
```


```JavaScript
/*本示例显示第一个文档的第二个段落的右缩进量。*/
function test() {
    alert(Documents.Item(1).Paragraphs.Item(2).CharacterUnitRightIndent)
}
```
