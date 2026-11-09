# XmlSchema 对象

代表 **[XmlMap](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlMap/obj)** 对象包含的 XML 架构。

## 说明


使用 **[Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlSchemas/member/Item)** 方法可从 **[XmlSchemas](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlSchemas/obj)** 集合返回一个 **XmlSchema** 对象。

使用 **[Namespace](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlSchema/member/Namespace)** 属性可返回某个架构的目标命名空间。

使用 **[XML](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlSchema/member/XML)** 属性可返回某个架构的 XML 内容。


## 示例


```JavaScript
/*本示例显示第一张工作簿上第一项XmlMap的所有XML架构的命名空间的前缀。*/
function test() {
    let xmlSchemas = Workbooks.Item(1).XmlMaps.Item(1).Schemas
    for (let i = 1; i <= xmlSchemas.Count; i++) {
        alert(xmlSchemas.Item(i).Namespace.Prefix)
    }
}
```


```JavaScript
/*本示例判断如果活动工作簿上第一项XmlMap的第一个XML架构的名称为“Schema2”，则显示该架构的命名空间的统一资源标识符。*/
function test() {
    let xmlSchema = ActiveWorkbook.XmlMaps.Item(1).Schemas.Item(1)
    if (xmlSchema.Name == "Schema2") {
        alert(xmlSchema.Namespace.Uri)
    }
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlSchema/member/Name) | 返回一个 **String** 值，它代表用于在 **[XmlMap](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlMap/obj)** 对象中标识 XML 架构的友好名称。 |
| [Namespace](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlSchema/member/Namespace) | 返回一个 **[XmlNamespace](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlNamespace/obj)** 对象，该对象表示指定架构的目标命名空间 （命名空间：一种唯一限定元素名称与关系的方法，以避免具有同一名称但来自多个来源的元素发生名称冲突。）。只读。 |
| [XML](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlSchema/member/XML) | 返回一个 **String** 值，它代表指定架构的内容。 |