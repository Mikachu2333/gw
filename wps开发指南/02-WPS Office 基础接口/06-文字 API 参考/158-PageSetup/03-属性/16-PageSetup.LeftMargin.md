# PageSetup.LeftMargin

返回或设置页面左边缘与正文左边界之间的距离（以磅为单位）。 **Single** 类型，可读写。



## 语法

express.**LeftMargin**

express   一个代表 **PageSetup** 对象的变量。

## 类型

number（float 精度）

## 说明


如果将 **[MirrorMargins](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageSetup/member/MirrorMargins)** 属性设置为 **msoTrue** ，则 LeftMargin 属性将控制内边距的设置，而 **[RightMargin](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageSetup/member/RightMargin)** 属性将控制外边距的设置。



## 示例


```JavaScript
/*本示例将活动文档第二节的左边距设置为 1 英寸（72 磅）。*/
function test() {
    ActiveDocument.Sections.Item(2).PageSetup.LeftMargin = 72
}
```


```JavaScript
/*本示例显示第一个文档的左边距。*/
function test() {
    alert(`${Documents.Item(1).PageSetup.LeftMargin} 磅`)
}
```
