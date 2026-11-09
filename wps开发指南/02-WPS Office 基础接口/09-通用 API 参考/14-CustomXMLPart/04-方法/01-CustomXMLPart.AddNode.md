# CustomXMLPart.AddNode

将节点添加到 XML 树。



## 语法

express.**AddNode(Parent, Name, NamespaceURI, NextSibling, NodeType, NodeValue)**

express   一个代表 **CustomXMLPart** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Parent | 必选 | CustomXMLNode | 代表应该在其下添加此节点的节点。如果添加属性，则该参数指示应该向其添加属性的元素。 |
| Name | 可选 | string | 代表要添加的节点的基本名称。 |
| NamespaceURI | 可选 | string | 代表要追加的元素的命名空间。如果要追加 **msoCustomXMLNodeElement** 或 **msoCustomXMLNodeAttribute** 类型的节点，则此参数是必需的，否则它将被忽略。 |
| NextSibling | 可选 | CustomXMLNode | 代表应该成为新节点的下一个同级项的节点。如果未指定此参数，则将该节点添加到父节点的子节点的末尾。如果添加 **msoXMLNodeAttribute** 类型的节点，则忽略此参数。如果该节点不是父节点的子节点，则显示一个错误。 |
| NodeType | 可选 | MsoCustomXMLNodeType | 指定要追加的节点的类型。如果未指定该参数，则假定节点类型为 **msoCustomXMLNodeElement** 。 |
| NodeValue | 可选 | string | 用于为允许文本的那些节点设置所追加节点的值。如果节点不允许文本，则忽略该参数。 |

## 返回值

void

## 说明


如果 **AddNode** 操作将导致树结构无效，则不执行追加操作，并显示一条错误消息。



## 示例


```JavaScript
/*本示例运行于文字组件，向活动文档添加 CustomXMLPart 对象，并为该 CustomXMLPart 对象添加节点。*/
function test() {
    // Add and populate a custom xml part
    let strXML = "<root xmlns='http://example.com/namespace'><child1>Value1</child1></root>"
    let customXMLPart = ActiveDocument.CustomXMLParts.Add(strXML)
    // Set the parent node
    let customXMLNode = customXMLPart.SelectSingleNode("/ns0:root")
    // Add a node under the parent node
    customXMLPart.AddNode(customXMLNode, "upccode", customXMLPart.NamespaceURI)
}
```


```JavaScript
/*本示例运行于文字组件，为活动文档上第四个 CustomXMLPart 对象添加节点。*/
function test() {
    let customXMLPart = ActiveDocument.CustomXMLParts.Item(4)
    let customXMLNode1 = customXMLPart.SelectSingleNode("/ns0:root[1]")
    let customXMLNode2 = customXMLPart.SelectSingleNode("/ns0:root[1]/ns0:example1[1]")
    customXMLPart.AddNode(customXMLNode1, "example", customXMLPart.NamespaceURI, customXMLNode2, msoCustomXMLNodeAttribute)
}
```
