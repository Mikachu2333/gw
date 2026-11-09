# CustomXMLNode.AppendChildNode

将单个节点作为树中上下文元素节点下的最后一个子节点追加。



## 语法

express.**AppendChildNode(Name, NamespaceURI, NodeType, NodeValue)**

express   一个代表 **CustomXMLNode** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Name | 可选 | string | 代表要追加的元素的基本名称。 |
| NamespaceURI | 可选 | string | 代表要追加的元素的命名空间。如果要追加 **msoCustomXMLNodeElement** 或 **msoCustomXMLNodeAttribute** 类型的节点，则此参数是必需的，否则它将被忽略。 |
| NodeType | 可选 | MsoCustomXMLNodeType | 指定要追加的节点的类型。如果未指定该参数，则假定节点类型为 **msoCustomXMLNodeElement** 。 |
| NodeValue | 可选 | string | 用于为允许文本的那些节点设置所追加节点的值。如果节点不允许文本，则忽略该参数。 |

## 返回值

void

## 说明


如果上下文节点是除 **msoCustomXMLNodeElement** 之外的任何类型，或者如果操作将导致树结构无效，则不执行追加操作，并显示一条错误消息。



## 示例


```JavaScript
/*本示例运行于文字组件，向活动文档添加 CustomXMLPart 对象，并将指定节点添加到 CustomXMLPart 对象中，并将一个子节点作为最后一个子节点附加到该节点中。*/
function test() {
    // Add and populate a custom xml part.
    let strXML = "<root xmlns='http://example.com/namespace'><child1>Value1</child1></root>"
    let customXMLPart = ActiveDocument.CustomXMLParts.Add(strXML)
    let customXMLNode1 = customXMLPart.SelectSingleNode("/ns0:root")
    let namespaceURI = "http://example.com/namespace"

    // Add a node.
    customXMLPart.AddNode(customXMLNode1, "upccode", namespaceURI)
    let customXMLNode2 = customXMLPart.SelectSingleNode("/ns0:root/ns0:upccode")
    // Append a child node to the single node selected previously.
    customXMLNode2.AppendChildNode("discount", null, msoCustomXMLNodeText, "0.10")
}
```


```JavaScript
/*本示例运行于文字组件，将一个子节点作为最后一个子节点附加到活动文档上第四个 CustomXMLPart 对象的指定节点中。*/
function test() {
    let customXMLPart = ActiveDocument.CustomXMLParts.Item(4)
    let customXMLNode = customXMLPart.SelectSingleNode("/ns0:root/ns0:child1")
    let namespaceURI = customXMLPart.NamespaceURI
    customXMLNode.AppendChildNode("child3", namespaceURI, msoCustomXMLNodeElement, "Value3")
}
```
