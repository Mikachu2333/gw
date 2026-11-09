# CustomXMLNodes.Item

获取 **CustomXMLNodes** 集合中的一个 **CustomXMLNode** 对象。只读。



## 语法

express.**Item(Index)**

express   一个代表 **CustomXMLNodes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int4 精度） | 要返回的 **CustomXMLNode** 对象的索引号。 |

## 返回值

CustomXMLNode

## 示例


```JavaScript
/*本示例运行于文字组件，显示活动文档上第四个 CustomXMLPart 对象中与指定 XPath 表达式匹配的第一个节点不带命名空间前缀的基本名称。*/
function test() {
    let customXMLNodes = ActiveDocument.CustomXMLParts.Item(4).SelectNodes("/ns0:root")
    alert(customXMLNodes.Item(1).BaseName)
}
```


```JavaScript
/*本示例运行于文字组件，显示活动文档中的第一个内容控件映射到的自定义 XML 部件中指定节点与 XPath 表达式匹配的第一个节点的文本。*/
function test() {
    let contentControl = ActiveDocument.ContentControls.Item(1)
    let customXMLNode = contentControl.XMLMapping.CustomXMLPart.SelectSingleNode("/ns1:coreProperties[1]")
    let customXMLNodes = customXMLNode.SelectNodes("/ns1:coreProperties[1]/ns0:title[1]")
    alert(customXMLNodes.Item(1).Text)
}
```
