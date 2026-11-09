# Worksheet.XmlDataQuery

返回一个代表映射到特定 XPath 的 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象。如果指定的 XPath 路径尚未映射到工作表，或者映射的区域为空，则返回 **null** 。



## 语法

express.**XmlDataQuery(XPath, SelectionNamespaces, Map)**

express   一个代表 **Worksheet** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| XPath | 必选 | string | 要查询的 XPath。 |
| SelectionNamespaces | 可选 | any | 以空格分隔的 **String** 类型，包含在 XPath 参数中引用的命名空间。如果无法解析某个指定的命名空间，将产生运行时错误。 |
| Map | 可选 | any | 如果希望在特定的映射中查询 XPath，请指定一个 **[XmlMap](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlMap/obj)** 。 |

## 返回值

Range

## 说明


如果 XPath 存在于 XML 列表的某一列中，则返回的 **Range** 对象不包括标题行。

如果 XPath 位置路径未映射到网格中，则该方法返回 **null** 。因此，返回 **null** 并不一定意味着映射不存在。它可能意味着指定的 XPath 位置中当前没有可用的数据区域。可以使用 **[XmlMapQuery](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/XmlMapQuery)** 方法检查是否存在映射的 XPath。

使用 **XmlDataQuery** 方法，您可以查询是否存在特殊的映射数据。该方法无法用于查询映射中的数据片段。例如，映射区域的 XPath 为“/root/People\[@Age="23"\]/FirstName”是有效的。查询此 XPath 位置路径的 XmlDataQuery 将返回正确区域。但为在以上映射区域中找到“Joe”而对 “/root/People\[FirstName="Joe"\]” 进行的查询将失败，这是因为该映射区域的 XPath 定义不同。



## 示例


```JavaScript
/*此示例分别使用两个不同的XPath查询相应的映射，并分别显示映射对应的Range地址。*/
function test() {
    let r1 = ActiveSheet.XmlDataQuery("/catalog/book/@id")
    alert(r1.Address())
    let r2 = ActiveSheet.XmlDataQuery("/catalog/book/title")
    alert(r2.Address())
}
```


```JavaScript
/*此示例使用特定的XPath，并且在活动工作簿的最后一项映射中查询相应的映射，再显示查询到的映射对应Range的其中第一项的值。*/
function test() {
    let xmlmaps = ActiveWorkbook.XmlMaps
    let r1 = ActiveSheet.XmlDataQuery("/catalog/book/price", null, xmlmaps.Item(xmlmaps.Count))
    alert(r1.Item(1).Value2)
}
```
