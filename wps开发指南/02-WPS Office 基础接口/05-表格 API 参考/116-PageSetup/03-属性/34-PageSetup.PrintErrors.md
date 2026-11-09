# PageSetup.PrintErrors

设置或返回一个 **[XlPrintErrors](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlPrintErrors)** 常量，该常量指定显示的打印错误类型。该功能允许用户在打印工作表时取消错误显示。可读写。



## 语法

express.**PrintErrors**

express   一个代表 **PageSetup** 对象的变量。

## 类型

XlPrintErrors

## 说明


| **[XlPrintErrors](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlPrintErrors)** 可为以下 **XlPrintErrors** 常量之一。 |
| --------------------------------------------------------------------- |
| **xlPrintErrorsBlank**                                                |
| **xlPrintErrorsDash**                                                 |
| **xlPrintErrorsDisplayed**                                            |
| **xlPrintErrorsNA**                                                   |



## 示例


```JavaScript
/*在本示例中，ET 在活动工作表中使用返回错误的公式。设置 PrintErrors 属性以显示短划线。打印预览窗口显示打印错误的短划线。(假定已安装了打印驱动器)*/
function test() {
    let wksOne = Application.ActiveSheet
    // Create a formula that returns an error value.
    Range("A1").Value2 = 1
    Range("A2").Value2 = 0
    Range("A3").Formula = "=A1/A2"
    // Change print errors to display dashes.
    wksOne.PageSetup.PrintErrors = xlPrintErrorsDash
    //Use the Print Preview window to see the dashes used for print errors.
    ActiveWindow.SelectedSheets.PrintPreview()
}
```


```JavaScript
/*本示例中 Sheet1 添加错误的公式。设置 PrintErrors 属性以显示不可用。打印预览窗口显示打印错误为不可用。(假定已安装了打印驱动器)*/
function test() {
    let sheet = Application.Worksheets.Item("Sheet1")
    sheet.Range("C3").Value2 = 3
    sheet.Range("C4").Value2 = 0
    sheet.Range("C5").Formula = "=C3/C4"
    sheet.PageSetup.PrintErrors = xlPrintErrorsNA
    sheet.PrintPreview()
}
```
