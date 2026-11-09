# CustomXMLNode.NodeType

获取当前节点的类型。只读。



## 语法

express.**NodeType**

express   一个代表 **CustomXMLNode** 对象的变量。

## 类型

MsoCustomXMLNodeType

## 示例


```JavaScript
/*本示例运行于文字组件，显示活动文档上第四个 CustomXMLPart 对象中指定节点的第一个子节点的类型是否为msoCustomXMLNodeText。*/
function test() {
    let customXMLPart = ActiveDocument.CustomXMLParts.Item(4)
    let customXMLNode = customXMLPart.SelectSingleNode("/ns0:root/ns0:example1")
    alert(customXMLNode.FirstChild.NodeType == msoCustomXMLNodeText)
}
```


```JavaScript
/*本示例运行于文字组件，判断如果活动文档中的第一个内容控件映射到的自定义 XML 部件中包含的指定 XML 节点的类型为msoCustomXMLNodeElement，则显示该 XML 节点的文本。*/
function test() {
    let contentControl = ActiveDocument.ContentControls.Item(1)
    let customXMLNode = contentControl.XMLMapping.CustomXMLPart.SelectSingleNode("/ns1:coreProperties[1]")
    if (customXMLNode.NodeType == msoCustomXMLNodeElement) {
        alert(customXMLNode.Text)
    }
}
```
