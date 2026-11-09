# Validation.InputMessage

返回或设置数据有效性检验输入信息。 **String** 类型，可读写。



## 语法

express.**InputMessage**

express   一个代表 **Validation** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例向单元格 E5 添加数据有效性检验，并指定输入信息和错误消息。*/
function test() {
    let validation = Application.Range("E5").Validation
    validation.Add(xlValidateWholeNumber, xlValidAlertStop, xlBetween, "5", "10")
    validation.InputTitle = "Integers"
    validation.ErrorTitle = "Integers"
    validation.InputMessage = "Enter an integer from five to ten"
    validation.ErrorMessage = "You must enter a number from five to ten"
}
```


```JavaScript
/*本示例显示活动工作表上单元格 E1 的数据有效性检验的输入信息。*/
function test() {
    let validation = ActiveSheet.Range("E1").Validation
    alert(validation.InputMessage)
}
```
