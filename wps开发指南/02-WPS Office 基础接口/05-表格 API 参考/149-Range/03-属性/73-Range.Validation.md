# Range.Validation

返回一个 **[Validation](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Validation/obj)** 对象，该对象表示指定区域的数据有效性检验。只读。



## 语法

express.**Validation**

express   一个代表 **Range** 对象的变量。

## 类型

Validation

## 示例


```JavaScript
/*本示例使单元格 E5 的数据有效性检验为允许有空值。*/
function test() {
    Range("E5").Validation.IgnoreBlank = true
}
```


```JavaScript
/*本示例为 G5 单元格添加数据有效性验证*/
function test() {
    let validation = Application.Range("G5").Validation
    validation.Add(xlValidateWholeNumber,  xlValidAlertStop, xlBetween, "1", "100")
    validation.InputTitle = "Integers"
    validation.ErrorTitle = "Integers"
    validation.InputMessage = "Enter an integer from 1 to 100"
    validation.ErrorMessage = "You must enter a number from 1 to 100"
}
```
