# ListFormat.ListOutdent

降低指定的 **ListFormat** 对象的区域中段落的列表级别，减量为一个级别。



## 语法

express.**ListOutdent()**

express   一个代表 **ListFormat** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例依次降低活动文档的第一个列表中每一段落的缩进量，减量为一个级别。*/
function test() {
    ActiveDocument.Lists.Item(1).Range.ListFormat.ListOutdent()
}
```


```JavaScript
/*本示例设置活动文档第四段至第六段的格式为多级符号列表，然后将第四段至第六段缩进一级，然后删除列表中第一个段落的缩进。*/
function test() {
    let paragraphs = ActiveDocument.Paragraphs
    let range = ActiveDocument.Range(paragraphs.Item(4).Range.Start, paragraphs.Item(6).Range.End)
    range.ListFormat.ApplyOutlineNumberDefault()
    range.ListFormat.ListIndent()
    paragraphs.Item(4).Range.ListFormat.ListOutdent()
}
```
