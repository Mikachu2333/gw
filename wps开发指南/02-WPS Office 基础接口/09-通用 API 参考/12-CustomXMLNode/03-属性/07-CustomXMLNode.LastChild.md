# CustomXMLNode.LastChild

获取与当前节点中的最后一个子元素对应的 **CustomXMLNode** 对象。如果该节点没有子元素（或者其类型不为 **[msoCustomXMLNodeElement](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoCustomXMLNodeType)** ），则该属性将返回 **null** 。只读。



## 语法

express.**LastChild**

express   一个代表 **CustomXMLNode** 对象的变量。

## 类型

CustomXMLNode

## 示例


```JavaScript
/*本示例运行于文字组件，显示活动文档上第四个 CustomXMLPart 对象中指定节点的最后一个子节点的 XPath。*/
function test() {
    let customXMLPart = ActiveDocument.CustomXMLParts.Item(4)
    let customXMLNode = customXMLPart.SelectSingleNode("/ns0:root/ns0:example1")
    alert(customXMLNode.LastChild.XPath)
}
```


```JavaScript
/*本示例运行于文字组件，显示活动文档中的第一个内容控件映射到的自定义 XML 部件中包含的指定 XML 节点的最后一个子节点不带命名空间前缀的基本名称。*/
function test() {
    let contentControl = ActiveDocument.ContentControls.Item(1)
    let customXMLNode = contentControl.XMLMapping.CustomXMLPart.SelectSingleNode("/ns1:coreProperties[1]")
    alert(customXMLNode.LastChild.BaseName)
}
```
