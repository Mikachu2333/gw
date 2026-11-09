# Style.IncludeFont

如果样式包含 **[Background](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Font/member/Background)** 、 **[Bold](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Font/member/Bold)** 、 **Color** 、 **[ColorIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Font/member/ColorIndex)** 、 **[FontStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Font/member/FontStyle)** 、 **[Italic](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Font/member/Italic)** 、 **[Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Name/obj)** 、 **Size** 、 **[Strikethrough](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Font/member/Strikethrough)** 、 **[Subscript](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Font/member/Subscript)** 、 **[Superscript](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Font/member/Superscript)** 和 **[Underline](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Font/member/Underline)** 字体属性，则此属性为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**IncludeFont**

express   一个代表 **Style** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例在 Sheet1 的 A1 单元格样式中加入字体格式。*/
function test() {
    Application.Worksheets.Item("Sheet1").Range("A1").Style.IncludeFont = true
}
```


```JavaScript
/*本示例显示活动工作表中B2单元格样式是否加入字体格式。*/
function test() {
    let range = ActiveSheet.Range("B2")
    alert(range.Style.IncludeFont)
}
```
