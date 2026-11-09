# Paragraphs.CharacterUnitLeftIndent

该属性返回或设置指定段落的左缩进量（以字符为单位）。 **Single** 类型，可读写。



## 语法

express.**CharacterUnitLeftIndent**

express   一个代表 **Paragraphs** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例将活动文档中所有段落的左缩进设为从左边距缩进一个字符。*/
function test() {
    ActiveDocument.Paragraphs.CharacterUnitLeftIndent = 1
}
```


```JavaScript
/*本示例显示所选段落的左缩进量。*/
function test() {
    alert(Selection.Paragraphs.CharacterUnitLeftIndent)
}
```
