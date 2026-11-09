# XMLSchemaReferences 对象

 **XMLSchemaReference** 对象的集合，这些对象代表附加到文档的唯一命名空间。

## 说明


使用 **XMLSchemaReferences** 属性可返回附加到文档的架构的集合。

SimpleSample 架构包含在 Smart Document Software Development Kit (SDK) 中。有关详细信息，请参阅 Smart Document SDK。


## 示例


```JavaScript
/*本示例遍历附加到文档的架构。如果找到指定的架构，则重新加载；如果未找到指定的架构，它将架构附加到文档。*/
function test() {
    let blnSchemaAttached = false
    for (let i = 1; i <= ActiveDocument.XMLSchemaReferences.Count; i++) {
        if (ActiveDocument.XMLSchemaReferences.Item(i).NamespaceURI !== "SimpleSample") {
            blnSchemaAttached = false
        } else {
            ActiveDocument.XMLSchemaReferences.Item(i).Reload()
            blnSchemaAttached = true
            break
        }
    }
    if (blnSchemaAttached == false) {
        let xmlNamespace = Application.XMLNamespaces.Item("SimpleSample")
        xmlNamespace.AttachToDocument(ActiveDocument)
    }
}
```


```JavaScript
/*本示例将指定的架构附加到第一个文档中。*/
function test() {
    Documents.Item(1).XMLSchemaReferences.Add("SimpleSample", "example", "D:\\示例\\Simplesample\\Simplesample.xsd", true)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLSchemaReferences/member/Add) | 返回一个 **XMLSchemaReference** 对象，该对象代表应用于文档的架构。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLSchemaReferences/member/Item) | 返回集合中的单个 **XMLSchemaReference** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLSchemaReferences/member/Count) | 返回一个 **Long** 类型的值，该值代表集合中 XML 架构的数量。只读。 |
| [ShowPlaceholderText](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLSchemaReferences/member/ShowPlaceholderText) | 返回一个 **Boolean** 类型的值，该值代表在文档中是否显示 XML 元素的自动占位符文本。可读写。 |