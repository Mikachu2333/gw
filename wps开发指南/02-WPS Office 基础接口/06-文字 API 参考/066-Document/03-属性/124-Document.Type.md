# Document.Type

返回文档的类型（模板或文档）。只读 **[WdDocumentType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdDocumentType)** 类型。



## 语法

express.**Type**

express   一个代表 **Document** 对象的变量。

## 类型

WdDocumentType

## 示例


```JavaScript
/*本示例判断如果活动文档的类型为wdTypeDocument，则将该文档中“标题 1”样式重新定义为居中。*/
function test() {
    if (ActiveDocument.Type == wdTypeDocument) {
        ActiveDocument.Styles.Item("标题 1").ParagraphFormat.Alignment = wdAlignParagraphCenter
    }
}
```


```JavaScript
/*本示例判断第一个文档的类型，并通知用户。*/
function test() {
    switch (Documents.Item(1).Type) {
        case wdTypeDocument:
            alert("文档的类型为文档")
            break
        case wdTypeFrameset:
            alert("文档的类型为框架集")
            break
        case wdTypeTemplate:
            alert("文档的类型为模板")
            break
    }
}
```
