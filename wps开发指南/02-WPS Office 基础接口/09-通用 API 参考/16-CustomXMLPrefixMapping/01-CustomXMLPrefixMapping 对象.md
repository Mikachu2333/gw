# CustomXMLPrefixMapping 对象

代表一个命名空间前缀。


## 示例


```JavaScript
/*本示例运行于文字组件，向第一个文档的第一个 CustomXMLPart对象的 CustomXMLPrefixMapping 集合添加命名空间和前缀，创建一个 CustomXMLPrefixMapping 对象，然后显示集合中最后一个 CustomXMLPrefixMapping 对象的命名空间的唯一地址标识符。*/
function test() {
    let mappings = Documents.Item(1).CustomXMLParts.Item(1).NamespaceManager
    mappings.AddNamespace("xs", "urn:invoice:namespace")
    alert(mappings.Item(mappings.Count).NamespaceURI)
}
```


```JavaScript
/*本示例运行于文字组件，显示活动文档上所有 CustomXMLPart 对象中所有 CustomXMLPrefixMapping 对象的前缀。*/
function test() {
    let customXMLParts = ActiveDocument.CustomXMLParts
    let str = ""
    for (let i = 1; i <= customXMLParts.Count; i++) {
        let mappings = customXMLParts.Item(i).NamespaceManager
        for (let j = 1; j <= mappings.Count; j++) {
            str += mappings.Item(j).Prefix + "\n"
        }
    }
    alert(str)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLPrefixMapping/member/Application) | 获取一个代表 **CustomXMLPrefixMapping** 对象的容器应用程序的 **Application** 对象。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLPrefixMapping/member/Creator) | 获取一个 32 位整数，指示创建 **CustomXMLPrefixMapping** 对象时所使用的应用程序。只读。 |
| [NamespaceURI](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLPrefixMapping/member/NamespaceURI) | 获取 **CustomXMLPrefixMapping** 对象的命名空间的唯一地址标识符。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLPrefixMapping/member/Parent) | 获取 **CustomXMLPrefixMapping** 对象的 **Parent** 对象。只读。 |
| [Prefix](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLPrefixMapping/member/Prefix) | 获取 **CustomXMLPrefixMapping** 对象的前缀。只读。 |