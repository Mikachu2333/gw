# PageSetup.PageHeight

返回或设置页面高度（以磅为单位）。 **Single** 类型，可读写。



## 语法

express.**PageHeight**

express   一个代表 **PageSetup** 对象的变量。

## 类型

number（float 精度）

## 说明


如果设置了 **PageHeight** 属性，则 **[PaperSize](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageSetup/member/PaperSize)** 属性会改为 **wdPaperCustom** 。使用 **PaperSize** 属性可设置预定义大小的纸张的页面高度和宽度，例如 Letter 或 A4 纸。



## 示例


```JavaScript
/*本示例将活动文档的页面高度设置为 9 英寸。*/
function test() {
    Application.ActiveDocument.PageSetup.PageHeight = InchesToPoints(9)
    Application.ActiveDocument.PageSetup.PageWidth = InchesToPoints(7)
}
```


```JavaScript
/*本示例显示活动文档第一节的页面高度。*/
function test() {
    alert(ActiveDocument.Sections.Item(1).PageSetup.PageHeight)
}
```
