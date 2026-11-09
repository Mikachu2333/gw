# CustomXMLNode.AppendChildSubtree

将子树作为树中上下文元素节点下的最后一个子节点添加。



## 语法

express.**AppendChildSubtree(XML)**

express   一个代表 **CustomXMLNode** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| XML | 必选 | string | 代表要添加的子树。 |

## 返回值

void

## 说明


如果上下文节点是除 **[msoCustomXMLNodeElement](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoCustomXMLNodeType)** 之外的任何类型，则不执行追加操作，并显示一条错误消息。如果根据架构验证 **CustomXMLNode** ，但该操作将导致树结构无效，则不执行追加操作，并显示一条错误消息。



## 示例


```JavaScript
/*本示例运行于文字组件，向活动文档添加 CustomXMLPart 对象，并将指定节点添加到 CustomXMLPart 对象中，并为该节点附加子树（作为树中上下文元素节点下的最后一个子节点）。*/
function test() {
    // Add and populate a custom xml part.
    let strXML = "<root xmlns='http://example.com/namespace'><child1>Value1</child1></root>"
    let customXMLPart = ActiveDocument.CustomXMLParts.Add(strXML)
    // Get nodes using XPath.
    let customXMLNode = customXMLPart.SelectSingleNode("/ns0:root")
    // Append a child subtree to the single node selected previously.
    customXMLNode.AppendChildSubtree("<discounts><discount>0.10</discount></discounts>")
}
```


```JavaScript
/*本示例运行于文字组件，为活动文档上第四个 CustomXMLPart 对象的指定节点附加子树（作为树中上下文元素节点下的最后一个子节点）。*/
function test() {
    let customXMLPart = ActiveDocument.CustomXMLParts.Item(4)
    let customXMLNode = customXMLPart.SelectSingleNode("/ns0:root/ns0:child1")
    customXMLNode.AppendChildSubtree("<books><book>example</book></books>")
}
```
