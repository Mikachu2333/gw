# XPath.Map

返回一个 **[XmlMap](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlMap/obj)** 对象，该对象表示包含指定 **[XPath](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XPath/obj)** 对象的架构映射。只读。



## 语法

express.**Map**

express   一个代表 **XPath** 对象的变量。

## 类型

XmlMap

## 示例


```JavaScript
/*本示例显示包含活动工作表上单元格B1的XPath架构映射的XmlMap的第一个XML架构的名称。*/
function test() {
    let xPath = ActiveSheet.Range("B1").XPath
    alert(xPath.Map.Schemas.Item(1).Name)
}
```


```JavaScript
/*本示例显示包含第一张工作表上单元格B2的XPath架构映射的XmlMap关联绑定的SourceUrl属性值。*/
function test() {
    let xPath = Worksheets.Item(1).Range("B2").XPath
    alert(xPath.Map.DataBinding.SourceUrl)
}
```
