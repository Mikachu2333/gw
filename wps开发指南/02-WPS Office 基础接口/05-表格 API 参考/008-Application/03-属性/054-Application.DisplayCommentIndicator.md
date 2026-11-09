# Application.DisplayCommentIndicator

返回或设置单元格显示批注和标识符的方式。可以是 **[XlCommentDisplayMode](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlCommentDisplayMode)** 常量之一。



## 语法

express.**DisplayCommentIndicator**

express   一个代表 **Application** 对象的变量。

## 类型

XlCommentDisplayMode

## 示例


```JavaScript
/*本示例隐藏单元格提示，但保留批注标识符。*/
function test() {
    Application.DisplayCommentIndicator = xlCommentIndicatorOnly
}
```


```JavaScript
/*本示例演示不显示批注也不显示标识符。*/
function test() {
    Application.DisplayCommentIndicator = xlNoIndicator
}
```
