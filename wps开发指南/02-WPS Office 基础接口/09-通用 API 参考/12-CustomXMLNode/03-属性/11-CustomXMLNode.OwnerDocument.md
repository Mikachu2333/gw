# CustomXMLNode.OwnerDocument

获取代表与此节点关联的 ET 工作簿、WPP 演示文稿或 WPS 文档的对象。只读。



## 语法

express.**OwnerDocument**

express   一个代表 **CustomXMLNode** 对象的变量。

## 类型

Object

## 示例


```JavaScript
/*本示例运行于文字组件，显示活动文档上第四个 CustomXMLPart 对象中指定节点关联的 WPS 文档的名称。*/
function test() {
    let customXMLPart = ActiveDocument.CustomXMLParts.Item(4)
    let customXMLNode = customXMLPart.SelectSingleNode("/ns0:root/ns0:example1")
    alert(customXMLNode.OwnerDocument.Name)
}
```


```JavaScript
/*本示例运行于文字组件，在光标处插入活动文档中的第一个内容控件映射到的自定义 XML 部件中包含的指定 XML 节点关联的 WPS 文档的路径。*/
function test() {
    let contentControl = ActiveDocument.ContentControls.Item(1)
    let customXMLNode = contentControl.XMLMapping.CustomXMLPart.SelectSingleNode("/ns1:coreProperties[1]")
    Selection.TypeText(customXMLNode.OwnerDocument.Path)
}
```
