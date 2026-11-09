# XmlMap.RootElementNamespace

返回一个 **[XmlNamespace](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlNamespace/obj)** 对象，该对象表示指定的 XML 架构映射的根元素 （根元素：包含所有其他元素的 XML 文档的元素。它是 XML 文档的顶层元素，并且必须是文档中的第一个元素。）。只读。



## 语法

express.**RootElementNamespace**

express   一个代表 **XmlMap** 对象的变量。

## 类型

XmlNamespace

## 示例


```JavaScript
/*本示例显示活动工作簿上第一项XmlMap的根元素命名空间的前缀。*/
function test() {
    let xmlMap = ActiveWorkbook.XmlMaps.Item(1)
    alert(xmlMap.RootElementNamespace.Prefix)
}
```


```JavaScript
/*本示例将第一张工作簿上第一项XmlMap的根元素命名空间的统一资源标识符赋值给A5单元格。*/
function test() {
    let xmlMap = Workbooks.Item(1).XmlMaps.Item(1)
    Range("A5").Value2 = xmlMap.RootElementNamespace.Uri
}
```
