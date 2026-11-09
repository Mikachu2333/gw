# XmlMap.Export

将映射到指定 **[XmlMap](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlMap/obj)** 对象的单元格的内容导出到 XML 数据文件。



## 语法

express.**Export(Url, Overwrite)**

express   一个代表 **XmlMap** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Url | 必选 | string | 要导出到的 XML 数据文件的路径和文件名。 |
| Overwrite | 可选 | any | 设置为 True 可覆盖 Url 参数中指定的文件（如果存在）。 默认值为 False。 |

## 返回值

一个表示该方法结果的 **[XlXmlExportResult](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlXmlExportResult)** 值。

## 说明


使用 **[ExportXml](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlMap/member/ExportXml)** 方法将映射单元格的内容导出为 **String** 变量。



## 示例


```JavaScript
/*此示例将第一个工作簿中第一项XmlMap导出为XML文件。*/
function test() {
    let xmlmap = Workbooks.Item(1).XmlMaps.Item(1)
    if (xlXmlExportSuccess != xmlmap.Export("D:/example.xml")) {
        alert("导出XmlMap失败")
    }
}
```


```JavaScript
/*此示例将活动工作簿中所有XmlMap分别导出为XML文件。*/
function test() {
    let xmlmaps = ActiveWorkbook.XmlMaps
    for (let i = 1; i <= xmlmaps.Count; ++i) {
        let xmlmap = xmlmaps.Item(i)
        if (xlXmlExportSuccess != xmlmap.Export(`D:/example${i}.xml`, true)) {
            alert(`导出第${i}个XmlMap失败`)
        }
    }
}
```
