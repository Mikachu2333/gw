# PageSetup.MirrorMargins

如果对开页的内外边距宽度相等，则该属性值为 **msoTrue** 。 **Long** 类型，可读写



## 语法

express.**MirrorMargins**

express   一个代表 **PageSetup** 对象的变量。

## 类型

number（int4 精度）

## 说明


 **MirrorMargins** 属性可为 **msoTrue** 、 **msoFalse** 或 **wdUndefined** 。如果将 **MirrorMargins** 属性设为 **msoTrue** ，则 **[LeftMargin](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageSetup/member/LeftMargin)** 属性将控制内边距的设置，而 **[RightMargin](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageSetup/member/RightMargin)** 属性将控制外边距的设置。



## 示例


```JavaScript
/*本示例将活动文档的内边距设置为 1 英寸（72 磅），将外边距设置为 0.5 英寸。可以使用 InchesToPoints 方法将英寸转换为磅值。*/
function test() {
    let pagesetup = ActiveDocument.PageSetup
    pagesetup.MirrorMargins = msoTrue
    pagesetup.LeftMargin = 72
    pagesetup.RightMargin = InchesToPoints(0.5)
}
```


```JavaScript
/*本示例设置第一个文档的对开页的内外边距宽度相等，然后显示该文档的内边距和外边距。*/
function test() {
    let pagesetup = Documents.Item(1).PageSetup
    pagesetup.MirrorMargins = msoTrue
    alert(`内边距： ${pagesetup.LeftMargin} 磅\n外边距： ${pagesetup.RightMargin} 磅`)
}
```
