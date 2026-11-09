# CustomXMLNode.InsertSubtreeBefore

将指定的子树插入到紧邻上下文节点之前的位置。



## 语法

express.**InsertSubtreeBefore(XML, NextSibling)**

express   一个代表 **CustomXMLNode** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| XML | 必选 | string | 代表要添加的子树。 |
| NextSibling | 可选 | CustomXMLNode | 指定上下文节点。 |

## 返回值

void

## 说明


如果 *NextSibling* 参数不是上下文节点的子节点，或者操作将导致树结构无效，则不执行插入操作，并显示一条错误消息。



## 示例


```JavaScript
/*本示例运行于文字组件，在活动文档上添加一个自定义 XML 部件，然后通过使用 XPath 表达式查找该部件中的一个节点，然后在找到的节点之前插入一个子树。*/
function test() {
    // Add a custom xml part.
    let strXML = "<root xmlns='http://example.com/namespace'><child1>Value1</child1><child2>Value2</child2></root>"
    let customXMLPart = ActiveDocument.CustomXMLParts.Add(strXML)
    // Get nodes using XPath.
    let customXMLNode1 = customXMLPart.SelectSingleNode("/ns0:root")
    let customXMLNode2 = customXMLPart.SelectSingleNode("/ns0:root/ns0:child2")
    // Insert a subtree before the single node selected previously.
    customXMLNode1.InsertSubtreeBefore("<books><book>example</book></books>", customXMLNode2)
}
```


```JavaScript
/*本示例运行于文字组件，在第一个文档上第四个 CustomXMLPart 对象的指定节点之前插入子树。*/
function test() {
    let customXMLPart = Documents.Item(1).CustomXMLParts.Item(4)
    let customXMLNode = customXMLPart.SelectSingleNode("/ns0:root/ns0:example1")
    customXMLNode.InsertSubtreeBefore("<childs></childs>")
}
```
