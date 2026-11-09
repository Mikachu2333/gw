# Range.Paste

将“剪贴板”中的内容插入指定范围。



## 语法

express.**Paste()**

express   一个代表 **Range** 对象的变量。

## 返回值

void

## 说明


如果不希望替换该范围的内容，可在使用此方法之前先使用 **Collapse** 方法。

如果您将此方法与 **Range** 对象一起使用，该范围将扩展以包含“剪贴板”中的内容。



## 示例


```JavaScript
/*本示例复制活动文档中第一个表格，并将其粘贴至新文档。*/
function test() {
    if (ActiveDocument.Tables.Count >= 1) {
        ActiveDocument.Tables.Item(1).Range.Copy()
        Documents.Add().Content.Paste()
    }
}
```


```JavaScript
/*本示例复制所选内容并将其粘贴到文档末尾。*/
function test() {
    if (Selection.Type !== wdSelectionIP) {
        Selection.Copy()
        let range = ActiveDocument.Content
        range.Collapse(wdCollapseEnd)
        range.Paste()
    }
}
```
