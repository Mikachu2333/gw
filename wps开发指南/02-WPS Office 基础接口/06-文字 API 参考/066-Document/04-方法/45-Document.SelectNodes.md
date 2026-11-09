# Document.SelectNodes

返回一个 **XMLNodes** 集合，代表所有与 *XPath* 参数相匹配的节点并按其在文档或区域中显示的顺序排列。



## 语法

express.**SelectNodes(XPath, PrefixMapping, FastSearchSkippingTextNodes)**

express   一个代表 **Document** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| XPath | 必选 | string | 有效的 XPath 字符串。 |
| PrefixMapping | 可选 | string | 提供用于搜索的架构中的前缀。如果 XPath 参数使用名称来搜索元素，则可使用 PrefixMapping 参数。 |
| FastSearchSkippingTextNodes | 可选 | boolean | 如果该参数值为 **True** ，则搜索指定节点时跳过所有文本节点。如果该参数值为 **False** ，则搜索时包含文本节点。默认值为 **True** 。 |

## 返回值

XMLNodes

## 说明


将 *FastSearchSkippingTextNodes* 参数设置为 **False** 会降低性能，因为 WPS 将根据节点中包含的文本对文档中所有节点进行搜索。



## 示例


```JavaScript
/*本示例显示活动文档中 Data 元素的数量。*/
function test() {
    let path = "//Data"
    let prefixMapping = "xmlns:x=" + ActiveDocument.XMLSchemaReferences(1).NamespaceURI
    let xmlNodes = ActiveDocument.SelectNodes(path, prefixMapping)
    alert(xmlNodes.Count)
}
```


```JavaScript
/*本示例显示第一个文档 Paragraphs 元素中第一个节点的文本。*/
function test() {
    let prefixMapping = "xmlns:x=" + Documents.Item(1).XMLSchemaReferences.Item(1).NamespaceURI
    let xmlNodes = Documents.Item(1).SelectNodes("//Paragraphs", prefixMapping, true)
    alert(xmlNodes.Item(1).Text)
}
```
