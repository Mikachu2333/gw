# XMLNode.SelectNodes

返回一个 **[XMLNodes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLNodes/obj)** 集合，该集合代表与 XPath 参数匹配的所有子元素（它们的顺序与它们在指定的 XML 元素中出现的顺序相同）。



## 语法

express.**SelectNodes(XPath, PrefixMapping, FastSearchSkippingTextNodes)**

express   一个代表 **XMLNode** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| XPath | 必选 | string | 指定有效的 XPath 字符串。 |
| PrefixMapping | 可选 | string | 提供用于搜索的架构中的前缀。如果 XPath 参数使用名称来搜索元素，则可使用 PrefixMapping 参数。 |
| FastSearchSkippingTextNodes | 可选 | boolean | 如果该参数值为 **True** ，则搜索指定节点时跳过所有文本节点。如果该参数值为 **False** ，则搜索时包含文本节点。默认值为 **False** 。 |

## 返回值

XMLNodes

## 示例


```JavaScript
/*本示例显示活动文档中第一个XML元素的子元素与 XPath 参数匹配的数量。*/
function test() {
    let xmlNode = ActiveDocument.XMLNodes.Item(1)
    alert(xmlNode.SelectNodes("//Text").Count)
}
```


```JavaScript
/*本示例显示与 XPath 参数匹配的第一个文档上第一个XML元素的子元素中的文本 。*/
function test() {
    let xmlNodes = Documents.Item(1).XMLNodes.Item(1).SelectNodes("//Data", "xs", true)
    for (let i = 1; i <= xmlNodes.Count; i++) {
        alert(xmlNodes.Item(i).Text)
    }
}
```
