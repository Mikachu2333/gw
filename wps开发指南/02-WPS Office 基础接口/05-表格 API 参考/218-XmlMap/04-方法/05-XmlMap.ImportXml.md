# XmlMap.ImportXml

将 XML 数据从 **String** 变量导入到已被映射到指定 **[XmlMap](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlMap/obj)** 对象的单元格。



## 语法

express.**ImportXml(XmlData, Overwrite)**

express   一个代表 **XmlMap** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| XmlData | 必选 | string | 包含要导入的 XML 数据的字符串。 |
| Overwrite | 可选 | any | 指定是否覆盖当前映射到指定 XML 映射的单元格内容。设置为 **True** 将覆盖单元格；设置为 **False** 将数据追加到现有区域。如果未指定该参数，则 XML 映射的 **[AppendOnImport](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlMap/member/AppendOnImport)** 属性的当前值决定是否覆盖单元格的内容。 |

## 返回值

[XlXmlImportResult](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlXmlImportResult)

## 说明


| **XlXmlImportResult** 可为以下 **XlXmlImportResult** 常量之一。              |
| ------------------------------------------------------------------- |
| **xlXmlImportElementsTruncated** 。由于指定的 XML 数据文件对于工作表来说太大，因此其内容已被截断。 |
| **xlXmlImportSuccess** 。XML 数据文件成功导入。                                |
| **xlXmlImportValidationFailed** 。正导入的数据未能通过架构验证，但仍进行导入。              |

若要将 XML 数据文件的内容导入已被映射到指定架构映射的单元格，请使用 **XmlMap** 对象的 **[Import](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlMap/member/Import)** 方法。

如果下列任一条件为 True，则将发生运行时错误。如果多个条件为 True，ET 将返回最严重条件的运行时错误（下面按严重程度由高到低的顺序列出了这些条件）：

* 如果 XML 数据包含语法错误。
* 如果由于工作表无法容纳全部数据而导致导入被取消。



## 示例


```JavaScript
/*此示例将XML数据导入活动工作簿的第一项XmlMap对应的单元格中（不覆盖现有数据）。*/
function test() {
    let xml = "<?xml version='1.0' encoding='UTF-8' standalone='yes'?><catalog><book id='bk104'><author>Gambardella, Matthew</author><title>XML Developer's Guide</title><genre>Computer</genre><price>44.95</price><publish_date>36800</publish_date><description>An in-depth look at creating applications   with XML.</description></book><book id='bk105'><author>Ralls, Kim1</author><title>Midnight Rain</title><genre>Fantasy</genre><price>15.95</price><publish_date>36887</publish_date><description>A former architect battles corporate zombies, an evil sorceress, and her own childhood to become queen of the world.</description></book><book id='bk106'><author>Corets, Eva</author><title>Maeve Ascendant</title><genre>Fantasy</genre><price>115.95</price><publish_date>36899</publish_date><description>After the collapse of a nanotechnology society in England, the young survivors lay the foundation for a new society.</description></book></catalog>"
    const result = ActiveWorkbook.XmlMaps.Item(1).ImportXml(xml, false)
    if (result == xlXmlImportElementsTruncated) {
        alert("XML数据文件过大，内容已被截断")
    } else if (result == xlXmlImportValidationFailed) {
        alert("导入XML数据文件失败")
    }
}
```


```JavaScript
/*此示例将XML数据导入第一张工作簿的第一项XmlMap对应的单元格中（覆盖现有数据）。*/
function test() {
    let xml = "<?xml version='1.0' encoding='UTF-8' standalone='yes'?><catalog><book id='bk104'><author>Gambardella, Matthew</author><title>XML Developer's Guide</title><genre>Computer</genre><price>44.95</price><publish_date>36800</publish_date><description>An in-depth look at creating applications   with XML.</description></book><book id='bk105'><author>Ralls, Kim1</author><title>Midnight Rain</title><genre>Fantasy</genre><price>15.95</price><publish_date>36887</publish_date><description>A former architect battles corporate zombies, an evil sorceress, and her own childhood to become queen of the world.</description></book><book id='bk106'><author>Corets, Eva</author><title>Maeve Ascendant</title><genre>Fantasy</genre><price>115.95</price><publish_date>36899</publish_date><description>After the collapse of a nanotechnology society in England, the young survivors lay the foundation for a new society.</description></book></catalog>"
    const result = Workbooks.Item(1).XmlMaps.Item(1).ImportXml(xml, true)
    if (result == xlXmlImportSuccess) {
        alert("导入XML数据文件成功")
    } else {
        alert("导入XML数据文件失败或被截断")
    }
}
```
