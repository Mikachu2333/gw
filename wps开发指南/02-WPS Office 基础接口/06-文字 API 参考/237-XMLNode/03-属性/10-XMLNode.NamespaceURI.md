# XMLNode.NamespaceURI

返回一个 **String** 类型的值，该值代表指定对象的架构命名空间的统一资源标识符 (URI)。只读。



## 语法

express.**NamespaceURI**

express   一个代表 **XMLNode** 对象的变量。

## 类型

string

## 说明


如果创建的是用于 WPS 的 XML 架构，则强烈建议在架构中指定 targetNamespace 设置。



## 示例


```JavaScript
/*本示例显示活动文档上所有XML元素的命名空间的统一资源标识符。*/
function test() {
    for (let i = 1; i <= ActiveDocument.XMLNodes.Count; i++) {
        alert(ActiveDocument.XMLNodes.Item(i).NamespaceURI)
    }
}
```


```JavaScript
/*本示例判断如果第一个文档上第二个XML元素的名称为“Title”，则显示该XML元素命名空间的统一资源标识符。*/
function test() {
    let xmlNode = Documents.Item(1).XMLNodes.Item(2)
    if (xmlNode.BaseName == "Title") {
        alert(xmlNode.NamespaceURI)
    }
}
```
