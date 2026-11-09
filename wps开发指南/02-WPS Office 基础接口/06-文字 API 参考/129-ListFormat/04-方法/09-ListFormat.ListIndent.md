# ListFormat.ListIndent

增加指定 **ListFormat** 对象的区域中的段落的列表级别，增加量为一个级别。



## 语法

express.**ListIndent()**

express   一个代表 **ListFormat** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例设置第一个文档的第一个列表中的每一段依次缩进一个级别。*/
function test() {
    Documents.Item(1).Lists.Item(1).Range.ListFormat.ListIndent()
}
```


```JavaScript
/*本示例设置活动文档第四段至第八段的格式为多级符号列表，然后将段落缩进一个级别。*/
function test() {
    let paragraphs = ActiveDocument.Paragraphs
    let range = ActiveDocument.Range(paragraphs.Item(4).Range.Start, paragraphs.Item(8).Range.End)
    range.ListFormat.ApplyOutlineNumberDefault()
    range.ListFormat.ListIndent()
}
```
