# PageSetup.PrintComments

返回或设置批注随工作表打印的方式。 **[XlPrintLocation](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlPrintLocation)** 类型，可读写。



## 语法

express.**PrintComments**

express   一个代表 **PageSetup** 对象的变量。

## 类型

XlPrintLocation

## 说明


| **XlPrintLocation** 可为以下 **XlPrintLocation** 常量之一。 |
| -------------------------------------------------- |
| **xlPrintInPlace**                                 |
| **xlPrintNoComments**                              |
| **xlPrintSheetEnd**                                |



## 示例


```JavaScript
/*本示例在打印第一张工作表时，使批注以尾注的方式打印。*/
function test() {
    Application.Worksheets.Item(1).PageSetup.PrintComments = xlPrintSheetEnd
}
```


```JavaScript
/*本示例打印工作表时，使注释打印在工作表上插入的位置。*/
function test() {
    ActiveSheet.PageSetup.PrintComments = xlPrintInPlace
}
```
