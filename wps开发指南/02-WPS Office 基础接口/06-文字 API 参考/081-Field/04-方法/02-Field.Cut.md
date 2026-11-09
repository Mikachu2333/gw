# Field.Cut

将指定域从文档中移到剪贴板上。



## 语法

express.**Cut()**

express   一个代表 **Field** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例将活动文档的第一个域移到剪贴板上，并将该域粘贴到插入点。*/
function test() {
    if (ActiveDocument.Fields.Count >= 1) {
        ActiveDocument.Fields.Item(1).Cut()
        Selection.Collapse(wdCollapseEnd)
        Selection.Paste()
    }
}
```


```JavaScript
/*本示例将第一个文档上第二个域移到剪贴板，并通知用户。*/
function test() {
    let field = Documents.Item(1).Fields.Item(2)
    field.Cut()
    alert("已将第一个域移到剪贴板")
}
```
