# ParagraphFormat.CharacterUnitFirstLineIndent

返回或设置首行或悬挂缩进的值（以字符为单位）。用正值设置首行缩进，用负值设置悬挂缩进。 **Single** 类型，可读写。



## 语法

express.**CharacterUnitFirstLineIndent**

express   一个代表 **ParagraphFormat** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例将活动文档中第一段的首行缩进设为一个字符。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).Format.CharacterUnitFirstLineIndent = 1
}
```


```JavaScript
/*本示例将活动文档中第二段的悬挂缩进设为 1.5 个字符。*/
function test() {
    ActiveDocument.Paragraphs.Item(2).Format.CharacterUnitFirstLineIndent = -1.5
}
```
