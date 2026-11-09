# XmlMap.Schemas

返回一个 **[XmlSchemas](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlSchemas/obj)** 集合，该集合表示指定的 **[XmlMap](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlMap/obj)** 对象所包含的架构。只读。



## 语法

express.**Schemas**

express   一个代表 **XmlMap** 对象的变量。

## 类型

XmlSchemas

## 说明


返回的 **XmlSchemas** 集合中的第一项是用作指定 XML 架构映射的根元素 （根元素：包含所有其他元素的 XML 文档的元素。它是 XML 文档的顶层元素，并且必须是文档中的第一个元素。）的架构。



## 示例


```JavaScript
/*本示例显示活动工作簿上第一项XmlMap所包含XML架构的数量。*/
function test() {
    let xmlMap = ActiveWorkbook.XmlMaps.Item(1)
    alert(xmlMap.Schemas.Count)
}
```


```JavaScript
/*本示例显示第一张工作簿上第一项XmlMap所包含的第一个XML架构的内容。*/
function test() {
    let xmlMap = Workbooks.Item(1).XmlMaps.Item(1)
    console.log(xmlMap.Schemas.Item(1).XML)
}
```
