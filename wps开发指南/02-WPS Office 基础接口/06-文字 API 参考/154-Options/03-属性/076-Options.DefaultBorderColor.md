# Options.DefaultBorderColor

返回或设置用于新的 **[Border](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Border/obj)** 对象的默认 24 位颜色。可读写。



## 语法

express.**DefaultBorderColor**

express   一个代表 **Options** 对象的变量。

## 类型

WdColor

## 说明


可以是任何有效的 **WdColor** 常量或 JavaScript 的 **RGB** 函数返回的值。



## 示例


```JavaScript
/*本示例将新边框的默认颜色设为蓝绿色。*/
function test() {
    Options.DefaultBorderColor = wdColorTeal
}
```


```JavaScript
/*本示例显示新边框的默认颜色是否为红色。*/
function test() {
    alert(Options.DefaultBorderColor == wdColorRed)
}
```
