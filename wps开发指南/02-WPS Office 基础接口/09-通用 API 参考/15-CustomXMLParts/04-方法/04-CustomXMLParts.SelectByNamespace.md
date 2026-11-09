# CustomXMLParts.SelectByNamespace

选择其命名空间与搜索条件匹配的自定义 XML 部件的集合。



## 语法

express.**SelectByNamespace(NamespaceURI)**

express   一个代表 **CustomXMLParts** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| NamespaceURI | 必选 | string | 包含命名空间 URI。 |

## 返回值

CustomXMLParts

## 说明


如果具有此命名空间的自定义 XML 部件不存在，则该方法将返回空的 **CustomXMLParts** 集合对象。



## 示例


```JavaScript
/*本示例运行于文字组件，选择与活动文档中指定命名空间匹配的所有 CustomXMLPart 对象，然后选择与第一个 CustomXMLPart 对象中指定 XPath 表达式匹配的一个节点。*/
function test() {
    // Returns all of the custom xml parts with the given namespace.
    let strURI = "http://schemas.openxmlformats.org/package/2006/metadata/core-properties"
    let customXMLParts = ActiveDocument.CustomXMLParts.SelectByNamespace(strURI)

    // Get the node matching the XPath expression.
    let customXMLNode = customXMLParts.Item(1).SelectSingleNode("/ns1:coreProperties[1]/ns0:title")
}
```


```JavaScript
/*本示例运行于文字组件，显示活动文档中与指定命名空间匹配的第一个 CustomXMLPart 对象的 GUID。*/
function test() {
    let customXMLParts = ActiveDocument.CustomXMLParts.SelectByNamespace("http://example.com/namespace")
    alert(customXMLParts.Item(1).Id)
}
```
