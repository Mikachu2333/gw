# CustomXMLNode.InsertNodeBefore

在树中的上下文节点前面插入新节点。



## 语法

express.**InsertNodeBefore(Name, NamespaceURI, NodeType, NodeValue, NextSibling)**

express   一个代表 **CustomXMLNode** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Name | 可选 | string | 代表要添加的节点的基本名称。 |
| NamespaceURI | 可选 | string | 代表要添加的元素的命名空间。如果要添加 **msoCustomXMLNodeElement** 或 **msoCustomXMLNodeAttribute** 类型的节点，则此参数是必需的，否则它将被忽略。 |
| NodeType | 可选 | MsoCustomXMLNodeType | 指定要添加的节点的类型。如果未指定参数，则假定它是 **msoCustomXMLNodeElement** 类型的节点。 |
| NodeValue | 可选 | string | 用于为允许文本的那些节点设置要添加节点的值。如果节点不允许文本，则忽略该参数。 |
| NextSibling | 可选 | CustomXMLNode | 代表上下文节点。 |

## 返回值

void

## 说明


如果在添加 **msoCustomXMLNodeElement** 、 **msoCustomXMLNodeComment** 或 **msoCustomXMLNodeProcessingInstruction** 类型的节点时上下文节点不存在，则将新节点添加到上下文节点的最后一个子节点。如果操作将导致树结构无效，则不执行插入操作，并显示一条错误消息。



## 示例


```JavaScript
/*本示例运行于文字组件，在活动文档上添加一个自定义 XML 部件，然后通过使用 XPath 表达式查找该部件中的一个节点，然后在找到的节点之前插入一个节点。*/
function test() {
    // Add a custom xml part.
    let strXML = "<root xmlns='http://example.com/namespace'><child1>Value1</child1></root>"
    let customXMLPart = ActiveDocument.CustomXMLParts.Add(strXML)
    // Get node using XPath.
    let customXMLNode = customXMLPart.SelectSingleNode("/ns0:root/ns0:child1")
    // Insert a node before the single node selected previously.
    customXMLNode.InsertNodeBefore("discount", customXMLNode.NamespaceURI)
}
```


```JavaScript
/*本示例运行于文字组件，在第一个文档上第四个 CustomXMLPart 对象中指定节点之前插入新节点。*/
function test() {
    let customXMLPart = Documents.Item(1).CustomXMLParts.Item(4)
    let customXMLNode1 = customXMLPart.SelectSingleNode("/ns0:root/ns0:example2")
    let customXMLNode2 = customXMLPart.SelectSingleNode("/ns0:root/ns0:example2/ns0:child1")
    customXMLNode1.InsertNodeBefore("example", customXMLNode1.NamespaceURI, msoCustomXMLNodeAttribute, null, customXMLNode2)
}
```
