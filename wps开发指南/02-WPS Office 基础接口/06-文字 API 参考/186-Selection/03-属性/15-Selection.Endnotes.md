# Selection.Endnotes

返回一个 **[Endnotes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Endnotes/obj)** 集合，该集合代表选定内容中包含的所有尾注。只读。



## 语法

express.**Endnotes**

express   一个代表 **Selection** 对象的变量。

## 类型

Endnotes

## 示例


```JavaScript
/*本示例将选定内容中的尾注放在文档的结尾，并将尾注引用标记的格式设置为小写罗马数字。*/
function test() {
    let endnotes = Selection.Endnotes
    endnotes.Location = wdEndOfDocument
    endnotes.NumberStyle = wdNoteNumberStyleLowercaseRoman
}
```


```JavaScript
/*本示例向活动文档第二个段落添加一个尾注。*/
function test() {
    ActiveDocument.Paragraphs.Item(2).Range.Select()
    Selection.Endnotes.Add(Selection.Range, undefined, "new-note")
}
```
