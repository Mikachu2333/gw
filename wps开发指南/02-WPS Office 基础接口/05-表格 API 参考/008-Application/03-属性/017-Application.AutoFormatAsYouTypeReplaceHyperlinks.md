# Application.AutoFormatAsYouTypeReplaceHyperlinks

如果 ET 按照键入的内容自动设置超链接的格式，则该值为 **True** （默认）。如果 ET 不按照键入的内容自动设置超链接的格式，则该值为 **False** 。 **Boolean** 类型，可读写。



## 语法

express.**AutoFormatAsYouTypeReplaceHyperlinks**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*在本示例中，ET 判断是否可按照键入的内容自动设置超链接的格式，并通知用户。*/
function test() {
    //Determine if automatic formatting is enabled and notify user.
    if (Application.AutoFormatAsYouTypeReplaceHyperlinks) {
        MsgBox("Automatic formatting for typing in hyperlinks is enabled.")
    } else {
        MsgBox("Automatic formatting for typing in hyperlinks is not enabled.")
    }
}
```


```JavaScript
/*本示例演示 AutoFormatAsYouTypeReplaceHyperlinks 属性的数据类型，并将 AutoFormatAsYouTypeReplaceHyperlinks 属性的值设置为false。*/
function test() {
    alert("AutoFormatAsYouTypeReplaceHyperlinks属性的数据类型为：" + typeof Application.AutoFormatAsYouTypeReplaceHyperlinks)
    Application.AutoFormatAsYouTypeReplaceHyperlinks = false
}
```
