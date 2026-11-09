# Application.ErrorCheckingOptions

返回一个 **[ErrorCheckingOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ErrorCheckingOptions/obj)** 对象，该对象表示应用程序的错误检查选项。



## 语法

express.**ErrorCheckingOptions**

express   一个代表 **Application** 对象的变量。

## 类型

ErrorCheckingOptions

## 示例


```JavaScript
/*在本示例中，TextDate 属性与 ErrorCheckingOptions 属性结合使用。当用户选中日期中包含两位数年份的单元格时，将显示“自动更正选项”按钮*/
function test() {
    //Enable Microsoft Excel to identify dates written as text.
    Application.ErrorCheckingOptions.TextDate = true
    Range("A1").Formula = "'00/4/23"
}
```


```JavaScript
/*本示例演示当用户选择单元格A1设置 =A2/A3 公式，在单元格 A1 显示“ 自动更正选项” 按钮，其中包含一个除零错误。*/
function test() {
    Application.ErrorCheckingOptions.EvaluateToError = true
    Range("A1").Select()
    ActiveCell.Formula = "=A2/A3"
}
```
