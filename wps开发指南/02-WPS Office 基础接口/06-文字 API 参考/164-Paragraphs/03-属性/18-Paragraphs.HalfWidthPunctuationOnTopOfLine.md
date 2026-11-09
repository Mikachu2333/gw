# Paragraphs.HalfWidthPunctuationOnTopOfLine

如果为 **msoTrue** ，则 WPS 会将指定段落行首的标点符号改为半角字符。如果仅将某些指定段落的该属性设置为 **msoTrue** ，则此属性将返回 **wdUndefined** 。 **Long** 类型，可读写。



## 语法

express.**HalfWidthPunctuationOnTopOfLine**

express   一个代表 **Paragraphs** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例设置 WPS 将活动文档所有段落的行首标点符号改为半角字符。*/
function test() {
    ActiveDocument.Paragraphs.HalfWidthPunctuationOnTopOfLine = msoTrue
}
```


```JavaScript
/*本示例显示选定区域所有段落的行首标点符号是否改为半角字符。*/
function test() {
    alert(Selection.Paragraphs.HalfWidthPunctuationOnTopOfLine == msoTrue)
}
```
