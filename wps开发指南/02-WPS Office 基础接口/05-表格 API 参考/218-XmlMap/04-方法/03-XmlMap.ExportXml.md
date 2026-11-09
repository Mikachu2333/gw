# XmlMap.ExportXml

将映射到指定 **[XmlMap](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlMap/obj)** 对象的单元格的内容导出到 **String** 变量。



## 语法

express.**ExportXml()**

express   一个代表 **XmlMap** 对象的变量。

## 返回值

{RHS: XlXmlExportResult, Data: string}，其中RHS存储导出结果，Data存储导出XML字符串

## 说明


本方法与 VBA 中同名方法的参数与返回值有差异，要返回的信息已放入返回值中，代码应在方法返回时检查返回值。
| **[XlXmlExportResult](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlXmlExportResult)** 可为以下 **XlXmlExportResult** 常量之一。   |
| -------------------------------------------------------- |
| **xlXmlExportSuccess** 。导出成功。未报告错误。                      |
| **xlXmlExportValidationFailed** 。导出的数据未能通过架构验证，但仍然要进行导出。 |

要将已映射的单元格的内容导出到 XML 数据文件，请使用 **[Export](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlMap/member/Export)** 方法。



## 示例


```JavaScript
/*下例将被映射到“catalog_映射”架构映射的单元格的内容导出到名为 strContactData 的变量中。*/
function test() {
    let result = ActiveWorkbook.XmlMaps.Item("catalog_映射").ExportXml()
    let strContactData = null
    if (result.RHS == xlXmlExportSuccess) {
        strContactData = result.Data
    }
}
```


```JavaScript
/*此示例将第一个工作簿中第一项XmlMap导出XML字符串，并检查是否成功再通知用户。*/
function test() {
    let xmlMaps = Workbooks.Item(1).XmlMaps
    let result = xmlMaps.Item(1).ExportXml()
    if (result.RHS == xlXmlExportSuccess) {
        alert(`XmlMap导出的XML字符串的长度是${result.Data.length}`)
    }
}
```
