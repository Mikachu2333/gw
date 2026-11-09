# Application.DefaultSaveFormat

返回或设置保存文件的默认格式。要获取有效常量的列表，请参阅 **[FileFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/FileFormat)** 属性。 **Long** 类型，可读写。



## 语法

express.**DefaultSaveFormat**

express   一个代表 **Application** 对象的变量。

## 类型

XlFileFormat

## 示例


```JavaScript
/*本示例设置保存文件的默认格式。*/
function test() {
    Application.DefaultSaveFormat = xlExcel4Workbook
}
```


```JavaScript
/*本示例判断如果DefaultSaveFormat属性的值为xlOpenXMLWorkbook，则将其设置为xlOpenXMLStrictWorkbook，并通知用户。*/
function test() {
    if (Application.DefaultSaveFormat == xlOpenXMLWorkbook) {
        Application.DefaultSaveFormat = xlOpenXMLStrictWorkbook
        alert("已设置保存文件的默认格式")
    }
}
```
