# Template.OpenAsDocument

将指定模板作为文档打开并返回一个 **Document** 对象。



## 语法

express.**OpenAsDocument()**

express   一个代表 **Template** 对象的变量。

## 返回值

Document

## 说明


将模板作为文档打开则允许编辑该模板的内容。当 **Template** 对象中的某属性或方法（例如 **Styles** 属性）无效时，就可能需要使用这种方法。



## 示例


```JavaScript
/*本示例打开活动文档所选用的模板，如果该模板包含了不止一个段落标记的内容，则显示一个消息框，然后关闭该模板。*/
function test() {
    let document = ActiveDocument.AttachedTemplate.OpenAsDocument()
    if (document.Content.Text != "\r") {
        alert("Template is not empty")
    } else {
        alert("Template is empty")
    }
    document.Close(wdDoNotSaveChanges)
}
```


```JavaScript
/*本示例为 Normal 模板保存一个副本“Backup.dot”。*/
function test() {
    let document = NormalTemplate.OpenAsDocument()
    document.SaveAs("Backup.dot")
    document.Close(wdDoNotSaveChanges)
}
```


```JavaScript
/*本示例更改活动文档所选用的模板中“标题 1”的样式设置。UpdateStyles 方法用来更新活动文档中的样式。*/
function test() {
    let document = ActiveDocument.AttachedTemplate.OpenAsDocument()
    let font = document.Styles.Item(wdStyleHeading1).Font
    font.Name = "Arial"
    font.Size = 16
    font.Bold = false
    document.Close(wdSaveChanges)
    ActiveDocument.UpdateStyles()
}
```
