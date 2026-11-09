# Application.DecimalSeparator

设置或返回用作小数分隔符的字符。 **String** 类型，可读写。



## 语法

express.**DecimalSeparator**

express   一个代表 **Application** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例将“1,234,567.89”放置在单元格 A1 中，然后将系统的小数分隔符和千位分隔符更改为短划线。*/
function test() {
    Range("A1").Formula = "1,234,567.89"
    MsgBox("The system separators will now change.")
    //Define separators and apply.
    Application.DecimalSeparator = "-"
    Application.ThousandsSeparator = "-"
    Application.UseSystemSeparators = false
}
```


```JavaScript
/*本示例判断如果DecimalSeparator属性的值为“-”，则将DecimalSeparator属性的值设置为“/”，通知用户后，设置为“-”。*/
function test() {
    if (Application.DecimalSeparator == "-") {
        Application.DecimalSeparator = "/"
        alert("当前小数分隔符为：" + Application.DecimalSeparator)
        Application.DecimalSeparator = "-"
    }
}
```
