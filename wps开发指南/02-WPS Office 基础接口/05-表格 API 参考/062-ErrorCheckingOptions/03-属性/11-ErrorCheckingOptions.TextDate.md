# ErrorCheckingOptions.TextDate

如果设置为 **True** （默认值），则 ET 将使用 **“自动更正选项”** 按钮识别包含用两位数字表示年份的文本日期的单元格。如果该属性值为 **False** ，则禁用此类单元格的错误检查。 **Boolean** 类型，可读写。



## 语法

express.**TextDate**

express   一个代表 **ErrorCheckingOptions** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*下例中“自动更正选项”按钮将出现在单元格 A1 旁，该单元格包含用两位数字表示年份的文本日期。*/
function test() {
    //Simulate an error by referencing a text date with a two-digit year.
    Application.ErrorCheckingOptions.TextDate = true
    Range("A1").Formula = "'00/4/23"
}
```


```JavaScript
/*本示例显示 ErrorCheckingOptions 对象的 TextDate 属性值。*/
function test() {
    alert(Application.ErrorCheckingOptions.TextDate)
}
```
