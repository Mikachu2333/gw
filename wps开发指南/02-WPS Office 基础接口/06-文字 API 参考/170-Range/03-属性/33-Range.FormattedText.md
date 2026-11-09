# Range.FormattedText

返回或设置一个 **Range** 对象，该对象包含指定区域中进行过格式编排的文字。可读写。



## 语法

express.**FormattedText**

express   一个代表 **Range** 对象的变量。

## 类型

Range

## 说明


此属性返回 **Range** 对象，以及指定的区域中的字符格式和文本。如果在区域中有一个段落标记，则 **Range** 对象中包含段落格式。  

在设置此属性时，区域中的文本会被格式文本替换。如果不想替换现有的文本，则在使用此属性之前使用 **Collapse** 方法。



## 示例


```JavaScript
/*本示例复制活动文档中的第一个段落，包含段落的格式，并在插入点插入带格式的文字。*/
function test() {
    Selection.Range.Collapse(wdCollapseStart)
    Selection.Range.FormattedText = ActiveDocument.Paragraphs.Item(1).Range
}
```


```JavaScript
/*本示例将选定内容进行过格式编排的文字和文本格式复制到新文档。*/
function test() {
    let range = Selection.FormattedText
    Documents.Add().Content.FormattedText = range
}
```
