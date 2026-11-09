# Options.PrintComments

如果 WPS 在文档后另起一页打印批注，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**PrintComments**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 说明


如果将 **PrintComments** 属性设置为 **True** ，则 **[PrintHiddenText](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/PrintHiddenText)** 属性将自动设置为 **True** 。但是，如果将 **PrintComments** 属性设置为 **False** ，不会影响到 **PrintHiddenText** 属性的设置。



## 示例


```JavaScript
/*本示例将 WPS 设置为在文档后另起一页打印批注，然后打印活动文档。*/
function test() {
    Options.PrintComments = true
    ActiveDocument.PrintOut()
}
```


```JavaScript
/*本示例判断如果 WPS 在文档后另起一页打印批注，则通知用户。*/
function test() {
    if (Options.PrintComments) {
        alert("WPS 在文档后另起一页打印批注。")
    }
}
```
