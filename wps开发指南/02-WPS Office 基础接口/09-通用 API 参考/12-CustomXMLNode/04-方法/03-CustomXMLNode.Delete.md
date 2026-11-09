# CustomXMLNode.Delete

从树中删除当前节点（包括其所有子项，如果有）。



## 语法

express.**Delete()**

express   一个代表 **CustomXMLNode** 对象的变量。

## 返回值

void

## 说明


如果操作将导致树结构无效，则不会执行删除操作并显示一条错误消息。



## 示例


```JavaScript
/*本示例运行于文字组件，使用各种方法在活动文档上添加自定义 XML 部件、使用不同的标准选择部件和节点、附加子树，以及删除部件和节点。*/
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
        customXMLNode.AppendChildSubtree("<rebates><rebate>0.10</rebate></rebates>")

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
/*本示例运行于文字组件，删除活动文档上第四个 CustomXMLPart 对象中指定的节点。*/
function test() {
    let customXMLPart = ActiveDocument.CustomXMLParts.Item(4)
    let customXMLNode = customXMLPart.SelectSingleNode("/ns0:root/ns0:example1")
    customXMLNode.Delete()
}
```
