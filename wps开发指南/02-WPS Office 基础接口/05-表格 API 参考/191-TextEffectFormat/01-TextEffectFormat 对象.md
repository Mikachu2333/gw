# TextEffectFormat 对象

包含应用于艺术字对象的属性和方法。

## 说明


使用 **TextEffect** 属性可返回一个 **TextEffectFormat** 对象。


## 示例


```JavaScript
/*下例为第一张工作表上的形状一设置字体名称及格式。要运行本示例，形状一必须是艺术字对象。*/
function test() {
    let worksheet = Application.Worksheets.Item(1)
    let TextEffect = worksheet.Shapes(1).TextEffect
    TextEffect.FontName = "Courier New"
    TextEffect.FontBold = true
    TextEffect.FontItalic = true
}
```


```JavaScript
/*此示例显示活动工作表的第三个艺术字的字号。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(3)
    alert(shape.TextEffect.FontSize)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [ToggleVerticalText](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextEffectFormat/member/ToggleVerticalText) | 将指定艺术字中的文字排列方向从水平切换为垂直，反之亦然。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Alignment](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextEffectFormat/member/Alignment) | 返回或设置一个 **MsoTextEffectAlignment** 值，它代表艺术字的对齐方式。 |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextEffectFormat/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextEffectFormat/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [FontBold](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextEffectFormat/member/FontBold) | 如果指定艺术字中的字体格式为加粗，则该属性值为 **msoTrue** 。 **MsoTriState** 类型，可读写。 |
| [FontItalic](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextEffectFormat/member/FontItalic) | 如果指定艺术字中的字体是倾斜的，则返回 **msoTrue** 。 **MsoTriState** 类型，可读写。 |
| [FontName](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextEffectFormat/member/FontName) | 返回或设置指定艺术字的字体名称。 **String** 类型，可读写。 |
| [FontSize](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextEffectFormat/member/FontSize) | 以磅为单位返回或设置指定艺术字的字体大小。 **Single** 类型，可读写。 |
| [KernedPairs](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextEffectFormat/member/KernedPairs) | 如果指定艺术字中的字符对是自动缩紧的，则该属性值为 **msoTrue** 。 **MsoTriState** 类型，可读写。 |
| [NormalizedHeight](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextEffectFormat/member/NormalizedHeight) | 如果指定艺术字中所有字符（无论大小写）均为同一高度，则该属性值为 **msoTrue** 。 **MsoTriState** 类型，可读写。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextEffectFormat/member/Parent) | 返回指定对象的父对象。只读。 |
| [PresetShape](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextEffectFormat/member/PresetShape) | 返回或设置指定艺术字的形状样式。 **MsoPresetTextEffectShape** 类型，可读写。 |
| [PresetTextEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextEffectFormat/member/PresetTextEffect) | 返回或设置指定艺术字的样式。 **MsoPresetTextEffect** 类型，可读写。 |
| [RotatedChars](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextEffectFormat/member/RotatedChars) | 如果指定艺术字对象中的字符相对于该对象旋转了 90 度，则该值为 **msoTrue** 。如果指定艺术字对象中的字符相对于该对象保持原有方向，则该值为 **msoFalse** 。 **MsoTriState** 类型，可读/写。 |
| [Text](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextEffectFormat/member/Text) | 返回或设置指定对象中的文本。 **String** 型，可读写。 |
| [Tracking](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextEffectFormat/member/Tracking) | 返回或设置指定艺术字中每个字符的水平间隔相对于字符宽度的比例。该比例可为从 0 到 5 之间的值。（为该属性指定的值越大，字符间的空间越大；小于 1 的值会产生字符重叠）。可读写。 **Single** 类型。 |