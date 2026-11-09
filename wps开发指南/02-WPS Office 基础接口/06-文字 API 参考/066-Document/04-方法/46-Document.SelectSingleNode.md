# Document.SelectSingleNode

返回一个 **XMLNode** 对象，该对象代表画布与指定文档中 *XPath* 参数相匹配的第一个节点。



## 语法

express.**SelectSingleNode(XPath, PrefixMapping, FastSearchSkippingTextNodes)**

express   一个代表 **Document** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| XPath | 必选 | string | 有效的 XPath 字符串。 |
| PrefixMapping | 可选 | string | 提供用于搜索的架构中的前缀。如果 XPath 参数使用名称来搜索元素，则可使用 PrefixMapping 参数。 |
| FastSearchSkippingTextNodes | 可选 | boolean | 如果该参数值为 **True** ，则搜索指定节点时跳过所有文本节点。如果该参数值为 **False** ，则搜索时包含文本节点。默认值为 **True** 。 |

## 返回值

XMLNode

## 说明


将 *FastSearchSkippingTextNodes* 参数设置为 **False** 会降低性能，因为 WPS 将根据节点中包含的文本对文档中所有节点进行搜索。



## 示例


```JavaScript
/*本示例显示在活动文档中找到的第一个 Data 元素的内容文本，该元素是 Paragraph 元素的子元素。*/
function test() {
    let path = "//Paragraph/Data"
    let prefixMapping = "xmlns:x=" + ActiveDocument.XMLSchemaReferences(1).NamespaceURI
    let xmlNode = ActiveDocument.SelectSingleNode(path, prefixMapping)
    alert(xmlNode.Text)
}
```


```JavaScript
/*本示例显示在第一个文档中找到的第一个 Paragraphs 元素的子元素的数量。*/
function test() {
    let path = "//Paragraphs"
    let prefixMapping = "xmlns:x=" + Documents.Item(1).XMLSchemaReferences(1).NamespaceURI
    let xmlNode = Documents.Item(1).SelectSingleNode(path, prefixMapping)
    alert(xmlNode.ChildNodes.Count)
}
```
