# ErrorCheckingOptions.BackgroundChecking

警告用户并指出违背可用错误检查规则的所有单元格。如果该属性设置为 **True** （默认值），则在违背启用错误的所有单元格旁边将出现 **“自动更正选项”** 按钮。如果为 **False** ，则禁用后台错误检查。 **Boolean** 类型，可读写。



## 语法

express.**BackgroundChecking**

express   一个代表 **ErrorCheckingOptions** 对象的变量。

## 类型

boolean

## 说明


请参考 **ErrorCheckingOptions** 对象以查阅该对象的可用成员列表。



## 示例


```JavaScript
/*在下例中，当用户选择单元格 A1（该单元格包含引用空单元格的公式）时，将出现“自动更正选项”按钮。*/
function test() {
    //Simulate an error by referring to empty cells.
    Application.ErrorCheckingOptions.BackgroundChecking = true
    Range("A1").Select()
    ActiveCell.Formula = "=A2/A3"
}
```


```JavaScript
/*本示例显示 ErrorCheckingOptions 对象的 BackgroundChecking 属性值。*/
function test() {
    alert(Application.ErrorCheckingOptions.BackgroundChecking)
}
```
