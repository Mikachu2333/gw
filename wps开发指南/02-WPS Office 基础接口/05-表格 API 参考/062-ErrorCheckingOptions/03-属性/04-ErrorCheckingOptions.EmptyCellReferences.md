# ErrorCheckingOptions.EmptyCellReferences

如果该属性设置为 **True** （默认值），则 ET 使用 **“自动更正选项”** 按钮识别被选取的单元格，这些单元格中包括引用了空单元格的公式。如果该值为 **False** ，则禁用空单元格引用检查。 **Boolean** 类型，可读写。



## 语法

express.**EmptyCellReferences**

express   一个代表 **ErrorCheckingOptions** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*在本示例中，单元格 A1 旁出现“自动更正选项”按钮，该单元格包括引用空单元格的公式。*/
function test() {
    Application.ErrorCheckingOptions.EmptyCellReferences = true
    Range("A1").Formula = "=A2+A3"
}
```


```JavaScript
/*本示例显示 ErrorCheckingOptions 对象的 EmptyCellReferences 属性值。*/
function test() {
    alert(Application.ErrorCheckingOptions.EmptyCellReferences)
}
```
