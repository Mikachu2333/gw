# Paragraph.WordWrap

如果 WPS 在指定段落或文本框架的西文单词中间断字换行，则该属性值为 **msoFalse** 。可读写 **Long** 类型。



## 语法

express.**WordWrap**

express   一个代表 **Paragraph** 对象的变量。

## 类型

number（int4 精度）

## 说明


如果仅将某些指定段落或文本框架的此属性设置为 **msoTrue** ，则此属性返回 **wdUndefined** 。根据您所选择或安装的语言支持（例如，美国英语），这种用法可能不可用。



## 示例


```JavaScript
/*本示例设置在活动文档的第一段中的西文单词中间断字换行。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).WordWrap = msoFalse
}
```


```JavaScript
/*本示例设置在第一个文档的所有段落中的西文单词中间不断字换行。*/
function test() {
    let paragraphs = Documents.Item(1).Paragraphs
    for (let i = 1; i <= paragraphs.Count; i++) {
        paragraphs.Item(i).WordWrap = msoTrue
    }
}
```
