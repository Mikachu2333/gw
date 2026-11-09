# Selection.PasteFormat

将以 **CopyFormat** 方法复制的格式应用于选定内容。



## 语法

express.**PasteFormat()**

express   一个代表 **Selection** 对象的变量。

## 返回值

void

## 说明


如果用 **CopyFormat** 方法时也选定了段落标记，则 WPS 不仅应用字符格式，也应用段落格式。



## 示例


```JavaScript
/*本示例将选定内容第一段的段落和字符格式复制到第二段。*/
function test() {
    Selection.Paragraphs.Item(1).Range.Select()
    Selection.CopyFormat()
    Selection.Paragraphs.Item(1).Next().Range.Select()
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
