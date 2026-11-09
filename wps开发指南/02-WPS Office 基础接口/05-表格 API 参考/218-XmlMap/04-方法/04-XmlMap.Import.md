# XmlMap.Import

将数据从指定的 XML 数据文件导入到已经映射至指定的 **[XmlMap](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlMap/obj)** 对象的单元格中。



## 语法

express.**Import(Url, Overwrite)**

express   一个代表 **XmlMap** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Url | 必选 | string | 要导入的 XML 数据的路径。此路径可以通用命名约定 (UNC) 或统一资源定位符 (URL) 格式进行指定。文件可以是 XML 数据文件。 |
| Overwrite | 可选 | any | 如果设为 **True** ，则覆盖现有数据。如果设为 **False** ，则追加到现有数据。默认值为 **False** 。 |

## 返回值

一个表示该方法结果的 **[XlXmlImportResult](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlXmlImportResult)** 值。

## 说明


此方法返回下列 **XlXmlImportResult** 常量之一：

| **xlXmlImportElementsTruncated** ：由于指定的 XML 数据文件对于工作表来说太大，其内容被已被截断。 |
| ------------------------------------------------------------------ |
| **xlXmlImportSuccess** ：XML 数据文件成功导入。                               |
| **xlXmlImportValidationFailed** ：正在导入的数据未能通过架构验证，但仍继续导入。            |

如果下列任一条件为 True，则将发生运行时错误。如果多个条件为 True，ET 将返回最严重条件的运行时错误（下面按严重程度由高到低的顺序列出了这些条件）：

* 如果 XML 数据包含语法错误。
* 如果由于工作表无法容纳全部数据而导致导入被取消。



## 示例


```JavaScript
/*此示例将XML文件导入活动工作簿的第一项XmlMap对应的单元格中（覆盖现有数据）。*/
function test() {
    const result = ActiveWorkbook.XmlMaps.Item(1).Import("D:/data.xml", true)
    if (result == xlXmlImportElementsTruncated) {
        alert("XML数据文件过大，内容已被截断")
    } else if (result == xlXmlImportValidationFailed) {
        alert("导入XML数据文件失败")
    }
}
```


```JavaScript
/*此示例将XML文件导入第一个工作簿的第一项XmlMap对应的单元格中（不覆盖现有数据）。*/
function test() {
    const result = Workbooks.Item(1).XmlMaps.Item(1).Import("D:/test.xml")
    if (result == xlXmlImportSuccess) {
        alert("导入XML数据文件成功")
    } else {
        alert("导入XML数据文件失败或被截断")
    }
}
```
