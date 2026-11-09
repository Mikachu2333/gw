# XMLNode.NodeType

返回一个 **[WdXMLNodeType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdXMLNodeType)** 常量，该常量代表节点的类型。



## 语法

express.**NodeType**

express   一个代表 **XMLNode** 对象的变量。

## 类型

WdXMLNodeType

## 说明


 **XMLNode** 对象可以是 XML 元素或元素的属性。请使用 **NodeType** 属性确定要使用的节点的类型，以便您不会试图对该节点执行无效操作。例如，虽然 **Attributes** 属性出现在 **XMLNode** 对象的可用属性列表中，但它仅适用于元素节点。



## 示例


```JavaScript
/*本示例设置活动文档上名为“Text”的XML元素中的文本。*/
function test() {
    for (let i = 1; i <= ActiveDocument.XMLNodes.Count; i++) {
        let xmlNode = ActiveDocument.XMLNodes.Item(i)
        if (xmlNode.NodeType == wdXMLNodeElement && xmlNode.BaseName == "Text") {
            xmlNode.Text = "David Barber"
        }
    }
}
```


```JavaScript
/*本示例显示第一个文档上第三个XML元素的类型是否为wdXMLNodeAttribute。*/
function test() {
    let xmlNode = Documents.Item(1).XMLNodes.Item(3)
    alert(xmlNode.NodeType == wdXMLNodeAttribute)
}
```
