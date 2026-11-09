# Range.Cut

将指定对象从文档中移到剪贴板上



## 语法

express.**Cut()**

express   一个代表 **Range** 对象的变量。

## 返回值

void

## 说明


将区域的内容移动到剪贴板上，但折叠区域仍保留在文档中。



## 示例


```JavaScript
/*本示例剪切活动文档的第一段，并将该段落粘贴到文档的末尾。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).Range.Cut()
    let range = ActiveDocument.Range(ActiveDocument.Content.End - 1, ActiveDocument.Content.End - 1)
    range.Paste()
}
```


```JavaScript
/*本示例剪切活动文档的主文档文章的内容，然后将内容粘贴到新建文档中。*/
function test() {
    ActiveDocument.Content.Cut()
    Documents.Add().Range(0, 0).Paste()
}
```
