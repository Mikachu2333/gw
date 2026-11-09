# CustomXMLNode.RemoveChild

从树中删除指定的子节点。



## 语法

express.**RemoveChild(Child)**

express   一个代表 **CustomXMLNode** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Child | 必选 | CustomXMLNode | 代表上下文节点的子节点。 |

## 返回值

void

## 说明


如果在 *Child* 参数中指定的节点不是上下文节点的子节点，或者操作将导致树无效，则不执行删除操作，并显示一条错误消息



## 示例


```JavaScript
/*本示例运行于文字组件，删除活动文档上第四个 CustomXMLPart 对象中指定节点的一个子节点。*/
function test() {
    let customXMLPart = ActiveDocument.CustomXMLParts.Item(4)
    // Get node using XPath expression.
    let customXMLNode1 = customXMLPart.SelectSingleNode("/ns0:root/ns0:example1")
    let customXMLNode2 = customXMLPart.SelectSingleNode("/ns0:root/ns0:example1/ns0:child2")
    // Remove a child node.
    customXMLNode1.RemoveChild(customXMLNode2)
}
```


```JavaScript
/*本示例运行于文字组件，删除活动文档上第四个 CustomXMLPart 对象中指定节点的第二个子节点。*/
function test() {
    let customXMLPart = ActiveDocument.CustomXMLParts.Item(4)
    let customXMLNode = customXMLPart.SelectSingleNode("/ns0:root/ns0:example1")
    customXMLNode.RemoveChild(customXMLNode.ChildNodes.Item(2))
}
```
