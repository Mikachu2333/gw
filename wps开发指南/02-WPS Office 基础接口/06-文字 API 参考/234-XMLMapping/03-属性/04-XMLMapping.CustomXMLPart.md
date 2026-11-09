# XMLMapping.CustomXMLPart

返回 **CustomXMLPart** 对象，该对象表示文档中的内容控件映射到的自定义 XML 部件。



## 语法

express.**CustomXMLPart**

express   一个代表 **XMLMapping** 对象的变量。

## 类型

CustomXMLPart

## 示例


```JavaScript
/*本示例设置活动文档中的第一个内容控件映射到的自定义 XML 部件中包含的某个 XML 节点的文本。*/
function test() {
    // 此示例假定活动文档中至少有一个内容控件映射到包含 XPath 字符串指定的 XML 节点的自定义 XML 部件。
    let contentControl = Application.ActiveDocument.ContentControls.Item(1)
    let customXMLNode = contentControl.XMLMapping.CustomXMLPart.SelectSingleNode("/ns1:coreProperties[1]/ns0:title[1]")
    customXMLNode.Text = "Mystery of the Empty Chair"
}
```


```JavaScript
/*本示例显示第一个文档上第一个内容控件的XML映射中XML部件的命名空间的唯一地址标识符。*/
function test() {
    let xmlMapping = Documents.Item(1).ContentControls.Item(1).XMLMapping
    alert(xmlMapping.CustomXMLPart.NamespaceURI)
}
```
