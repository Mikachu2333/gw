# CustomXMLParts.SelectByID

选择与 GUID 匹配的自定义 XML 部件。



## 语法

express.**SelectByID(Id)**

express   一个代表 **CustomXMLParts** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Id | 必选 | string | 包含自定义 XML 部件的 GUID。 |

## 返回值

CustomXMLPart

## 说明


如果具有此 ID 的自定义 XML 部件不存在，则该方法返回 **null** 。



## 示例


```JavaScript
/*本示例运行于文字组件，在活动文档中选择与指定 GUID 匹配的 CustomXMLPart 对象，然后在该 CustomXMLPart 对象中搜索与 XPath 表达式匹配的节点。*/
function test() {
    // Returns a custom xml part by its ID.Get the node matching the XPath expression.
    let customXMLPart = ActiveDocument.CustomXMLParts.SelectByID("{d1ca108f-220d-4230-939a-0a1ae752bf0b}")

    // Get the node matching the XPath expression.
    let customXMLNode = customXMLPart.SelectSingleNode("/ns0:root/ns0:example1")
}
```


```JavaScript
/*本示例运行于文字组件，在活动文档中选择与指定 GUID 匹配的 CustomXMLPart 对象，然后显示该 CustomXMLPart 对象的 XML 字符串。*/
function test() {
    let customXMLPart = ActiveDocument.CustomXMLParts.SelectByID("{6C3C8BC8-F283-45AE-878A-BAB7291924A1}")
    alert(customXMLPart.XML)
}
```
