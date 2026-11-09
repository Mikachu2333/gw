# CustomXMLPrefixMappings.Count

获取一个 **Long** 类型的值，指示 **CustomXMLPrefixMappings** 集合中的项数。只读。



## 语法

express.**Count**

express   一个代表 **CustomXMLPrefixMappings** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例运行于文字组件，显示活动文档上第一个 CustomXMLPart 对象中 CustomXMLPrefixMapping 对象的数量。*/
function test() {
    alert(ActiveDocument.CustomXMLParts.Item(1).NamespaceManager.Count)
}
```
