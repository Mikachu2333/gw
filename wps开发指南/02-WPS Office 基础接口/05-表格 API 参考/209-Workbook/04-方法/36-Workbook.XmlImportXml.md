# Workbook.XmlImportXml

导入先前已被加载到内存的 XML 数据流。ET 使用找到的第一个符合需要的映射；如果未指定目标区域，则 ET 将自动列出该数据。



## 语法

express.**XmlImportXml(Data, Overwrite, Destination)**

express   一个代表 **Workbook** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Data | 必选 | string | 要导入的数据。 |
| Overwrite | 可选 | any | 如果未指定 Destination 参数的值，则该参数将指定是否覆盖已映射到在 ImportMap 参数中指定的架构映射的数据。设置为 **True** 将覆盖数据，设置为 **False** 将把新数据追加到现有数据中。默认值为 **True** 。如果指定了 Destination 参数的值，则该参数将指定是否覆盖现有数据。设置为 **True** 将覆盖现有数据，设置为 **False** 将在数据要被覆盖时取消导入。默认值为 **True** 。 |
| Destination | 可选 | any | 指定将在其中创建列表的区域。ET 只使用该区域的左上角。 |

## 返回值

{RHS: XlXmlImportResult, ImportMap: XmlMap}，其中 RHS 存储导入结果，ImportMap 存储导入时要应用的架构映射。

## 说明


本方法与 VBA 中同名方法的参数与返回值有差异，要返回的信息已放入返回值中，代码应在方法返回时检查返回值。
| **[XlXmlImportResult](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlXmlImportResult)** 可为以下 **XlXmlImportResult** 常量之一。              |
| ------------------------------------------------------------------- |
| **xlXmlImportElementsTruncated** 。由于指定的 XML 数据文件对于工作表来说太大，因此其内容已被截断。 |
| **xlXmlImportSuccess** 。XML 数据文件成功导入。                                |
| **xlXmlImportValidationFailed** 。正导入的数据未能通过架构验证，但仍进行导入。              |

如果希望将数据导入到现有映射，请不要指定 _Destination_ 参数的值。

以下条件会导致 **[XmlImport](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/XmlImport)** 方法产生运行时错误：

* 指定的 XML 数据包含语法错误。
* 导入过程被取消，因为指定的数据与工作表不符。
* 未找到符合需要的映射，并且未指定目标区域。

使用 **[Workbook](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/obj)** 对象的 **XMLImport** 方法可将 XML 数据文件导入当前工作簿中。



## 示例


```JavaScript
/*此示例新建工作簿，再将XML字符串导入该工作簿，且指定B1为目标区域（不覆盖原数据）。*/
function test() {
    const xml = '<?xml version="1.0"?><catalog><book id="bk101"><title>abc</title><price>44.95</price></book><book id="bk102"><title>xyz</title><price>5.95</price></book></catalog>'
    let wb = Workbooks.Add()
    let result = wb.XmlImportXml(xml, false, Range("B1"))
    if (result.RHS == xlXmlImportSuccess) {
        alert(`${wb.Name}导入XML成功，应用的架构映射是${result.ImportMap.Name}`)
    } else {
        alert("导入失败")
    }
}
```


```JavaScript
/*此示例将XML字符串导入活动工作簿，且指定A2为目标区域左上角（不覆盖原数据）。*/
function test() {
    const data = `\
    <ROWSET>
        <ROW>
            <col0>12</col0>
            <col1>34</col1>
        </ROW>
        <ROW>
            <col0>56</col0>
            <col1>78</col1>
        </ROW>
    </ROWSET>`
    let result = ActiveWorkbook.XmlImportXml(data, false, Range("A2"))
    if (result.RHS == xlXmlImportSuccess) {
        alert(`导入成功，应用的架构映射是${result.ImportMap.Name}`)
    } else {
        alert("导入失败")
    }
}
```
