# Presentation.CustomXMLParts

返回一个 **[CustomXMLParts](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLParts/obj)** 对象，该对象表示与指定的 **Presentation** 对象关联的自定义 XML 部件的集合。只读。



## 语法

express.**CustomXMLParts**

express   一个代表 **Presentation** 对象的变量。

## 类型

CustomXMLParts

## 示例


```JavaScript
/*本示例向活动演示文稿的 CustomXMLParts 集合添加一个 CustomXMLPart 。*/
function test() {
    let customXMLParts = ActivePresentation.CustomXMLParts
    customXMLParts.Add("<author>Mark Twain</author>")
}
```


```JavaScript
/*本示例显示第一篇演示文稿关联的第一个 XML 部件的 XML 属性值。*/
function test() {
    alert(Presentations.Item(1).CustomXMLParts(1).XML)
}
```
