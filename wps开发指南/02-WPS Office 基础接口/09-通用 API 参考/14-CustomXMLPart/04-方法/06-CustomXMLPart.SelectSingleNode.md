# CustomXMLPart.SelectSingleNode

选择自定义 XML 部件内与 XPath 表达式匹配的单个节点。



## 语法

express.**SelectSingleNode(XPath)**

express   一个代表 **CustomXMLPart** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| XPath | 必选 | string | 包含一个 XPath 表达式。 |

## 返回值

CustomXMLNode

## 示例


```JavaScript
/*本示例运行于文字组件，向活动文档添加 CustomXMLPart 对象，然后显示该文档中最后一个 CustomXMLPart 对象中指定节点的文本。*/
function test() {
    // Add a custom xml part.
    let strXML = "<suppliers><supplier ID='1'>Contoso</supplier><supplier ID='2'>Wingtip Toys</supplier></suppliers>"
    ActiveDocument.CustomXMLParts.Add(strXML)

    // Return the first custom xml part with the given index.
    let customXMLPart = ActiveDocument.CustomXMLParts.Item(ActiveDocument.CustomXMLParts.Count)

    // Get a node using XPath.
    let customXMLNode = customXMLPart.SelectSingleNode("//supplier[@ID=1]")
    // Display the node text 'Contoso'.
    alert(customXMLNode.Text)
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
