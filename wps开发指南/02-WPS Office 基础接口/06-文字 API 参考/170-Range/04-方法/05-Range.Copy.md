# Range.Copy

将指定范围复制到剪贴板。



## 语法

express.**Copy()**

express   一个代表 **Range** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例复制活动文档的第一段，并将该段落粘贴到文档的末尾。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).Range.Copy()
    let range = ActiveDocument.Range(ActiveDocument.Content.End - 1, ActiveDocument.Content.End - 1)
    range.Paste()
}
```


```JavaScript
/*本示例复制活动文档的主文档文章的内容，然后粘贴到新建文档中。*/
function test() {
    ActiveDocument.Content.Copy()
    Documents.Add().Range(0, 0).Paste()
}
```
