# Selection.CopyFormat

复制选定文字第一个字符的字符格式。



## 语法

express.**CopyFormat()**

express   一个代表 **Selection** 对象的变量。

## 返回值

void

## 说明


如果选定了一个段落标记，则 WPS 除了复制字符格式，还复制段落格式。可以利用 **[PasteFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/PasteFormat)** 方法，将复制的格式应用到另一个选择内容。



## 示例


```JavaScript
/*本示例将活动文档第一段的格式复制到第二段。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).Range.Select()
    Selection.CopyFormat()
    ActiveDocument.Paragraphs.Item(2).Range.Select()
    Selection.PasteFormat()
}
```


```JavaScript
/*本示例折叠选定内容，并将选定内容的字符格式复制到下一个单词。*/
function test() {
    Selection.Collapse(wdCollapseStart)
    Selection.CopyFormat()
    Selection.Next(wdWord, 1).Select()
    Selection.PasteFormat()
}
```
