# CustomXMLNode.SelectNodes

选择与 XPath 表达式匹配的节点的集合。此方法与 **[CustomXMLPart.SelectNodes](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLPart/member/SelectNodes)** 方法的不同之处在于，它将从作为上下文节点的“expression”节点开始计算 XPath 表达式。



## 语法

express.**SelectNodes(XPath)**

express   一个代表 **CustomXMLNode** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| XPath | 必选 | string | 包含一个 XPath 表达式。 |

## 返回值

CustomXMLNodes

## 示例


```JavaScript
/*本示例运行于文字组件，向活动文档添加 CustomXMLPart 对象，然后显示该 CustomXMLPart 对象中指定节点与 XPath 表达式匹配的第一个节点不带命名空间前缀的基本名称。*/
function test() {
    // Add a custom xml part.
    let strXML = "<root xmlns='http://example.com/namespace'><child1>Value1</child1></root>"
    let customXMLPart = ActiveDocument.CustomXMLParts.Add(strXML)
    // Get all of the nodes matching an XPath expression.
    let customXMLNode = customXMLPart.SelectSingleNode("/ns0:root[1]")
    let customXMLNodes = customXMLNode.SelectNodes("/ns0:root[1]/ns0:child1[1]")
    alert(customXMLNodes.Item(1).BaseName)
}
```


```JavaScript
/*本示例运行于文字组件，显示活动文档中的第一个内容控件映射到的自定义 XML 部件中指定节点与 XPath 表达式匹配的第一个节点的文本。*/
function test() {
    let contentControl = ActiveDocument.ContentControls.Item(1)
    let customXMLNode = contentControl.XMLMapping.CustomXMLPart.SelectSingleNode("/ns1:coreProperties[1]")
    let customXMLNodes = customXMLNode.SelectNodes("/ns1:coreProperties[1]/ns0:title[1]")
    alert(customXMLNodes.Item(1).Text)
}
```
