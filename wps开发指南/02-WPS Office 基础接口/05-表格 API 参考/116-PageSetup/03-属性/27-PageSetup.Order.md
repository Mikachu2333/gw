# PageSetup.Order

返回或设置一个 **[XlOrder](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlOrder)** 值，它代表 ET 打印一张大工作表时所使用的页编号的次序。



## 语法

express.**Order**

express   一个代表 **PageSetup** 对象的变量。

## 类型

XlOrder

## 示例


```JavaScript
/*本示例设置打印 Sheet1 时将其分为多页打印。按照从左到右，从上到下的顺序编号和打印。*/
function test() {
    Application.Worksheets.Item("Sheet1").PageSetup.Order = xlOverThenDown
}
```


```JavaScript
/*本示例设置打印活动工作表时将其分为多页打印。按照从上到下，从左到右的顺序编号和打印。*/
function test() {
    ActiveSheet.PageSetup.Order = xlDownThenOver
}
```
