# CustomXMLNode.HasChildNodes

如果当前元素节点包含子元素节点，则获取 **True** 。



## 语法

express.**HasChildNodes()**

express   一个代表 **CustomXMLNode** 对象的变量。

## 返回值

Boolean

## 说明


当 **CustomXMLNode** 的节点类型不是 **[msoCustomXMLNodeElement](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoCustomXMLNodeType)** 时，此方法将始终返回 **False** 。



## 示例


```JavaScript
/*本示例运行于文字组件，使用各种方法在活动文档上添加自定义 XML 部件、使用不同的标准选择部件和节点、追加子树、测试子树是否已成功添加以及删除部件和节点。*/
function test() {
    try {
        // Example written for WPS.
        // Adding a custom XML part.
        let strXML1 = "<root xmlns='http://example.com/namespace'><child1>Value1</child1></root>"
        let strXML2 = "<root xmlns='http://example.com/namespace'><child2>Value2</child2></root>"
        let customXMLPart1 = ActiveDocument.CustomXMLParts.Add(strXML1)
        // Add and then load from a string.
        let customXMLPart2 = ActiveDocument.CustomXMLParts.Add()
        customXMLPart2.LoadXML(strXML2)
        // Access all with a given root namespace; returns the entire collection.
        let customXMLParts = ActiveDocument.CustomXMLParts.SelectByNamespace("http://example.com/namespace")
        // DOM-type operations.
        // Get the XML.
        let strXml3 = customXMLPart1.XML
        // Get the root namespace
        let strUri3 = customXMLPart1.NamespaceURI
        // Get nodes using XPath.
        let customXMLNode = customXMLPart1.SelectSingleNode("/ns0:root/ns0:child1")
        let customXMLNodes = customXMLPart1.SelectNodes("/ns0:root[1]/ns0:child1[1]")
        // Append a child subtree to the single node selected previously.
        customXMLNode.AppendChildSubtree("<discounts><discount>0.10</discount></discounts>")

        // Tell user that the child subtree was added.
        if (customXMLNode.HasChildNodes()) {
            alert("The 'Discounts' nodes were added.")
        } else {
            alert("The 'Discounts' nodes were not added.")
        }
        // Delete custom XML node and part and its children.
        customXMLNode.Delete()
        customXMLPart1.Delete()
    }
    // Exception handling. Show the message.
    catch (err) {
        alert(err.toString())
    }
}
```


```JavaScript
/*本示例运行于文字组件，显示活动文档中的第一个内容控件映射到的自定义 XML 部件中包含的指定 XML 节点是否包含子元素节点。*/
function test() {
    let contentControl = ActiveDocument.ContentControls.Item(1)
    let customXMLNode = contentControl.XMLMapping.CustomXMLPart.SelectSingleNode("/ns1:coreProperties[1]/ns0:title[1]")
    alert(customXMLNode.HasChildNodes())
}
```
