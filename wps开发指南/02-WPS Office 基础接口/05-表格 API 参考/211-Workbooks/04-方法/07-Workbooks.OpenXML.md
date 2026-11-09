# Workbooks.OpenXML

打开一个 XML 数据文件。返回一个 **[Workbook](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/obj)** 对象。



## 语法

express.**OpenXML(Filename, Stylesheets, LoadOption)**

express   一个代表 **Workbooks** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Filename | 必选 | string | 要打开的文件的名称。 |
| Stylesheets | 可选 | any | 单个值或值的数组，用于指定要应用的 XSL 转换 (XSLT) （XSL 转换 (XSLT)：用来将 XML 文档转换为其他类型的文档的语言，例如，HTML 或 XML。其用途为执行部分 XSL 功能。）样式表处理指令。 |
| LoadOption | 可选 | any | 指定 ET 打开 XML 数据文件的方式。可以是下列 **[XlXmlLoadOption](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlXmlLoadOption)** 常量之一。 |

## 返回值

Workbook

## 说明


| **XlXmlLoadOption** 可以是下列 **XlXmlLoadOption** 常量之一。                     |
| ----------------------------------------------------------------------- |
| **xlXmlLoadImportToList** 自动创建一个 XML 列表并将数据导入该列表中。                      |
| **xlXmlLoadMapXml** 将 XML 文件加载到 **“XML源”** 任务窗格中。                        |
| **xlXmlLoadOpenXml** 打开 XML 文件的方式与 ET 2002 打开 XML 文件的方式相同（只为提供向后兼容）。 |
| **xlXmlLoadPromptUser** 提示用户并允许用户选择 Import 方法。                          |



## 示例


```JavaScript
/*下面的代码打开 XML 数据文件“customers.xml”并在 XML 列表中显示此文件的内容。*/
function test() {
    Application.Workbooks.OpenXML("Customers.xml", undefined, xlXmlLoadImportToList)
}
```


```JavaScript
/*本示例打开“data.xml”文件，并将 XML 数据文件的打开方式设置为xlXmlLoadOpenXml。*/
function test() {
    Application.Workbooks.OpenXML("D:\\data.xml", null, xlXmlLoadOpenXml)
}
```
