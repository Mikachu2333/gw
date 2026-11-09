# CustomXMLNode.FirstChild

获取与当前节点中第一个子元素对应的 **CustomXMLNode** 对象。如果该节点没有子元素（或者其类型不为 **[msoCustomXMLNodeElement](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoCustomXMLNodeType)** ），则返回 **null** 。只读。



## 语法

express.**FirstChild**

express   一个代表 **CustomXMLNode** 对象的变量。

## 类型

CustomXMLNode

## 示例


```JavaScript
/*本示例运行于文字组件，显示活动文档上第四个 CustomXMLPart 对象中指定节点的第一个子节点的 XPath。*/
function test() {
    let customXMLPart = ActiveDocument.CustomXMLParts.Item(4)
    let customXMLNode = customXMLPart.SelectSingleNode("/ns0:root/ns0:example1")
    alert(customXMLNode.FirstChild.XPath)
}
```


```JavaScript
/*本示例运行于文字组件，设置第一个文档上第四个 CustomXMLPart 对象中指定节点的第一个子节点的文本。*/
function test() {
    let customXMLPart = Documents.Item(1).CustomXMLParts.Item(4)
    let customXMLNode = customXMLPart.SelectSingleNode("/ns0:root/ns0:example2")
    customXMLNode.FirstChild.Text = "example"
}
```
