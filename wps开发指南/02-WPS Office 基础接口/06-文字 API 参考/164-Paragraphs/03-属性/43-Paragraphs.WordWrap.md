# Paragraphs.WordWrap

如果 WPS 在指定段落中的西文单词中间断字换行，则该属性值为 **msoFalse** 。可读写 **Long** 类型。



## 语法

express.**WordWrap**

express   一个代表 **Paragraphs** 对象的变量。

## 类型

number（int4 精度）

## 说明


如果仅将某些指定段落的此属性设置为 **msoTrue** ，则此属性返回 **wdUndefined** 。根据您所选择或安装的语言支持（例如，美国英语），该属性可能不可用。



## 示例


```JavaScript
/*本示例设置 WPS 在活动文档的所有段落中的西文单词中间断字换行。*/
function test() {
    ActiveDocument.Paragraphs.WordWrap = msoFalse
}
```


```JavaScript
/*本示例设置在所选段落中的西文单词中间不断字换行。*/
function test() {
    Selection.Paragraphs.WordWrap = msoTrue
}
```
