# XMLSchemaReference 对象

代表附加到文档的单个架构。

## 说明


使用 **ChildNodeSuggestion** 对象的 **XMLSchemaReference** 属性返回 **XMLSchemaReference** 对象。

SimpleSample 架构包含在 Smart Document Software Development Kit (SDK) 中。 有关详细信息，请参阅 Smart Document SDK。


## 示例


```JavaScript
/*本示例判断如果引用的 XML 架构是 SimpleSample 架构，则插入建议的 XML 子元素。*/
function test() {
    let suggestions = ActiveDocument.ChildNodeSuggestions
    for (let i = 1; i <= suggestions.Count; i++) {
        if (suggestions.Item(i).XMLSchemaReference.NamespaceURI == "SimpleSample") {
            suggestions.Item(i).Insert()
        }
    }
}
```


```JavaScript
/*本示例显示附加到第一个文档的第二个架构的物理位置和URI。*/
function test() {
    let xmlSchemaReference = Documents.Item(1).XMLSchemaReferences.Item(2)
    alert(`架构的物理位置：${xmlSchemaReference.Location}\n架构的URI：${xmlSchemaReference.NamespaceURI}`)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLSchemaReference/member/Delete) | 删除指定的 XML 架构引用。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLSchemaReference/member/Application) | 返回一个代表 WPS 应用程序的 **Application** 对象。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLSchemaReference/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [Location](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLSchemaReference/member/Location) | 返回一个 **String** 类型的值，该值代表 XML 架构的物理位置。只读。 |
| [NamespaceURI](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLSchemaReference/member/NamespaceURI) | 返回 **String** 值，该值表示指定对象的架构命名空间的统一资源标识符 (URI)。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLSchemaReference/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **XMLSchemaReference** 对象的父对象。 |