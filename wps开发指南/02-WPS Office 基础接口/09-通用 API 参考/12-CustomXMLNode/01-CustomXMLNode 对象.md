# CustomXMLNode 对象

代表文档中树的一个 XML 节点。 **CustomXMLNode** 对象是 **CustomXMLNodes** 集合的一个成员。

## 说明


 **CustomXMLNode** 对象设计为具有与 **IXMLDOMNode** 接口等效的功能。此外，它包含 **[XPath](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLNode/member/XPath)** 属性，这是对 MSXML 提供的对象的重大改进。


## 示例


```JavaScript
/*本示例运行于文字组件，通过使用 XPath 表达式从活动文档的第四个 CustomXMLPart 对象中选择单个节点，并将它分配给 CustomXMLNode 对象。*/
function test() {
    let customXMLPart = ActiveDocument.CustomXMLParts.Item(4)
    let customXMLNode = customXMLPart.SelectSingleNode("/ns0:root")
}
```


```JavaScript
/*本示例运行于文字组件，删除活动文档上第四个 CustomXMLPart 对象中指定节点的第二个子节点，并将其替换为同一位置中的其他（注释）节点。*/
function test() {
    let customXMLPart = ActiveDocument.CustomXMLParts.Item(4)
    let customXMLNode = customXMLPart.SelectSingleNode("/ns0:root/ns0:example1")
    customXMLNode.ReplaceChildNode(customXMLNode.ChildNodes.Item(2), "example", null, msoCustomXMLNodeComment, "test")
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [AppendChildNode](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLNode/member/AppendChildNode) | 将单个节点作为树中上下文元素节点下的最后一个子节点追加。 |
| [AppendChildSubtree](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLNode/member/AppendChildSubtree) | 将子树作为树中上下文元素节点下的最后一个子节点添加。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLNode/member/Delete) | 从树中删除当前节点（包括其所有子项，如果有）。 |
| [HasChildNodes](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLNode/member/HasChildNodes) | 如果当前元素节点包含子元素节点，则获取 **True** 。 |
| [InsertNodeBefore](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLNode/member/InsertNodeBefore) | 在树中的上下文节点前面插入新节点。 |
| [InsertSubtreeBefore](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLNode/member/InsertSubtreeBefore) | 将指定的子树插入到紧邻上下文节点之前的位置。 |
| [RemoveChild](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLNode/member/RemoveChild) | 从树中删除指定的子节点。 |
| [ReplaceChildNode](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLNode/member/ReplaceChildNode) | 从主树中删除指定的子节点（及其子树），并将它替换为相同位置中的其他节点。 |
| [ReplaceChildSubtree](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLNode/member/ReplaceChildSubtree) | 从主树中删除指定节点（及其子树），并将它替换为相同位置中的其他子树。 |
| [SelectNodes](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLNode/member/SelectNodes) | 选择与 XPath 表达式匹配的节点的集合。此方法与 **[CustomXMLPart.SelectNodes](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLPart/member/SelectNodes)** 方法的不同之处在于，它将从作为上下文节点的“expression”节点开始计算 XPath 表达式。 |
| [SelectSingleNode](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLNode/member/SelectSingleNode) | 从与 XPath 表达式匹配的集合中选择一个节点。此方法与 **[CustomXMLPart.SelectSingleNode](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLPart/member/SelectSingleNode)** 方法的不同之处在于，它将从作为上下文节点的“expression”节点开始计算 XPath 表达式。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLNode/member/Application) | 获取一个代表 **CustomXMLNode** 的容器应用程序的 **Application** 对象。只读。 |
| [Attributes](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLNode/member/Attributes) | 获取一个代表当前节点中的当前元素的属性的 **CustomXMLNodes** 集合。只读。 |
| [BaseName](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLNode/member/BaseName) | 获取文档对象模型（DOM）中节点的不带命名空间前缀的基本名称（如果存在）。只读。 |
| [ChildNodes](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLNode/member/ChildNodes) | 获取一个包含当前节点中所有子元素的 **CustomXMLNodes** 集合。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLNode/member/Creator) | 获取一个 32 位整数，指示创建 **CustomXMLNode** 对象时所使用的应用程序。只读。 |
| [FirstChild](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLNode/member/FirstChild) | 获取与当前节点中第一个子元素对应的 **CustomXMLNode** 对象。如果该节点没有子元素（或者其类型不为 **[msoCustomXMLNodeElement](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoCustomXMLNodeType)** ），则返回 **null** 。只读。 |
| [LastChild](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLNode/member/LastChild) | 获取与当前节点中的最后一个子元素对应的 **CustomXMLNode** 对象。如果该节点没有子元素（或者其类型不为 **[msoCustomXMLNodeElement](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoCustomXMLNodeType)** ），则该属性将返回 **null** 。只读。 |
| [NamespaceURI](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLNode/member/NamespaceURI) | 获取 **CustomXMLNode** 对象的命名空间的唯一地址标识符。只读。 |
| [NextSibling](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLNode/member/NextSibling) | 获取当前节点的下一个同级节点（元素、注释或处理指令）。如果该节点是其所在级别的最后一个同级节点，则该属性将返回 **null** 。只读。 |
| [NodeType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLNode/member/NodeType) | 获取当前节点的类型。只读。 |
| [OwnerDocument](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLNode/member/OwnerDocument) | 获取代表与此节点关联的 ET 工作簿、WPP 演示文稿或 WPS 文档的对象。只读。 |
| [OwnerPart](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLNode/member/OwnerPart) | 获取代表与此节点关联的部件的对象。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLNode/member/Parent) | 获取 **CustomXMLNode** 对象的 **Parent** 对象。只读。 |
| [ParentNode](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLNode/member/ParentNode) | 获取当前节点的父元素节点。如果当前节点位于根级，则该属性将返回 **null** 。只读。 |
| [PreviousSibling](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLNode/member/PreviousSibling) | 获取当前节点的前一个同级节点（元素、注释或处理指令）。如果当前节点为其所在级别的第一个节点，则该属性将返回 **null** 。只读。 |
| [Text](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLNode/member/Text) | 获取或设置当前节点的文本。可读/写。 |
| [XPath](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLNode/member/XPath) | 获取一个 **String** 类型的值，其中包含当前节点的规范化 XPath。如果该节点已不在文档对象模型（DOM）中，则该属性将返回一条错误消息。只读。 |