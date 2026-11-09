# Interior 对象

代表一个对象的内部。

## 说明


使用 **[Interior](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Interior/obj)** 属性可返回 **Interior** 对象。


## 示例


```JavaScript
/*此示例将 Sheet1 中 A1 单元格内部设置为红色。*/
function test() {
    Application.Worksheets.Item("Sheet1").Range("A1").Interior.ColorIndex = 3
}
```


```JavaScript
/*本示例在活动工作表中 A1:C4 区域单元格的内部添加十字线图案。*/
function test() {
    ActiveSheet.Range("A1:C4").Interior.Pattern = xlPatternCrissCross
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Interior/member/Application) | 如果不使用对象识别符，则该属性返回一个代表 ET 应用程序的 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象。如果使用对象识别符，则该属性返回一个代表指定对象的创建程序的 **Application** 对象（可对一个 OLE 自动化对象使用该属性来返回该对象的应用程序）。只读。 |
| [Color](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Interior/member/Color) | 返回或设置对象的主要颜色，如注释部分中的表格所示。使用 **RGB** 函数可创建颜色值。 **Variant** 型，可读写。 |
| [ColorIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Interior/member/ColorIndex) | 返回或设置一个 **Variant** 值，它代表内部颜色。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Interior/member/Creator) | 返回一个 32 位整数，该整数指示创建对象的应用程序。只读 **Long** 类型。 |
| [Gradient](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Interior/member/Gradient) | 返回或设置所选内容的 **Interior** 对象的 **Gradient** 属性。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Interior/member/Parent) | 返回指定对象的父对象。只读。 |
| [Pattern](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Interior/member/Pattern) | 返回或设置一个包含 **[xlPattern](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlPattern)** 常量的 **Variant** 值，它代表内部图案。 |
| [PatternColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Interior/member/PatternColor) | 以 RGB 值返回或设置内部图案的颜色。可读/写 **Variant** 类型。 |
| [PatternColorIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Interior/member/PatternColorIndex) | 返回或设置内部图案的颜色，表示为当前调色板中的颜色编号或下列 **[XlColorIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlColorIndex)** 常量之一： **xlColorIndexAutomatic** 或 **xlColorIndexNone** 。 **Long** 类型，可读写。 |
| [PatternThemeColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Interior/member/PatternThemeColor) | 返回或设置 **Interior** 对象的主题颜色图案。可读/写 **Variant** 类型。 |
| [PatternTintAndShade](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Interior/member/PatternTintAndShade) | 返回或设置 **Interior** 对象的淡色和底纹图案。可读/写 **Variant** 类型。 |
| [ThemeColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Interior/member/ThemeColor) | 返回或设置已应用的配色方案中的主题颜色，该配色方案与指定对象相关联。可读/写 **Variant** 类型。 |
| [TintAndShade](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Interior/member/TintAndShade) | 返回或设置一个 **Single** ，使颜色变深或变浅。 |