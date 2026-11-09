# Document.PageSetup

返回一个与指定文档相关联的 **[PageSetup](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageSetup/obj)** 对象。



## 语法

express.**PageSetup**

express   一个代表 **Document** 对象的变量。

## 类型

PageSetup

## 示例


```JavaScript
/*本示例将活动文档的右边距设置为 72 磅（1 英寸）*/
function test() {
    ActiveDocument.PageSetup.RightMargin = Application.InchesToPoints(1)
}
```


```JavaScript
/*本示例以英寸为单位显示左边距的设置。*/
function test() {
    alert(PointsToInches(ActiveDocument.PageSetup.LeftMargin) + " inches")
}
```
