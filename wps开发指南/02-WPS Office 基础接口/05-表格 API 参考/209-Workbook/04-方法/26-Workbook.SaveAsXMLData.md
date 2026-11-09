# Workbook.SaveAsXMLData

将已映射到指定 XML 架构映射的数据导出到 XML 数据文件中。



## 语法

express.**SaveAsXMLData(Filename, Map)**

express   一个代表 **Workbook** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Filename | 必选 | string | 一个表示要保存文件的文件名的字符串。可包含完整路径，如果不指定路径，ET 将文件保存到当前文件夹中。 |
| Map | 必选 | XmlMap | 应用于数据的架构映射。 |

## 返回值

void

## 说明


如果 ET 不能使用指定的架构映射导出数据，则此方法会产生运行时错误。若要检查 ET 是否能够使用指定的架构映射导出数据，请使用 **[IsExportable](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlMap/member/IsExportable)** 属性。



## 示例


```JavaScript
/*本示例验证了ET能够使用架构映射“catalog_映射”导出数据，然后将映射到“catalog_映射”架构映射的数据导出到名为“catalog Data.xml”的文件中。*/
function test() {
    let xmlMap = ActiveWorkbook.XmlMaps.Item("catalog_映射")
    if (xmlMap.IsExportable) {
        ActiveWorkbook.SaveAsXMLData("D:\\catalog Data.xml", xmlMap)
    } else {
        alert(`Cannot use ${xmlMap.Name} to export the contents of the worksheet to XML data.`)
    }
}
```


```JavaScript
/*本示例将已映射到活动工作簿上第一项XmlMap数据导出到 XML 数据文件中*/
function test() {
    ActiveWorkbook.SaveAsXMLData("D:\\example.xml", ActiveWorkbook.XmlMaps.Item(1))
}
```
