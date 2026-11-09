# SpellingOptions.IgnoreMixedDigits

如果该属性值为 **False** ，则指示 ET 检查混合数字。如果该值为 **True** ，则指示 ET 在检查拼写时忽略混合数字。 **Boolean** 类型，可读写。



## 语法

express.**IgnoreMixedDigits**

express   一个代表 **SpellingOptions** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例中，ET 决定在检查混合数字的拼写时使用何种设置，并通知用户。*/
function test() {
    if (Application.SpellingOptions.IgnoreMixedDigits) {
        alert("Spelling options for checking mixed digits is disabled.")
    } else {
        alert("Spelling options for checking mixed digits is enabled.")
    }
}
```


```JavaScript
/*本示例设置 ET 在检查拼写时检查混合数字。*/
function test() {
    Application.SpellingOptions.IgnoreMixedDigits = false
}
```
