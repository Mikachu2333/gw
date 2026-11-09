# CustomXMLNode.ReplaceChildSubtree

从主树中删除指定节点（及其子树），并将它替换为相同位置中的其他子树。



## 语法

express.**ReplaceChildSubtree(XML, OldNode)**

express   一个代表 **CustomXMLNode** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| XML | 必选 | string | 代表要添加的子树。 |
| OldNode | 必选 | CustomXMLNode | 代表要替换的子节点。 |

## 返回值

void

## 说明


如果操作将导致树结构无效，则不执行替换操作，并显示一条错误消息。



## 示例


```JavaScript
/*本示例运行于文字组件，删除活动文档上第四个 CustomXMLPart 对象中指定节点的一个子树，并将其替换为同一位置中的其他子树。*/
function test() {
    let customXMLPart = ActiveDocument.CustomXMLParts.Item(4)
    // Get node using XPath expression.
    let customXMLNode = customXMLPart.SelectSingleNode("/ns0:root")
    // Replace one subtree and its children with another.
    customXMLNode.ReplaceChildSubtree("<rebates><rebate>0.10</rebate></rebates>", customXMLPart.SelectSingleNode("/ns0:root/ns0:example1"))
}
```


```JavaScript
/*本示例运行于文字组件，删除活动文档上第四个 CustomXMLPart 对象中指定节点的第二个子节点，并将其替换为同一位置中的其他子树。*/
function test() {
    let customXMLPart = ActiveDocument.CustomXMLParts.Item(4)
    let customXMLNode = customXMLPart.SelectSingleNode("/ns0:root/ns0:example1")
    customXMLNode.ReplaceChildSubtree("<books><book>example</book></books>", customXMLNode.ChildNodes.Item(2))
}
```
