# Font.Underline

返回或设置应用于字体的下划线类型。可为以下 **[XlUnderlineStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlUnderlineStyle)** 常量之一。 **Variant** 类型，可读写。



## 语法

express.**Underline**

express   一个代表 **Font** 对象的变量。

## 类型

any

## 说明


| **XlUnderlineStyle** 可为以下 **XlUnderlineStyle** 常量之一。 |
| ---------------------------------------------------- |
| **xlUnderlineStyleNone**                             |
| **xlUnderlineStyleSingle**                           |
| **xlUnderlineStyleDouble**                           |
| **xlUnderlineStyleSingleAccounting**                 |
| **xlUnderlineStyleDoubleAccounting**                 |



## 示例


```JavaScript
/*本示例将 Sheet1 中活动单元格的字体设置为单下划线*/
function test() {
    Application.Worksheets.Item("Sheet1").Activate()
    Application.ActiveCell.Font.Underline = xlUnderlineStyleSingle
}
```


```JavaScript
/*本示例显示第一个工作表中单元格A6的字体的下划线类型是否为粗双下划线*/
function test() {
    let font = Application.Worksheets.Item(1).Range("A6").Font
    alert(font.Underline == xlUnderlineStyleDouble)
}
```
