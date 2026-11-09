# Style.AddIndent

返回或设置一个 **Boolean** 值，它指明当单元格中文本的对齐方式为水平或垂直等距分布时，文本是否为自动缩进。



## 语法

express.**AddIndent**

express   一个代表 **Style** 对象的变量。

## 类型

boolean

## 说明


如果将此属性的值设为 **True** ，那么在单元格中文本的对齐方式设为水平或垂直等距分布时，将自动缩进文本。

要将文本对齐方式设为等距分布，可在 [ **Orientation** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Style/member/Orientation) 属性的值为 [ **xlVertical** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlOrientation) 时，将 [ **VerticalAlignment** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Style/member/VerticalAlignment) 属性设为 **[xlVAlignDistributed](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlVAlign)** ；在 [ **Orientation** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Style/member/Orientation) 属性的值为 [ **xlHorizontal** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlOrientation) 时，将 [ **HorizontalAlignment** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Style/member/HorizontalAlignment) 属性设为 **[xlHAlignDistributed](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlHAlign)** 。



## 示例


```JavaScript
/*本示例为A1单元格添加文本，并显示A1单元格文本是否自动缩进。*/
function test() {
    Range("A1").Value2 = "示例文本1"
    alert(Range("A1").Style.AddIndent)
}
```


```JavaScript
/*本示例将B1单元格的文本设置为自动缩进。*/
function test() {
    Range("B1").Style.AddIndent = true
}
```
