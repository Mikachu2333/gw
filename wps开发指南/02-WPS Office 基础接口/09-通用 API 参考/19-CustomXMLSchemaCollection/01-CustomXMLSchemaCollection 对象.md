# CustomXMLSchemaCollection 对象

代表附加到数据流的 **[CustomXMLSchema](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLSchema/obj)** 对象的集合。


## 示例


```JavaScript
/*本示例运行于文字组件，将附加到第一个文档上所有 CustomXMLPart 对象的第一个架构的命名空间的唯一地址标识符插入到光标处。*/
function test() {
    let customXMLParts = Documents.Item(1).CustomXMLParts
    for (let i = 1; i <= customXMLParts.Count; i++) {
        let customXMLSchema = customXMLParts.Item(i).SchemaCollection.Item(1)
        Selection.TypeText(customXMLSchema.NamespaceURI + "\n")
    }
}
```


```JavaScript
/*本示例运行于文字组件，显示附加到活动文档上最后一个 CustomXMLPart 对象的第一个架构命名空间的唯一地址标识符。*/
function test() {
    let customXMLPart = ActiveDocument.CustomXMLParts.Item(ActiveDocument.CustomXMLParts.Count)
    alert(customXMLPart.SchemaCollection.NamespaceURI(1))
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLSchemaCollection/member/Item) | 获取 **CustomXMLSchemaCollection** 集合中的一个 **CustomXMLSchema** 对象。只读。 |
| [NamespaceURI](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLSchemaCollection/member/NamespaceURI) | 获取 **CustomXMLSchemaCollection** 对象的命名空间的唯一地址标识符。只读。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLSchemaCollection/member/Application) | 获取一个代表 **CustomXMLSchemaCollection** 对象的容器应用程序的 **Application** 对象。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLSchemaCollection/member/Count) | 获取一个 **Long** 类型的值，指示 **CustomXMLSchemaCollection** 集合中的项数。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLSchemaCollection/member/Creator) | 获取一个 32 位整数，指示创建 **CustomXMLSchemaCollection** 对象时所使用的应用程序。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLSchemaCollection/member/Parent) | 获取 **CustomXMLSchemaCollection** 对象的 **Parent** 对象。只读。 |