# CustomXMLPart.SelectNodes

从自定义 XML 部件中选择节点的集合。



## 语法

express.**SelectNodes(XPath)**

express   一个代表 **CustomXMLPart** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| XPath | 必选 | string | 包含 XPath 表达式。 |

## 返回值

CustomXMLNodes

## 示例


```JavaScript
/*本示例运行于文字组件，向活动文档添加 CustomXMLPart 对象，然后在该 CustomXMLPart 对象内选择与 XPath 表达式匹配的节点。*/
function test() {
    //  Add a custom xml part.
    let strXML = "<root xmlns='http://example.com/namespace'><child1>Value1</child1></root>"
    let customXMLPart = ActiveDocument.CustomXMLParts.Add(strXML)
    let customXMLNodes = customXMLPart.SelectNodes("/ns0:root")
}
```


```JavaScript
/*本示例运行于文字组件，显示活动文档上第四个 CustomXMLPart 对象中与指定 XPath 表达式匹配的第一个节点的文本。*/
function test() {
    let customXMLPart = ActiveDocument.CustomXMLParts.Item(4)
    alert(customXMLPart.SelectNodes("/ns0:root/ns0:example1").Item(1).Text)
}
```
