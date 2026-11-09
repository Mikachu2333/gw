# ErrorCheckingOptions.OmittedCells

如果该值为 **True** （默认值），则 ET 将用“自动更正选项”按钮识别包含公式的选定单元格，其中该公式引用的区域应包括相邻单元格，但这些单元格却被遗漏掉了。如果该值为 **False** ，则禁用对被遗漏单元格的错误检查。 **Boolean** 类型，可读写。



## 语法

express.**OmittedCells**

express   一个代表 **ErrorCheckingOptions** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*下例中，“自动更正选项”按钮出现在包含公式的单元格 A4 旁。*/
function test() {
    Application.ErrorCheckingOptions.OmittedCells = true
    Range("A1").Value2 = 1
    Range("A2").Value2 = 2
    Range("A3").Value2 = 3
    Range("A4").Formula = "=Sum(A1:A2)"
}
```


```JavaScript
/*本示例显示 ErrorCheckingOptions 对象的 OmittedCells 属性值。*/
function test() {
    alert(Application.ErrorCheckingOptions.OmittedCells)
}
```
