# Worksheet.PageSetup

返回一个 **[PageSetup](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/obj)** 对象，它包含用于指定对象的所有页面设置。只读。



## 语法

express.**PageSetup**

express   一个代表 **Worksheet** 对象的变量。

## 类型

PageSetup

## 示例


```JavaScript
/*以下示例将打印方向设置为横向模式，然后打印工作表。*/
function test() {
    Worksheets.Item("Sheet1").PageSetup.Orientation = xlLandscape
    Worksheets.Item("Sheet1").PrintOut()
}
```


```JavaScript
/*本示例将活动工作表的页眉边距设置为 0.5 英寸，底端边距设为 36 磅。*/
function test() {
    ActiveSheet.PageSetup.HeaderMargin = Application.InchesToPoints(0.5)
    ActiveSheet.PageSetup.BottomMargin = 36
}
```
