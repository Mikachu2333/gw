# Document.CustomDocumentProperties

返回一个 **[DocumentProperties](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/DocumentProperties/obj)** 集合，该集合代表指定文档的所有自定义文档属性。



## 语法

express.**CustomDocumentProperties**

express   一个代表 **Document** 对象的变量。

## 类型

Object

## 说明


使用 **[BuiltInDocumentProperties](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/BuiltInDocumentProperties)** 属性可返回内置文档属性的集合。

 **msoPropertyTypeString（[MsoDocProperties](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoDocProperties)）** 类型的属性的长度不能超过 255 个字符。



## 示例


```JavaScript
/*本示例在活动文档的主文档文章插入一个自定义内置属性列表。*/
function test() {
    let range = ActiveDocument.Content
    range.Collapse(wdCollapseEnd)
    for (let i = 1; i <= ActiveDocument.CustomDocumentProperties.Count; i++) {
        let property = ActiveDocument.CustomDocumentProperties.Item(i)
        range.InsertParagraphAfter()
        range.InsertAfter(property.Name + "= ")
        range.InsertAfter(property.Value)
    }
}
```


```JavaScript
/*本示例将自定义文档属性添加到第一个文档。*/
function test() {
    let value = InputBox("Please type your name", "Name")
    Documents.Item(1).CustomDocumentProperties.Add("YourName", false, msoPropertyTypeString, value)
}
```
