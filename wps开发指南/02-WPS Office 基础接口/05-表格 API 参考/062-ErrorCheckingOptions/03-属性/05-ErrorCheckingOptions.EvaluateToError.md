# ErrorCheckingOptions.EvaluateToError

如果该属性设置为 **True** （默认值），则 ET 将使用 **“自动更正选项”** 按钮识别被选中的单元格，这些单元格中包含计算结果错误的公式。如果该值为 **False** ，则禁用对计算结果为错误值的单元格的错误检查。 **Boolean** 类型，可读写。



## 语法

express.**EvaluateToError**

express   一个代表 **ErrorCheckingOptions** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*在本示例中，单元格 A3 旁出现“自动更正选项”按钮，该单元格包括一个被零除的错误*/
function test() {
    //Simulate a divide-by-zero error.
    Application.ErrorCheckingOptions.EvaluateToError = true
    Range("A1").Value2 = 1
    Range("A2").Value2 = 0
    Range("A3").Formula = "=A1/A2"
}
```


```JavaScript
/*本示例显示 ErrorCheckingOptions 对象的 EvaluateToError 属性值。*/
function test() {
    alert(Application.ErrorCheckingOptions.EvaluateToError)
}
```
