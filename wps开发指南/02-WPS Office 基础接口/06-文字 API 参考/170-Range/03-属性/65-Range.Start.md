# Range.Start

返回或设置某区域中起始字符的位置。 **Long** 类型，可读写。



## 语法

express.**Start**

express   一个代表 **Range** 对象的变量。

## 类型

number（int4 精度）

## 说明


 **Range** 对象包括起始字符和结束字符位置。起始字符位置是指距文档开头部分最近的字符位置。如果将该属性的值设置为大于 **End** 属性的值，则 **End** 属性值会设置为与 **Start** 属性值相同。

该属性返回起始字符相对于文档开头部分的位置。文本主体部分（ **wdMainTextStory** ）的起始字符位置为 0（零）。通过设置该属性可以更改选定内容、区域或书签的大小。



## 示例


```JavaScript
/*本示例使用活动文档的第二段的起始位置和第四段的结束位置创建区域 range。*/
function test() {
    let rangeStart = ActiveDocument.Paragraphs.Item(2).Range.Start
    let rangeEnd = ActiveDocument.Paragraphs.Item(4).Range.End
    let range = ActiveDocument.Range(rangeStart, rangeEnd)
}
```


```JavaScript
/*本示例将 range 起始字符的位置向右移动一个字符（这会使该区域缩小一个字符）。*/
function test() {
    let range = Selection.Range
    range.SetRange(range.Start + 1, range.End)
}
```
