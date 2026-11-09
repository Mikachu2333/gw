# CustomXMLNode.NextSibling

获取当前节点的下一个同级节点（元素、注释或处理指令）。如果该节点是其所在级别的最后一个同级节点，则该属性将返回 **null** 。只读。



## 语法

express.**NextSibling**

express   一个代表 **CustomXMLNode** 对象的变量。

## 类型

CustomXMLNode

## 示例


```JavaScript
/*本示例运行于文字组件，显示活动文档上第四个 CustomXMLPart 对象中指定节点的下一个同级节点的类型是否为msoCustomXMLNodeText。*/
function test() {
    let customXMLPart = ActiveDocument.CustomXMLParts.Item(4)
    let customXMLNode = customXMLPart.SelectSingleNode("/ns0:root/ns0:example1/ns0:child1")
    alert(customXMLNode.NextSibling.NodeType == msoCustomXMLNodeText)
}
```


```JavaScript
/*本示例运行于文字组件，在光标处插入活动文档中的第一个内容控件映射到的自定义 XML 部件中包含的指定 XML 节点的下一个同级节点的命名空间的唯一地址标识符。*/
function test() {
    let contentControl = ActiveDocument.ContentControls.Item(1)
    let customXMLNode = contentControl.XMLMapping.CustomXMLPart.SelectSingleNode("/ns1:coreProperties[1]/ns0:title[1]")
    Selection.TypeText(customXMLNode.NextSibling.NamespaceURI)
}
```
