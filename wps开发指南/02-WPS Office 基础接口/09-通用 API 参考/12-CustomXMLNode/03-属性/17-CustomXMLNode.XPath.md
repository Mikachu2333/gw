# CustomXMLNode.XPath

获取一个 **String** 类型的值，其中包含当前节点的规范化 XPath。如果该节点已不在文档对象模型（DOM）中，则该属性将返回一条错误消息。只读。



## 语法

express.**XPath**

express   一个代表 **CustomXMLNode** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例运行于文字组件，显示活动文档上第四个 CustomXMLPart 对象中指定节点的规范化 XPath。*/
function test() {
    let customXMLPart = ActiveDocument.CustomXMLParts.Item(4)
    let customXMLNode = customXMLPart.SelectSingleNode("/ns0:root/ns0:example1")
    alert(customXMLNode.XPath)
}
```


```JavaScript
/*本示例运行于文字组件，在光标处插入活动文档的第一个内容控件映射到的自定义 XML 部件包含的指定 XML 节点的第一个子节点的规范化 XPath。*/
function test() {
    let contentControl = ActiveDocument.ContentControls.Item(1)
    let customXMLNode = contentControl.XMLMapping.CustomXMLPart.SelectSingleNode("/ns1:coreProperties[1]")
    Selection.TypeText(customXMLNode.FirstChild.XPath)
}
```
