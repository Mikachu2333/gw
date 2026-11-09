# Selection.Copy

将指定的选定内容复制到剪贴板。



## 语法

express.**Copy()**

express   一个代表 **Selection** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例将选定内容复制到新文档中。*/
function test() {
    if (Selection.Type == wdSelectionNormal) {
        Selection.Copy()
        Documents.Add().Content.Paste()
    }
}
```


```JavaScript
/*本示例将活动文档的第二个段落选中，并将选定内容复制到剪贴板。*/
function test() {
    ActiveDocument.Paragraphs.Item(2).Range.Select()
    Selection.Copy()
}
```
