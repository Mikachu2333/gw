# MailMergeField.Cut

从文档中删除指定的邮件合并域，并将其移动到剪贴板上。



## 语法

express.**Cut()**

express   一个代表 **MailMergeField** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除活动文档的第一个邮件合并域，并将该域粘贴到插入点。*/
function test() {
    if (ActiveDocument.MailMerge.Fields.Count >= 1) {
        ActiveDocument.MailMerge.Fields.Item(1).Cut()
        Selection.Collapse(wdCollapseEnd)
        Selection.Paste()
    }
}
```


```JavaScript
/*本示例删除第一个文档的第二个邮件合并域，并将该域粘贴到新建段落的文档部分。*/
function test() {
    let field = Application.Documents.Item(1).MailMerge.Fields.Item(2)
    field.Cut()
    let paragraph = Application.Documents.Item(1).Paragraphs.Add()
    paragraph.Range.Paste()
}
```
