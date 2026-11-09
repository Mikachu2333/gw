# Document.Styles

返回指定文档的 **[Styles](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Styles/obj)** 集合。只读。



## 语法

express.**Styles**

express   一个代表 **Document** 对象的变量。

## 类型

Styles

## 示例


```JavaScript
/*本示例将活动文档中所有以“Chapter ”开始的段落样式设置为“标题 1”。*/
function test() {
    let paragraphs = ActiveDocument.Paragraphs
    for (let i = 1; i <= paragraphs.Count; i++) {
        if (paragraphs.Item(i).Range.Words.Item(1).Text == "Chapter ") {
            paragraphs.Item(i).Style = ActiveDocument.Styles.Item(wdStyleHeading1)
        }
    }
}
```


```JavaScript
/*此示例更改附加到活动文档的模板中“标题 1”样式的格式。UpdateStyles 方法更新活动文档中的样式，包括“标题 1”样式。*/
function test() {
    let document = ActiveDocument.AttachedTemplate.OpenAsDocument()
    let font = document.Styles.Item(wdStyleHeading1).Font
    font.Name = "Arial"
    font.Size = 16
    document.Close(wdSaveChanges)
    ActiveDocument.UpdateStyles()
}
```
