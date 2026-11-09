# ErrorCheckingOptions.InconsistentFormula

如果该值为 **True** （默认值），则 ET 将识别包含不一致公式的单元格区域。如果该值为 **False** ，则禁用不一致公式的检查。 **Boolean** 类型，可读写。



## 语法

express.**InconsistentFormula**

express   一个代表 **ErrorCheckingOptions** 对象的变量。

## 类型

boolean

## 说明


单元格区域中相一致的公式必须位于包含不一致的公式的单元格的左边、右边或上边、下边，以便 **InconsistentFormula** 属性正常工作。



## 示例


```JavaScript
/*在本示例中，当用户选择单元格 B4（包含不一致的公式）时，将显示“自动更正选项”按钮。*/
function test() {
    Application.ErrorCheckingOptions.InconsistentFormula = true

    Range("A1:A3").Value2 = 1
    Range("B1:B3").Value2 = 2
    Range("C1:C3").Value2 = 3

    //Consistent formula.
    Range("A4").Formula = "=SUM(A1:A3)"
    //Inconsistent formula.
    Range("B4").Formula = "=SUM(B1:B2)"
    //Consistent formula.
    Range("C4").Formula = "=SUM(C1:C3)"
}
```


```JavaScript
/*本示例判断 ET 是否识别包含不一致公式的单元格区域，并通知用户。*/
function test() {
    if (Application.ErrorCheckingOptions.InconsistentFormula) {
        alert("ET 将识别包含不一致公式的单元格区域")
    } else {
        alert("ET 禁用不一致公式的检查")
    }
}
```
