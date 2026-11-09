# Field.Copy

将指定域复制到剪贴板。



## 语法

express.**Copy()**

express   一个代表 **Field** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例将活动文档上第一个域复制到剪贴板，并通知用户。*/
function test() {
    let field = ActiveDocument.Fields.Item(1)
    field.Copy()
    alert("已将第一个域复制到剪贴板")
}
```


```JavaScript
/*本示例将第一个文档上第二个域复制到剪贴板，然后粘贴到光标处。*/
function test() {
    let field = Documents.Item(1).Fields.Item(2)
    field.Copy()
    Selection.Paste()
}
```
