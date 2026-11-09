# CustomXMLPrefixMappings 对象

代表 **[CustomXMLPrefixMapping](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLPrefixMapping/obj)** 对象的集合。


## 示例


```JavaScript
/*本示例运行于文字组件，向第一个文档的第一个 CustomXMLPart 对象的 CustomXMLPrefixMappings 集合添加命名空间和前缀，创建一个 CustomXMLPrefixMapping 对象。*/
function test() {
    let mappings = Documents.Item(1).CustomXMLParts.Item(1).NamespaceManager
    mappings.AddNamespace("xs", "urn:invoice:namespace")
}
```


```JavaScript
/*本示例运行于文字组件，在光标处插入活动文档上第一个 CustomXMLPart 对象中第一个 CustomXMLPrefixMapping 对象的命名空间的唯一地址标识符。*/
function test() {
    let customXMLPart = ActiveDocument.CustomXMLParts.Item(1)
    Selection.TypeText(customXMLPart.NamespaceManager.Item(1).NamespaceURI)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [AddNamespace](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLPrefixMappings/member/AddNamespace) | 允许您添加要在查询项目时使用的自定义命名空间/前缀映射。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLPrefixMappings/member/Item) | 获取 **CustomXMLPrefixMappings** 集合中的一个 **CustomXMLPrefixMapping** 对象。只读。 |
| [LookupNamespace](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLPrefixMappings/member/LookupNamespace) | 允许您获取对应于指定前缀的命名空间。 |
| [LookupPrefix](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLPrefixMappings/member/LookupPrefix) | 允许您获取对应于指定命名空间的前缀。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLPrefixMappings/member/Application) | 获取一个代表 **CustomXMLPrefixMappings** 对象的容器应用程序的 **Application** 对象。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLPrefixMappings/member/Count) | 获取一个 **Long** 类型的值，指示 **CustomXMLPrefixMappings** 集合中的项数。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLPrefixMappings/member/Creator) | 获取一个 32 位整数，指示创建 **CustomXMLPrefixMappings** 对象时所使用的应用程序。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLPrefixMappings/member/Parent) | 获取 **CustomXMLPrefixMappings** 对象的 **Parent** 对象。只读。 |