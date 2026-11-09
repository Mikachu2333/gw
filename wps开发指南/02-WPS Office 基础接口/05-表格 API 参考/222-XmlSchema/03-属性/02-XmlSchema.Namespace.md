# XmlSchema.Namespace

返回一个 **[XmlNamespace](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlNamespace/obj)** 对象，该对象表示指定架构的目标命名空间 （命名空间：一种唯一限定元素名称与关系的方法，以避免具有同一名称但来自多个来源的元素发生名称冲突。）。只读。



## 语法

express.**Namespace**

express   一个代表 **XmlSchema** 对象的变量。

## 类型

XmlNamespace

## 示例


```JavaScript
/*本示例显示第一张工作簿上第一项XmlMap的第一个XML架构的命名空间的前缀。*/
function test() {
    let xmlSchema = Workbooks.Item(1).XmlMaps.Item(1).Schemas.Item(1)
    alert(xmlSchema.Namespace.Prefix)
}
```


```JavaScript
/*本示例显示活动工作簿上第一项XmlMap的第二个XML架构的命名空间的统一资源标识符。*/
function test() {
    let xmlSchema = ActiveWorkbook.XmlMaps.Item(1).Schemas.Item(2)
    alert(xmlSchema.Namespace.Uri)
}
```
