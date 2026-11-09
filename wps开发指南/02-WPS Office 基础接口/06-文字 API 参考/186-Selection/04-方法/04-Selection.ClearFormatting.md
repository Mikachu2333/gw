# Selection.ClearFormatting

清除所选内容的文本格式和段落格式。



## 语法

express.**ClearFormatting()**

express   一个代表 **Selection** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例清除活动文档中的所有文本格式和段落格式。*/
function test() {
    ActiveDocument.Select()
    Selection.ClearFormatting()
}
```


```JavaScript
/*本示例清除活动文档的第二段至第四段中的所有文本格式和段落格式。*/
function test() {
    let paragraphs = ActiveDocument.Paragraphs
    let start = paragraphs.Item(2).Range.Start
    let end = paragraphs.Item(4).Range.End
    ActiveDocument.Range(start, end).Select()
    Selection.ClearFormatting()
}
```
