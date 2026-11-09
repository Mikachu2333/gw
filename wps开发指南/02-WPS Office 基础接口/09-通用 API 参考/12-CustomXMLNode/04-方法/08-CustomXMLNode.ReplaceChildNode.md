# CustomXMLNode.ReplaceChildNode

从主树中删除指定的子节点（及其子树），并将它替换为相同位置中的其他节点。



## 语法

express.**ReplaceChildNode(OldNode, Name, NamespaceURI, NodeType, NodeValue)**

express   一个代表 **CustomXMLNode** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| OldNode | 必选 | CustomXMLNode | 代表要替换的子节点。 |
| Name | 可选 | string | 代表要添加的元素的基本名称。 |
| NamespaceURI | 可选 | string | 代表要添加的元素的命名空间。如果要添加 **msoCustomXMLNodeElement** 或 **msoCustomXMLNodeAttribute** 类型的节点，则此参数是必需的，否则它将被忽略。 |
| NodeType | 可选 | MsoCustomXMLNodeType | 指定要添加的节点的类型。如果未指定参数，则假定节点类型为 **msoCustomXMLNodeElement** 。 |
| NodeValue | 可选 | string | 用于为允许文本的那些节点设置要添加的节点值。如果节点不允许文本，则忽略该参数。 |

## 返回值

void

## 说明


如果 *OldNode* 参数不是上下文节点的子节点，或者操作将导致树结构无效，则不执行替换操作，并显示一条错误消息。此外，如果要添加的节点已存在，则不执行替换操作，并显示一条错误消息。



## 示例


```JavaScript
/*本示例运行于文字组件，删除活动文档上第四个 CustomXMLPart 对象中指定节点的一个子节点，并将其替换为同一位置中的其他节点。*/
function test() {
    let customXMLPart = ActiveDocument.CustomXMLParts.Item(4)
    let customXMLNode1 = customXMLPart.SelectSingleNode("/ns0:root/ns0:example1")
    let customXMLNode2 = customXMLPart.SelectSingleNode("/ns0:root/ns0:example1/ns0:child2")
    // Replace a child node.
    customXMLNode1.ReplaceChildNode(customXMLNode2, "example")
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
