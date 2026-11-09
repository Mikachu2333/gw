# Document.UpdateStyles

将所有样式从附加模板复制到文档中，同时覆盖文档中所有现有同名的样式。



## 语法

express.**UpdateStyles()**

express   一个代表 **Document** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例将附加模板中的样式复制到每个打开的文档中，然后关闭每个文档。*/
function test() {
    for (let i = 1; i <= Documents.Count; i++) {
        Documents.Item(i).UpdateStyles()
        Documents.Item(i).Close(wdSaveChanges)
    }
}
```


```JavaScript
/*此示例更改附加到活动文档的模板中“标题 1”样式的格式。UpdateStyles 方法更新活动文档中的样式，包括“标题 1”样式。*/
function test() {
    let document = ActiveDocument.AttachedTemplate.OpenAsDocument()
    let font = document.Styles.Item(wdStyleHeading1).Font
    font.Name = "Arial"
    font.Bold = msoFalse
    document.Close(wdSaveChanges)
    ActiveDocument.UpdateStyles()
}
```
