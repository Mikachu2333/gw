# CustomXMLNode.SelectSingleNode

从与 XPath 表达式匹配的集合中选择一个节点。此方法与 **[CustomXMLPart.SelectSingleNode](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLPart/member/SelectSingleNode)** 方法的不同之处在于，它将从作为上下文节点的“expression”节点开始计算 XPath 表达式。



## 语法

express.**SelectSingleNode(XPath)**

express   一个代表 **CustomXMLNode** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| XPath | 必选 | string | 包含一个 XPath 表达式。 |

## 返回值

CustomXMLNode

## 说明


XPath 表达式的前缀映射是从 **[NamespaceManager](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLPart/member/NamespaceManager)** 属性检索的。



## 示例


```JavaScript
/*本示例运行于文字组件，向活动文档添加 CustomXMLPart 对象，然后显示该 CustomXMLPart 对象中指定节点与 XPath 表达式匹配的一个节点的文本。*/
function test() {
    // Add a custom xml part.
    let strXML = "<root xmlns='http://example.com/namespace'><child1>Value1</child1></root>"
    let customXMLPart = ActiveDocument.CustomXMLParts.Add(strXML)
    // Get a node using XPath.
    let customXMLNode = customXMLPart.SelectSingleNode("/ns0:root[1]")
    alert(customXMLNode.SelectSingleNode("/ns0:root[1]/ns0:child1[1]").Text)
}
```


```JavaScript
/*本示例运行于文字组件，显示活动文档的第一个内容控件映射到的自定义 XML 部件包含的指定 XML 节点中与 XPath 表达式匹配的一个节点的类型是否为msoCustomXMLNodeElement。*/
function test() {
    let contentControl = ActiveDocument.ContentControls.Item(1)
    let customXMLNode = contentControl.XMLMapping.CustomXMLPart.SelectSingleNode("/ns1:coreProperties[1]")
    alert(customXMLNode.SelectSingleNode("/ns1:coreProperties[1]/ns0:title[1]").NodeType == msoCustomXMLNodeElement)
}
```
