# XPath 对象

代表已被映射到 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 或 **[ListColumn](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListColumn/obj)** 对象的 XPath。

## 说明


使用 **[SetValue](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XPath/member/SetValue)** 方法可将 XPath 映射到区域或列表列。 **SetValue** 方法也用于更改现有 XPath 的属性。

使用 **[Clear](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XPath/member/Clear)** 方法可删除已映射到区域或列表列的 XPath。


## 示例


```JavaScript
/*本示例基于被附加到活动工作簿的“catalog_映射”架构映射，在活动工作表上创建了一个 XML 列表，然后使用SetValue方法将每个列绑定到XPath对象。*/
function test() {
    // Specify the schema map to use.
    let xmlMap = ActiveWorkbook.XmlMaps("catalog_映射")

    // Create a new list.
    let listObject = ActiveSheet.ListObjects.Add()

    // Specify the first element to map.
    let xPath1 = "/catalog/book/@id"
    // Map the element.
    listObject.ListColumns(1).XPath.SetValue(xmlMap, xPath1)

    // Specify the second element to map.
    let xPath2 = "/catalog/book/author"
    // Add a column to the list.
    let listColumn1 = listObject.ListColumns.Add()
    // Map the element.
    listColumn1.XPath.SetValue(xmlMap, xPath2)

    let xPath3 = "/catalog/book/title"
    let listColumn2 = listObject.ListColumns.Add()
    listColumn2.XPath.SetValue(xmlMap, xPath3)
}
```


```JavaScript
/*本示例判断如果映射到工作表 Sheet2 上单元格E3的XPath被映射到XML列表，则显示该XPath值。*/
function test() {
    let xPath = Worksheets.Item("Sheet2").Range("E3").XPath
    if (xPath.Repeating) {
        alert(xPath.Value)
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Clear](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XPath/member/Clear) | 清除映射区域的所有 XPath 架构信息。 |
| [SetValue](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XPath/member/SetValue) | 将指定的 **[XPath](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XPath/obj)** 对象映射到 **[ListColumn](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListColumn/obj)** 对象或 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 集合。如果 **XPath** 对象先前已被映射到 **ListColumn** 对象或 **Range** 集合，则 **SetValue** 方法将设置 **XPath** 对象的属性。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Map](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XPath/member/Map) | 返回一个 **[XmlMap](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlMap/obj)** 对象，该对象表示包含指定 **[XPath](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XPath/obj)** 对象的架构映射。只读。 |
| [Repeating](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XPath/member/Repeating) | 如果指定的 **[XPath](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XPath/obj)** 对象被映射到 XML 列表，则返回 **True** ；如果 **XPath** 对象被映射到单个的单元格，则返回 **False** 。 **Boolean** 类型，只读。 |
| [Value](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XPath/member/Value) | 返回一个 **String** ，它代表指定对象的 XPath。 |