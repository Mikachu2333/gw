# CustomXMLNodes 对象

包含 **[CustomXMLNode](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLNode/obj)** 对象的集合，这些对象代表文档中的 XML 节点。

## 说明


 **[Attributes](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLNode/member/Attributes)** 和 **[ChildNodes](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLNode/member/ChildNodes)** 属性返回此类型节点的集合。


## 示例


```JavaScript
/*本示例运行于文字组件，通过使用 XPath 表达式从活动文档的第四个 CustomXMLPart 对象中选择一个或多个节点。*/
function test() {
    let customXMLPart = ActiveDocument.CustomXMLParts.Item(4)
    //Get custom xml nodes using XPath.
    let customXMLNodes = customXMLPart.SelectNodes("/ns0:root")
}
```


```JavaScript
/*本示例运行于文字组件，显示活动文档中的第一个内容控件映射到的自定义 XML 部件中指定节点与 XPath 表达式匹配的第一个节点不带命名空间前缀的基本名称。*/
function test() {
    let contentControl = ActiveDocument.ContentControls.Item(1)
    let customXMLNode = contentControl.XMLMapping.CustomXMLPart.SelectSingleNode("/ns1:coreProperties[1]")
    let customXMLNodes = customXMLNode.SelectNodes("/ns1:coreProperties[1]/ns0:title[1]")
    alert(customXMLNodes.Item(1).BaseName)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLNodes/member/Item) | 获取 **CustomXMLNodes** 集合中的一个 **CustomXMLNode** 对象。只读。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLNodes/member/Application) | 获取一个代表 **CustomXMLNodes** 对象的容器应用程序的 **Application** 对象。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLNodes/member/Count) | 获取 **CustomXMLNodes** 集合中 **CustomXMLNode** 对象的数目。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLNodes/member/Creator) | 获取一个 32 位整数，指示创建 **CustomXMLNodes** 对象时所使用的应用程序。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLNodes/member/Parent) | 获取 **CustomXMLNodes** 对象的 **Parent** 对象。只读。 |