# XmlMap.IsExportable

如果 ET 可以使用指定架构映射中的 **[XPath](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XPath/obj)** 对象导出 XML 数据，并且可以导出映射到指定架构映射的所有 XML 列表，则返回 **True** 。



## 语法

express.**IsExportable**

express   一个代表 **XmlMap** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*此示例显示活动工作簿中第一项XmlMap映射是否可以使用XPath对象导出XML数据，并且可以导出该架构映射的所有 XML 列表。*/
function test() {
    let xmlMap = Application.ActiveWorkbook.XmlMaps.Item(1)
    alert(xmlMap.IsExportable)
}
```


```JavaScript
/*此示例判断第一张工作簿中第一项XmlMap映射是否可以使用XPath对象导出XML数据，并且可以导出该架构映射的所有 XML 列表，然后通知用户。*/
function test() {
    let xmlMap = Workbooks.Item(1).XmlMaps.Item(1)
    if (xmlMap.IsExportable) {
        alert("ET可以使用架构映射中的 XPath 对象导出 XML 数据，并且可以导出该架构映射的所有 XML 列表")
    } else {
        alert("ET不能使用架构映射中的 XPath 对象导出 XML 数据，并且可以导出该架构映射的所有 XML 列表")
    }
}
```
