# Options.PrintHiddenText

如果打印隐藏文字，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**PrintHiddenText**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 说明


如果将 **PrintHiddenText** 属性设置为 **False** ，则 **[PrintComments](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/PrintComments)** 属性将自动设置为 **False** 。但是，如果将 **PrintHiddenText** 属性设置为 **True** ，不会影响到 **PrintComments** 属性的设置。



## 示例


```JavaScript
/*本示例将 WPS 设置为打印隐藏文字，然后打印活动文档。*/
function test() {
    Options.PrintHiddenText = true
    ActiveDocument.PrintOut()
}
```


```JavaScript
/*本示例显示 WPS 是否打印隐藏文字。*/
function test() {
    alert(Options.PrintHiddenText)
}
```
