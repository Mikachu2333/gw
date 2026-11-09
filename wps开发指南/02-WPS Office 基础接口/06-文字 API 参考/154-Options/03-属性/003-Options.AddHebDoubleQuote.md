# Options.AddHebDoubleQuote

如果 WPS 会将数字格式括在双引号（"）中，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**AddHebDoubleQuote**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 将数字格式括在双引号（"）中。*/
function test() {
    Options.AddHebDoubleQuote = true
}
```


```JavaScript
/*本示例判断如果 WPS 会将数字格式括在双引号（"）中，则通知用户。*/
function test() {
    if (Application.Options.AddHebDoubleQuote) {
        alert(`WPS 会将数字格式括在双引号（"）中`)
    }
}
```
