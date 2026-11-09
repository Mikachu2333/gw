# CustomXMLNodes.Count

获取 **CustomXMLNodes** 集合中 **CustomXMLNode** 对象的数目。只读。



## 语法

express.**Count**

express   一个代表 **CustomXMLNodes** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例运行于文字组件，显示活动文档上第四个 CustomXMLPart 对象中与指定 XPath 表达式匹配的节点的数量。*/
function test() {
    let customXMLNodes = ActiveDocument.CustomXMLParts.Item(4).SelectNodes("/ns0:root")
    alert(customXMLNodes.Count)
}
```
