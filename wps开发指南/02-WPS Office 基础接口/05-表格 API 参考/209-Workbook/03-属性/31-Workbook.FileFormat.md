# Workbook.FileFormat

返回工作簿的文件格式和/或类型。[XlFileFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlFileFormat)类型，只读。



## 语法

express.**FileFormat**

express   一个代表 **Workbook** 对象的变量。

## 类型

XlFileFormat

## 说明


这些常量中的某些可能不可用，这取决于选择或安装的语言支持（例如，美国英语）。



## 示例


```JavaScript
/*本示例检查当前工作簿文件格式是否为 Excel9795 格式，如果是，则按常规文件格式保存该工作簿。*/
function test() {
    if (Application.ActiveWorkbook.FileFormat == xlExcel9795) {
        Application.ActiveWorkbook.SaveAs(null, xlExcel12)
    }
}
```


```JavaScript
/*本示例演示当前工作簿FileFormat属性的值。*/
function test() {
    alert("当前工作簿FileFormat属性的值为：" + Application.ActiveWorkbook.FileFormat)
}
```
