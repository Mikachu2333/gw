# Font 对象

包含对象的字体属性（字体名称、字号、颜色等等）。

## 说明


如果不想将单元格中的文本或图形设为相同的格式，则使用 **Characters** 属性返回文本的子集。

使用 **Font** 属性可返回 **Font** 对象。


## 示例


```JavaScript
/*本示例将工作表 Sheet1中单元格 A1:C5 区域中的字体设为加粗*/
function test() {
    Application.Worksheets.Item("Sheet1").Range("A1:C5").Font.Bold = true
}
```


```JavaScript
/*此示例显示第一个工作表中D1单元格的字体样式*/
function test() {
    let font = Application.Worksheets.Item(1).Range("D1").Font
    alert(`字体样式为 ${font.FontStyle}`)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Font/member/Application) | 如果不使用对象识别符，则该属性返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Background](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Font/member/Background) | 返回或设置图表中使用的文本的背景类型。 **Variant** 类型，可读写。可将其设置为 **[XlBackground](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlBackground)** 常量之一。 |
| [Bold](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Font/member/Bold) | 如果字体格式为加粗，则该属性值为 **True** 。 **Variant** 类型，可读写。 |
| [Color](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Font/member/Color) | 返回或设置对象的主要颜色，如注释部分中的表格所示。使用 **RGB** 函数可创建颜色值。 **Variant** 型，可读写。 |
| [ColorIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Font/member/ColorIndex) | 返回或设置一个 **Variant** 值，它代表字体的颜色。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Font/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [FontStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Font/member/FontStyle) | 返回或设置字体样式。 **String** 类型，可读写。 |
| [Italic](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Font/member/Italic) | 如果字体样式为倾斜，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Font/member/Name) | 返回或设置一个 **Variant** 值，它代表对象的名称。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Font/member/Parent) | 返回指定对象的父对象。只读。 |
| [Size](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Font/member/Size) | 返回或设置字号。可读/写 **Variant** 类型。 |
| [Strikethrough](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Font/member/Strikethrough) | 如果文字中间有一条水平删除线，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [Subscript](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Font/member/Subscript) | 如果字体格式设置为下标，则该属性值为 **True** 。默认值为 **False** 。 **Variant** 类型，可读写。 |
| [Superscript](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Font/member/Superscript) | 如果字体格式设置为上标字符，则该属性值为 **True** ；默认值为 **False** 。 **Variant** 类型，可读写。 |
| [ThemeColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Font/member/ThemeColor) | 返回或设置已应用的配色方案中的主题颜色，该配色方案与指定对象相关联。可读/写 **Variant** 类型。 |
| [ThemeFont](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Font/member/ThemeFont) | 返回或设置与指定对象关联的应用字体方案中的主题字体。可读/写 **[XlThemeFont](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlThemeFont)** 类型。 |
| [TintAndShade](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Font/member/TintAndShade) | 返回或设置一个 **Single** ，使颜色变深或变浅。 |
| [Underline](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Font/member/Underline) | 返回或设置应用于字体的下划线类型。可为以下 **[XlUnderlineStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlUnderlineStyle)** 常量之一。 **Variant** 类型，可读写。 |