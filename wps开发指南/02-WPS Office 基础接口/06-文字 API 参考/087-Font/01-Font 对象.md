# Font 对象

包含对象的字体属性（如字体名称、字号、颜色等）。

## 说明


使用 **Font** 属性可返回 **Font** 对象。


## 示例


```JavaScript
/*本示例将所选内容的字体设置加粗格式。*/
function test() {
    Application.Selection.Font.Bold = msoTrue
}
```


```JavaScript
/*本示例将活动文档中第一个段落的字体格式设置为 24 磅、Arial 字体和加粗。*/
function test() {
    let range = ActiveDocument.Paragraphs.Item(1).Range
    range.Font.Bold = msoTrue
    range.Font.Name = "Arial"
    range.Font.Size = 24
}
```


```JavaScript
/*本示例将活动文档中“标题 2”样式的格式更改为 Arial 字体和倾斜。*/
function test() {
    let font = ActiveDocument.Styles.Item(wdStyleHeading2).Font
    font.Name = "Arial"
    font.Italic = msoTrue
}
```


```JavaScript
/*本示例将活动文档上第一个段落的字体格式设置为“Arial”字体和加粗。*/
function test() {
    let font = Application.ActiveDocument.Paragraphs.Item(1).Range.Font
    font.Bold = msoTrue
    font.Name = "Arial"
}
```
还可以使用 **Duplicate** 属性复制 **Font** 对象。



```JavaScript
/*本示例使用所选内容中的字体格式和斜体格式创建新的字符样式。所选内容的格式不会更改。*/
function test() {
    let font = Selection.Font.Duplicate
    font.Italic = msoTrue
    ActiveDocument.Styles.Add("Italics", wdStyleTypeCharacter).Font = font
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Grow](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/member/Grow) | 将字号增大为下一个可用的字号。 |
| [Reset](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/member/Reset) | 删除手动字符格式（不使用样式应用的格式）。例如，如果手动将单词设置为加粗格式，但基本样式为纯文本（不是粗体），则可用 **Reset** 方法删除加粗格式。 |
| [Shrink](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/member/Shrink) | 将字号减小为下一个可用的字号。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [AllCaps](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/member/AllCaps) | 如果字体格式为全部字母大写，则该属性值为 **msoTrue** 。 **Long** 类型，可读写。 |
| [Animation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/member/Animation) | 返回或设置应用于字体的动态效果类型。 **WdAnimation** 类型，可读写。 |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/member/Application) | 返回一个代表 WPS 应用程序的 **Application** 对象。 |
| [Bold](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/member/Bold) | 如果字体格式为加粗，则该属性值为 **msoTrue** 。 **Long** 类型，可读写。 |
| [BoldBi](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/member/BoldBi) | 如果字体格式为加粗，则该属性值为 **msoTrue** 。 **Long** 类型，可读写。 |
| [Borders](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/member/Borders) | 返回一个 **Borders** 集合，该集合代表指定字体的所有边框。 |
| [ColorIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/member/ColorIndex) | 返回或设置一个 **WdColorIndex** 常量，该常量代表指定字体的颜色。可读写。 |
| [ColorIndexBi](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/member/ColorIndexBi) | 返回或设置从右向左语言文档中指定 **Font** 对象的颜色。 **WdColorIndex** 类型，可读写。 |
| [ContextualAlternates](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/member/ContextualAlternates) | 指定是否为指定字体启用上下文替换。可读/写 **Long** 类型。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [DiacriticColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/member/DiacriticColor) | 返回或设置用于指定 **Font** 对象的音调符号的 24 位颜色。 |
| [DisableCharacterSpaceGrid](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/member/DisableCharacterSpaceGrid) | 如果 WPS 忽略相应 **Font** 对象的每行字符数，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [DoubleStrikeThrough](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/member/DoubleStrikeThrough) | 如果将指定字体的格式设置为双删除线文本，则该属性值为 **msoTrue** 。 |
| [Duplicate](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/member/Duplicate) | 返回表示指定字体的字符格式的 **Font** 对象的副本。 |
| [Emboss](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/member/Emboss) | 如果指定字体格式为阳文，则该属性值为 **True** 。 **Long** 类型，可读写。 |
| [EmphasisMark](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/member/EmphasisMark) | 返回或设置 **WdEmphasisMark** 常量，该常量代表字符或指定字符串的着重号。可读写。 |
| [Engrave](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/member/Engrave) | 如果字体格式为阴文，则该属性值为 **msoTrue** 。 **Long** 类型，可读写。 |
| [Fill](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/member/Fill) | 返回 **FillFormat** 对象，该对象包含指定范围文本使用的字体的填充格式属性。只读。 |
| [Glow](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/member/Glow) | 返回 **GlowFormat** 对象，该对象代表指定范围文本使用的字体的发光格式。只读。 |
| [Hidden](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/member/Hidden) | 如果字体格式为隐藏文字，则该属性值为 **msoTrue** 。 **Long** 类型，可读写。 |
| [Italic](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/member/Italic) | 如果将字体或范围设置为倾斜格式，则该属性值为 **msoTrue** 。 **Long** 类型，可读写。 |
| [ItalicBi](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/member/ItalicBi) | 如果将字体或范围设置为倾斜格式，则该属性值为 **msoTrue** 。可读写 **Long** 类型。 |
| [Kerning](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/member/Kerning) | 返回或设置 WPS 根据字号自动调整字距时的最小字号。 **Single** 类型，可读写。 |
| [Ligatures](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/member/Ligatures) | 返回或设置指定 **Font** 对象的连字设置。可读/写 **[WdLigatures](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdLigatures)** 类型。 |
| [Line](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/member/Line) | 返回 **[LineFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LineFormat/obj)** 对象，该对象指定行的格式。可读/写。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/member/Name) | 返回或设置指定对象的名称。 **String** 类型，可读写。 |
| [NameAscii](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/member/NameAscii) | 返回或设置西方字体（字符代码从 0（零）到 127 的字符）所用的字体。 **String** 类型，可读写。 |
| [NameBi](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/member/NameBi) | 返回或设置使用从右向左语言的文档中的字体的名称。 **String** 类型，可读写。 |
| [NameFarEast](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/member/NameFarEast) | 返回或设置一种东亚字体名称。 **String** 类型，可读写。 |
| [NameOther](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/member/NameOther) | 返回或设置字符代码从 128 到 255 的字符所用的字体。 **String** 类型，可读写。 |
| [NumberForm](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/member/NumberForm) | 返回或设置 OpenType 字体的数字形式设置。可读/写 **[WdNumberForm](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdNumberForm)** 类型。 |
| [NumberSpacing](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/member/NumberSpacing) | 返回或设置字体的数字间距设置。可读/写 **[WdNumberSpacing](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdNumberSpacing)** 类型。 |
| [Outline](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/member/Outline) | 如果字体格式为镂空，则该属性值为 **msoTrue** 。 **Long** 类型，可读写。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **Font** 对象的父对象。 |
| [Position](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/member/Position) | 返回或设置相对于基准线的文本位置（以磅为单位）。可读写 **Long** 类型。 |
| [Reflection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/member/Reflection) | 返回一个 **[ReflectionFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ReflectionFormat/obj)** 对象，该对象代表形状的反射格式。只读。 |
| [Scaling](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/member/Scaling) | 返回或设置应用于字体的缩放百分比。 **Long** 类型，可读写。 |
| [Shading](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/member/Shading) | 返回一个 **Shading** 对象，该对象代表指定字体的底纹格式。 |
| [Shadow](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/member/Shadow) | 如果将指定字体设置为阴影格式，则该属性值为 **msoTrue** 。可读写 **Long** 类型。 |
| [Size](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/member/Size) | 返回或设置字号（以磅为单位）。 **Single** 类型，可读写。 |
| [SizeBi](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/member/SizeBi) | 返回或设置字体大小（以磅为单位）。 **Single** 类型，可读写。 |
| [SmallCaps](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/member/SmallCaps) | 如果字体格式为小型大写字母，则该属性值为 **msoTrue** 。 **Long** 类型，可读写。 |
| [Spacing](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/member/Spacing) | 返回或设置字符的间距（以磅为单位）。可读写 **Single** 类型。 |
| [StrikeThrough](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/member/StrikeThrough) | 如果字体格式为带有删除线的文本，则该属性值为 **msoTrue** 。 **Long** 类型，可读写。 |
| [StylisticSet](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/member/StylisticSet) | 指明指定字体的样式集。可读/写 **[WdStylisticSet](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdStylisticSet)** 类型。 |
| [Subscript](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/member/Subscript) | 如果字体格式为下标，则该属性值为 **msoTrue** 。 **Long** 类型，可读写。 |
| [Superscript](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/member/Superscript) | 如果字体格式为上标，则该属性值为 **msoTrue** 。 **Long** 类型，可读写。 |
| [TextColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/member/TextColor) | 返回一个代表指定字体的颜色的 **[ColorFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ColorFormat/obj)** 对象。只读。 |
| [TextShadow](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/member/TextShadow) | 返回 **[ShadowFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShadowFormat/obj)** 对象,该对象指明指定字体的阴影格式。 |
| [ThreeD](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/member/ThreeD) | 返回 **[ThreeDFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ThreeDFormat/obj)** 对象，该对象包含指定字体的三维效果格式属性。只读。 |
| [Underline](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/member/Underline) | 返回或设置应用于字体的下划线类型。可读写 **[WdUnderline](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdUnderline)** 类型。 |
| [UnderlineColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/member/UnderlineColor) | 返回或设置指定 **Font** 对象的下划线的 24 位颜色。 |