# XPath.SetValue

将指定的 **[XPath](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XPath/obj)** 对象映射到 **[ListColumn](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListColumn/obj)** 对象或 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 集合。如果 **XPath** 对象先前已被映射到 **ListColumn** 对象或 **Range** 集合，则 **SetValue** 方法将设置 **XPath** 对象的属性。



## 语法

express.**SetValue(Map, XPath, SelectionNamespace, Repeating)**

express   一个代表 **XPath** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Map | 必选 | XmlMap | 将与映射区域相关联的映射信息。 |
| XPath | 必选 | string | 一个有效的 XPath （XML 路径语言 (XPath)：用来获取部分 XML 文档的语言。XPath 也提供操作字符串、数字和布尔值的基本工具。）表达式，指示 ET 应在该映射区域中显示哪些 XML 数据。XPath 字符串可能还包含有效筛选；在这种情况下，该映射区域只会显示 XPath 指向的数据的子集。 |
| SelectionNamespace | 可选 | any | 指定用于 _XPath_ 参数的任意命名空间 （命名空间：一种唯一限定元素名称与关系的方法，以避免具有同一名称但来自多个来源的元素发生名称冲突。）前缀。如果 **XPath** 对象不包含任何前缀，或者 **XPath** 对象使用了 ET 内部前缀，将省略该参数。 |
| Repeating | 可选 | any | 指定 **XPath** 对象是否绑定到 XML 列表的某一列，或是否映射到单个单元格。设置为 **True** 会将 **XPath** 对象绑定到 XML 列表的某一列。设置为 **False** 会强制创建不重复的单元格。如果区域大于单个单元格且指定了 **False** ，则将发生运行时错误。 |

## 返回值

void

## 说明


有关 ET 中 XPath 支持的说明，请参阅 **[IsExportable](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlMap/member/IsExportable)** 属性。如果 XPath 表达式无效或者已经映射了指定的 XPath，则将发生运行时错误。

如果 ET 无法解析命名空间，则将发生运行时错误。

如果满足以下任一条件，此方法将生成错误：

* 区域跨网格中的多个列。
* 区域的某个部分包含已经映射的单元格，剩余部分包含未映射的单元格。
* 区域的某一部分包含一个映射，而另一部分包含了不同映射或同一映射中的不同 XPath。

如果区域是单一单元格，则 ET 在默认情况下创建不重复的单一映射单元格。此不重复单元格无标题。

当单一单元格区域位于 ListObject 中时，会出现例外；这时映射信息应用于整个列。

如果区域包含多个单元格，ET 将创建一个重复的 XML 列表。ET 将选定区域作为所有数据值进行处理；因此，在创建 XML 列表后，该区域将下移一行，并且标题位于该区域顶部占用的单元格中。插入行位于移动后的区域的底部。

* 对象模型中不使用 ET 的标题检测算法。这里假设网格中不存在标题。
* 在对象模型中创建映射区域时，将禁用自动合并和自动扩大。



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
/*本示例基于被附加到活动工作簿的“catalog_映射”架构映射，使用SetValue方法将工作表 Sheet2 上第一个列表的第一列绑定到XPath对象。*/
function test() {
    let xmlMap = ActiveWorkbook.XmlMaps.Item("catalog_映射")
    let xPath = "/catalog/book/@id"
    let range = Worksheets.Item("Sheet2").ListObjects.Item(1).ListColumns(1)
    range.XPath.SetValue(xmlMap, xPath, "ex", true)
}
```
