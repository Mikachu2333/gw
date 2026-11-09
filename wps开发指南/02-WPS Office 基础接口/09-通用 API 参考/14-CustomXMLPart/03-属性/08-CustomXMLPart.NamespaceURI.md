# CustomXMLPart.NamespaceURI

获取 **CustomXMLPart** 对象的命名空间的唯一地址标识符。只读。



## 语法

express.**NamespaceURI**

express   一个代表 **CustomXMLPart** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例运行于文字组件，显示活动文档中的第一个内容控件映射到的自定义 XML 部件的命名空间的唯一地址标识符。*/
function test() {
    let customXMLPart = ActiveDocument.ContentControls.Item(1).XMLMapping.CustomXMLPart
    alert(customXMLPart.NamespaceURI)
}
```


```JavaScript
/*本示例运行于文字组件，在光标处插入活动文档上第四个 CustomXMLPart 对象的命名空间的唯一地址标识符。*/
function test() {
    let customXMLPart = ActiveDocument.CustomXMLParts.Item(4)
    Selection.TypeText(customXMLPart.NamespaceURI)
}
```
