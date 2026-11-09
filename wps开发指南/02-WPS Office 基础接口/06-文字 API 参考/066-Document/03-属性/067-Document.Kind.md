# Document.Kind

返回或设置 WPS 在自动设置指定文档的格式时使用的格式类型。 **[WdDocumentKind](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdDocumentKind)** 类型，可读写。



## 语法

express.**Kind**

express   一个代表 **Document** 对象的变量。

## 类型

WdDocumentKind

## 示例


```JavaScript
/*本示例询问用户活动文档是否为电子邮件，如果是，则将此文档的格式设置为电子邮件格式。*/
function test() {
    let response = MsgBox("Is this document an e-mail message?", jsYesNo)
    if (response === jsResultYes) {
        ActiveDocument.Kind = wdDocumentEmail
        ActiveDocument.Content.AutoFormat()
    }
}
```


```JavaScript
/*本示例显示 WPS 在自动设置第一个文档的格式时使用的格式类型是否为wdDocumentNotSpecified。*/
function test() {
    alert(Documents.Item(1).Kind == wdDocumentNotSpecified)
}
```
