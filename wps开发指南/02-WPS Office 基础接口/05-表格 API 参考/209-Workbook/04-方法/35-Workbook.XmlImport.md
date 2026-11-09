# Workbook.XmlImport

将 XML 数据文件导入当前工作簿。



## 语法

express.**XmlImport(Url, Overwrite, Destination)**

express   一个代表 **Workbook** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Url | 必选 | string | XML 数据文件的统一资源定位符 (URL) 或通用命名约定 (UNC) 路径。 |
| Overwrite | 可选 | any | 如果未指定 Destination 参数的值，则该参数将指定是否覆盖已映射到在 ImportMap 参数中指定的架构映射的数据。设置为 **True** 将覆盖数据，设置为 **False** 将把新数据追加到现有数据中。默认值为 **True** 。如果指定了 Destination 参数的值，则该参数将指定是否覆盖现有数据。设置为 **True** 将覆盖现有数据，设置为 **False** 将在数据要被覆盖时取消导入。默认值为 **True** 。 |
| Destination | 可选 | any | 指定将在其中创建列表的区域。只能使用区域的左上角。 |

## 返回值

{RHS: XlXmlImportResult, ImportMap: XmlMap}，其中 RHS 存储导入结果，ImportMap 存储导入文件时应用的架构映射。如果以前导入过该数据，则包含对 **XmlMap** 对象（包含该数据）的引用。

## 说明


本方法与 VBA 中同名方法的参数与返回值有差异，要返回的信息已放入返回值中，代码应在方法返回时检查返回值。
| **[XlXmlImportResult](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlXmlImportResult)** 可为以下 **XlXmlImportResult** 常量之一。              |
| ------------------------------------------------------------------- |
| **xlXmlImportElementsTruncated** 。由于指定的 XML 数据文件对于工作表来说太大，因此其内容已被截断。 |
| **xlXmlImportSuccess** 。XML 数据文件成功导入。                                |
| **xlXmlImportValidationFailed** 。正导入的数据未能通过架构验证，但仍进行导入。              |

该方法使您可以从文件路径中将数据导入工作簿中。ET 使用找到的第一个符合需要的映射；如果指定了目标区域，则 ET 将自动列出该数据。

如果希望将数据导入到现有映射，请不要指定 _Destination_ 参数的值。

以下条件会导致 **XMLImport** 方法产生运行时错误：

* 指定的 XML 数据包含语法错误。
* 导入过程被取消，因为指定的数据与工作表不符。
* 未找到符合需要的映射，并且未指定目标区域。

使用 **[Workbook](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/obj)** 对象的 **[XmlImportXml](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/XmlImportXml)** 方法可导入先前加载到内存中的 XML 数据。



## 示例


```JavaScript
/*此示例将XML文件导入活动工作簿，且指定A1为目标区域左上角（不覆盖原数据）。*/
function test() {
    let result = ActiveWorkbook.XmlImport("D:\\data.xml", false, Range("A1"))
    if (result.RHS == xlXmlImportSuccess) {
        alert(`导入成功，应用的架构映射是${result.ImportMap.Name}`)
    } else {
        alert("导入失败")
    }
}
```


```JavaScript
/*此示例新建工作簿，再将XML文件导入该工作簿，且指定B3为目标区域左上角（不覆盖原数据）。*/
function test() {
    let wb = Workbooks.Add()
    let result = wb.XmlImport("D:\\data.xml", false, Range("B3"))
    if (result.RHS == xlXmlImportSuccess) {
        alert(`${wb.Name}导入XML成功，应用的架构映射是${result.ImportMap.Name}`)
    } else {
        alert("导入失败")
    }
}
```
