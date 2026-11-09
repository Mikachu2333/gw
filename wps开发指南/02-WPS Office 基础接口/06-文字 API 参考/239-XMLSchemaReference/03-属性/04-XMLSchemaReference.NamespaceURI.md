# XMLSchemaReference.NamespaceURI

返回 **String** 值，该值表示指定对象的架构命名空间的统一资源标识符 (URI)。只读。



## 语法

express.**NamespaceURI**

express   一个代表 **XMLSchemaReference** 对象的变量。

## 类型

string

## 说明


如果创建的是用于 WPS 的 XML 架构，则强烈建议在架构中指定 targetNamespace 设置。

SimpleSample 架构包含在 Smart Document Software Development Kit (SDK) 中。 有关详细信息，请参阅 Smart Document SDK。



## 示例


```JavaScript
/*本示例重新加载 SimpleSample 架构，如果该架构没有附加到活动文档，则附加该架构。*/
function test() {
    let xmlSchemaReference = ActiveDocument.XMLSchemaReferences.Item(2)
    if (xmlSchemaReference.NamespaceURI !== "SimpleSample") {
        Application.XMLNamespaces.Item("SimpleSample").AttachToDocument(ActiveDocument)
    }
}
```


```JavaScript
/*本示例显示附加到第一个文档的第一个架构的URI。*/
function test() {
    let xmlSchemaReference = Documents.Item(1).XMLSchemaReferences.Item(1)
    alert(xmlSchemaReference.NamespaceURI)
}
```
