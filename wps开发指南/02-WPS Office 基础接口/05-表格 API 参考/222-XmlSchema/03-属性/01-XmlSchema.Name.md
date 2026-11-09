# XmlSchema.Name

返回一个 **String** 值，它代表用于在 **[XmlMap](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlMap/obj)** 对象中标识 XML 架构的友好名称。



## 语法

express.**Name**

express   一个代表 **XmlSchema** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示第一张工作簿上第一项XmlMap的第一个XML架构的名称。*/
function test() {
    let xmlSchema = Workbooks.Item(1).XmlMaps.Item(1).Schemas.Item(1)
    alert(xmlSchema.Name)
}
```


```JavaScript
/*本示例显示第一张工作簿上第一项XmlMap的所有XML架构的名称。*/
function test() {
    let xmlSchemas = Workbooks.Item(1).XmlMaps.Item(1).Schemas
    for (let i = 1; i <= xmlSchemas.Count; i++) {
        alert(`第${i}个XML架构的名称：${xmlSchemas.Item(i).Name}`)
    }
}
```
