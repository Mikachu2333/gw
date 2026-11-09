# PageSetup.Orientation

返回或设置一个 **[XlPageOrientation](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlPageOrientation)** 值，它代表纵向或横向打印模式。



## 语法

express.**Orientation**

express   一个代表 **PageSetup** 对象的变量。

## 类型

XlPageOrientation

## 示例


```JavaScript
/*本示例将 Sheet1 设置为横向打印。*/
function test() {
    Application.Worksheets.Item("Sheet1").PageSetup.Orientation = xlLandscape
}
```


```JavaScript
/*本示例将活动工作表设置为纵向打印。*/
function test() {
    ActiveSheet.PageSetup.Orientation = xlPortrait
}
```
