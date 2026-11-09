# CustomXMLSchema 对象

代表 **CustomXMLSchemaCollection** 集合中的一个架构。


## 示例


```JavaScript
/*本示例运行于文字组件，将附加到活动文档上第一个 CustomXMLPart 对象的最后一个架构的命名空间的唯一地址标识符插入到光标处。*/
function test() {
    let customXMLPart = ActiveDocument.CustomXMLParts.Item(1)
    Selection.TypeText(customXMLPart.SchemaCollection.Item(customXMLPart.SchemaCollection.Count).NamespaceURI)
}
```


```JavaScript
/*本示例运行于文字组件，显示附加到第一个文档上所有 CustomXMLPart 对象的所有架构的命名空间的唯一地址标识符。*/
function test() {
    let customXMLParts = Documents.Item(1).CustomXMLParts
    let str = ""
    for (let i = 1; i <= customXMLParts.Count; i++) {
        let schemaCollection = customXMLParts.Item(i).SchemaCollection
        for (let j = 1; j <= schemaCollection.Count; j++) {
            str += schemaCollection.Item(j).NamespaceURI + "\n"
        }
    }
    alert(str)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLSchema/member/Application) | 获取一个代表 **CustomXMLSchema** 对象的容器应用程序的 **Application** 对象。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLSchema/member/Creator) | 获取一个 32 位整数，指示创建 **CustomXMLSchema** 对象时所使用的应用程序。只读。 |
| [NamespaceURI](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLSchema/member/NamespaceURI) | 获取 **CustomXMLSchema** 对象的命名空间的唯一地址标识符。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLSchema/member/Parent) | 获取 **CustomXMLSchema** 对象的 **Parent** 对象。只读。 |