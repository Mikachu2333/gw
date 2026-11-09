# PageSetup.PageWidth

返回或设置页面宽度（以磅为单位）。 **Single** 类型，可读写。



## 语法

express.**PageWidth**

express   一个代表 **PageSetup** 对象的变量。

## 类型

number（float 精度）

## 说明


如果设置了 **PageWidth** 属性，则 **[PaperSize](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageSetup/member/PaperSize)** 属性将改为 **wdPaperCustom** 。使用 **PaperSize** 属性可设置预定义大小的纸张的页面高度和宽度，例如 Letter 或 A4 纸。



## 示例


```JavaScript
/*本示例显示 Document1.docx 的页面宽度。可用 PointsToInches 方法将磅值转换为英寸。*/
function test() {
    let pagesetup = Documents.Item("Document1.docx").PageSetup
    alert(`The page width is ${PointsToInches(pagesetup.PageWidth)} inches.`)
}
```


```JavaScript
/*本示例将活动文档的页面宽度设置为 9 英寸。*/
function test() {
    ActiveDocument.PageSetup.PageWidth = InchesToPoints(9)
}
```
