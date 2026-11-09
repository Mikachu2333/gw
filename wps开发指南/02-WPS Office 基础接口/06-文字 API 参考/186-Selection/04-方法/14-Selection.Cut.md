# Selection.Cut

从文档中删除指定对象，并将其移动到剪贴板上。



## 语法

express.**Cut()**

express   一个代表 **Selection** 对象的变量。

## 返回值

void

## 说明


将所选内容移动到剪贴板上，但折叠的所选内容仍保留在文档中。



## 示例


```JavaScript
/*本示例删除所选内容，并将其粘贴到新文档中。*/
function test() {
    if (Selection.Type == wdSelectionNormal) {
        Selection.Cut()
        Documents.Add().Content.Paste()
    }
}
```


```JavaScript
/*本示例删除第一个文档的第二个段落，并将其移动到剪贴板上。*/
function test() {
    Documents.Item(1).Paragraphs.Item(2).Range.Select()
    Selection.Cut()
}
```
