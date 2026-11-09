# CustomXMLNode.Attributes

获取一个代表当前节点中的当前元素的属性的 **CustomXMLNodes** 集合。只读。



## 语法

express.**Attributes**

express   一个代表 **CustomXMLNode** 对象的变量。

## 类型

CustomXMLNodes

## 示例


```JavaScript
/*本示例运行于文字组件，向活动文档添加 CustomXMLPart 对象，并为该 CustomXMLPart 对象添加属性，然后显示指定节点的第一个属性的不带命名空间前缀的基本名称。*/
function test() {
    let strXML = "<root xmlns='http://example.com/namespace'><child1>Value1</child1></root>"
    let customXMLPart = ActiveDocument.CustomXMLParts.Add(strXML)
    let customXMLNode = customXMLPart.SelectSingleNode("/ns0:root")
    customXMLPart.AddNode(customXMLNode, "upccode", customXMLPart.NamespaceURI, null, msoCustomXMLNodeAttribute)
    alert(customXMLNode.Attributes.Item(1).BaseName)
}
```


```JavaScript
/*本示例运行于文字组件，显示活动文档的第四个 CustomXMLPart 对象中指定节点的第一个属性的命名空间的唯一地址标识符。*/
function test() {
    let customXMLPart = ActiveDocument.CustomXMLParts.Item(4)
    let customXMLNode = customXMLPart.SelectSingleNode("/ns0:root")
    alert(customXMLNode.Attributes.Item(1).NamespaceURI)
}
```
