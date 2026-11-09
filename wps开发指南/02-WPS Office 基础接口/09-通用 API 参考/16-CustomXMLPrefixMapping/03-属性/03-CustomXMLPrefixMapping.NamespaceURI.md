# CustomXMLPrefixMapping.NamespaceURI

获取 **CustomXMLPrefixMapping** 对象的命名空间的唯一地址标识符。只读。



## 语法

express.**NamespaceURI**

express   一个代表 **CustomXMLPrefixMapping** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例运行于文字组件，显示第一个文档上第二个 CustomXMLPart 对象中最后一个 CustomXMLPrefixMapping 对象的命名空间的唯一地址标识符。*/
function test() {
    let customXMLPart = Documents.Item(1).CustomXMLParts.Item(2)
    alert(customXMLPart.NamespaceManager.Item(customXMLPart.NamespaceManager.Count).NamespaceURI)
}
```


```JavaScript
/*本示例运行于文字组件，在光标处插入活动文档上第一个 CustomXMLPart 对象中第一个 CustomXMLPrefixMapping 对象的命名空间的唯一地址标识符。*/
function test() {
    let customXMLPart = ActiveDocument.CustomXMLParts.Item(1)
    Selection.TypeText(customXMLPart.NamespaceManager.Item(1).NamespaceURI)
}
```
