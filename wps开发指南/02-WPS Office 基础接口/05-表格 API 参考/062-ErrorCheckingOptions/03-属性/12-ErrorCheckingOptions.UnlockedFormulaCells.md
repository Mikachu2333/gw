# ErrorCheckingOptions.UnlockedFormulaCells

如果该值为 **True** （默认值），则 ET 将识别未锁定并包含一个公式的选定单元格。如果该值为 **False** ，则禁用包含公式的未锁定单元格的错误检查。 **Boolean** 类型，可读写。



## 语法

express.**UnlockedFormulaCells**

express   一个代表 **ErrorCheckingOptions** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例中，“自动更正选项”按钮出现在单元格 A3 旁，该单元格是一个包含公式的未锁定单元格。*/
function test() {
    Application.ErrorCheckingOptions.UnlockedFormulaCells = true
    Range("A1").Value2 = 1
    Range("A2").Value2 = 2
    Range("A3").Formula = "=A1+A2"
    Range("A3").Locked = false
}
```


```JavaScript
/*本示例显示 ET 是否识别未锁定并包含一个公式的选定单元格。*/
function test() {
    alert(Application.ErrorCheckingOptions.UnlockedFormulaCells)
}
```
