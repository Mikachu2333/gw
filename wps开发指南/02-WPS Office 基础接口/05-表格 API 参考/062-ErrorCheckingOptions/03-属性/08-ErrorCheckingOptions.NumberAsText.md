# ErrorCheckingOptions.NumberAsText

如果该值为 **True** （默认值），则 ET 将用 **“自动更正选项”** 按钮识别被选定的单元格，这些单元格包含文本格式的数字。如果该值为 **False** ，则禁用对文本格式数字的错误检查。 **Boolean** 类型，可读写。



## 语法

express.**NumberAsText**

express   一个代表 **ErrorCheckingOptions** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*在本示例中，包含文本格式数字的单元格 A1 旁出现“自动更正选项”按钮。*/
function test() {
    //Simulate an error by referencing a number stored as text.
    Application.ErrorCheckingOptions.NumberAsText = true
    Range("A1").Value2 = "'1"
}
```


```JavaScript
/*本示例判断 ET 是否用“自动更正选项”按钮识别被选定的单元格，这些单元格包含文本格式的数字，并通知用户。*/
function test() {
    if (Application.ErrorCheckingOptions.NumberAsText) {
        alert("ET 将用“自动更正选项”按钮识别被选定的单元格")
    } else {
        alert("ET 禁用对文本格式数字的错误检查")
    }
}
```
