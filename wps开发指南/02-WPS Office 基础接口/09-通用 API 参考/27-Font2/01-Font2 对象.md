# Font2 对象

包含对象的字体属性。例如，字体名称、字号和颜色。


## 示例


```JavaScript
/*本示例运行于演示组件，将活动演示文稿的第一张幻灯片上第一个形状（文本框）中的文本的格式更改为 Arial 字体和加粗。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let font2 = shape.TextFrame2.TextRange.Font
    font2.Name = "Arial"
    font2.Italic = msoTrue
}
```


```JavaScript
/*本示例运行于演示组件，设置活动窗口上所选形状（文本框）中文本字体的前景填充色和填充透明度。*/
function test() {
    let textFrame2 = ActiveWindow.Selection.ShapeRange.TextFrame2
    let font2 = textFrame2.TextRange.Font
    font2.Fill.ForeColor.RGB = RGB(255, 0, 0)
    font2.Fill.Transparency = 0.5
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Allcaps](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/Font2/member/Allcaps) | 如果字体格式为全部字母大写，则为 **msoTrue** 。可读写。 |
| [AutorotateNumbers](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/Font2/member/AutorotateNumbers) | 获取或设置一个值，该值指定在旋转文本时编号列表中的数字是否也应旋转。可读写。 |
| [BaselineOffset](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/Font2/member/BaselineOffset) | 获取或设置一个值，该值指定选定字体的水平偏移量。可读写。 |
| [Bold](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/Font2/member/Bold) | 获取或设置一个值，该值指定是否应加粗字体。可读写。 |
| [Caps](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/Font2/member/Caps) | 获取或设置一个值，该值指定文本应大写。可读写。 |
| [DoubleStrikeThrough](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/Font2/member/DoubleStrikeThrough) | 如果将指定字体的格式设置为双删除线文本，则为 **msoTrue** 。可读写。 |
| [Embeddable](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/Font2/member/Embeddable) | 获取一个值，该值指示是否能将字体嵌入页面中。只读。 |
| [Equalize](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/Font2/member/Equalize) | 获取或设置一个值，该值指定选定内容的文本是否应保持相同的字符高度。可读写。 |
| [Fill](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/Font2/member/Fill) | 获取指定文本使用的字体的填充格式属性。只读。 |
| [Glow](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/Font2/member/Glow) | 获取代表字体发光效果格式。只读。 |
| [Highlight](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/Font2/member/Highlight) | 获取代表突出显示的字体颜色属性。只读。 |
| [Italic](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/Font2/member/Italic) | 获取或设置一个值，该值指定选定内容的文本是否倾斜。可读写。 |
| [Kerning](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/Font2/member/Kerning) | 获取或设置一个值，该值指定文本字符之间的间距大小。可读写。 |
 | [Line](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/Font2/member/Line) | 获取指定的 **LineFormat** 。只读。 |
 | [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/Font2/member/Name) | 获取或设置一个值，该值指定用于选定内容的字体。可读写。 |
 | [NameAscii](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/Font2/member/NameAscii) | 获取或设置用于西文（其字符代码为 0（零）到 127 的字符）的字体。可读写。 |
 | [NameComplexScript](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/Font2/member/NameComplexScript) | 获取或设置复杂文种的字体名称。用于混合语言文本。可读写。 |
 | [NameFarEast](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/Font2/member/NameFarEast) | 获取或设置一种东亚字体名称。可读写。 |
 | [NameOther](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/Font2/member/NameOther) | 获取或设置字符集编号大于 127 的字符所用的字体。可读写。 |
 | [Reflection](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/Font2/member/Reflection) | 返回一个 **[ReflectionFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/ReflectionFormat/obj)** 对象，该对象代表指定文本字体的反射格式。只读。 |
 | [Shadow](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/Font2/member/Shadow) | 返回一个 **[ShadowFormat](#TODO)** 对象，该对象代表指定文本的阴影效果。只读。 |
| [Size](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/Font2/member/Size) | 获取或设置一个值，该值指定字体的大小。可读写。 |
| [Smallcaps](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/Font2/member/Smallcaps) | 获取或设置一个值，该值指定是否将文本的字体格式设置为小型大写字母。小型大写字母的高度与文本中的小写字母相同。 |
| [Spacing](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/Font2/member/Spacing) | 获取或设置一个值，该值指定选定文本中的字符间距。可读写。 |
| [Strike](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/Font2/member/Strike) | 获取或设置一个值，该值指定用于选定文本的删除线格式。可读写。 |
| [StrikeThrough](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/Font2/member/StrikeThrough) | 获取或设置一个值，该值指定文本应呈现出删除线外观。可读写。 |
| [Subscript](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/Font2/member/Subscript) | 获取或设置指定选定文本应显示为下标的值。可读写。 |
| [Superscript](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/Font2/member/Superscript) | 获取或设置指定选定文本应显示为上标的值。可读写。 |
| [UnderlineColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/Font2/member/UnderlineColor) | 返回一个 **[ColorFormat](#TODO)** 对象，该对象代表指定选定文本的下划线的颜色。只读。 |
| [UnderlineStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/Font2/member/UnderlineStyle) | 获取或设置一个值，该值指定选定文本的下划线样式。可读写。 |
| [WordArtformat](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/Font2/member/WordArtformat) | 获取或设置一个值，该值指定选定文本的文本效果。可读写。 |