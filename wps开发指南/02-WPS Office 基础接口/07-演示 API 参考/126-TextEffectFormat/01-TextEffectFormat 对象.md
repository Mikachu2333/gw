# TextEffectFormat 对象

包含应用于艺术字对象的属性和方法。

## 说明


使用 **TextEffect** 属性返回 **TextEffectFormat** 对象。


## 示例


```JavaScript
/*本示例为活动演示文稿第一张幻灯片上的第一个形状设置字体名称及格式。要运行本示例，第一个形状必须是艺术字对象。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let textEffectFormat = slide.Shapes.Item(1).TextEffect
    textEffectFormat.FontName = "Courier New"
    textEffectFormat.FontBold = msoTrue
    textEffectFormat.FontItalic = msoTrue
}
```


```JavaScript
/*本示例将活动窗口选定的第一个艺术字中的文字排列从垂直文字排列切换为水平文字排列。*/
function test() {
    let textEffectFormat = ActiveWindow.Selection.ShapeRange.Item(1).TextEffect
    textEffectFormat.ToggleVerticalText()
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [ToggleVerticalText](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextEffectFormat/member/ToggleVerticalText) | 将指定的艺术字中的文字排列从水平切换为垂直，或者反过来。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Alignment](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextEffectFormat/member/Alignment) | 返回或设置指定艺术字的对齐方式。可读/写。 |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextEffectFormat/member/Application) | 返回表示指定对象的创建者的 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/obj)** 对象。 |
| [FontBold](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextEffectFormat/member/FontBold) | 确定指定艺术字中的字体是否为粗体。可读/写。 |
| [FontItalic](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextEffectFormat/member/FontItalic) | 确定指定艺术字中的字体是否为斜体。可读/写。 |
| [FontName](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextEffectFormat/member/FontName) | 返回或设置指定的艺术字中的字体名称。可读/写。 |
| [FontSize](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextEffectFormat/member/FontSize) | 返回或设置指定艺术字的字号（以磅为单位）。可读/写。 |
| [NormalizedHeight](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextEffectFormat/member/NormalizedHeight) | 确定指定艺术字中的字符（无论大小写）高度是否相同。可读/写。 |
| [PresetShape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextEffectFormat/member/PresetShape) | 返回或设置指定艺术字的形状。可读/写。 |
| [PresetTextEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextEffectFormat/member/PresetTextEffect) | 返回或设置指定艺术字的样式。可读/写。 |
| [RotatedChars](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextEffectFormat/member/RotatedChars) | 确定是否将指定艺术字中的字符相对于艺术字边框形状旋转 90 度。可读/写。 |
| [Text](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextEffectFormat/member/Text) | 返回或设置一个 **String** 类型值，该值代表指定对象中包含的文本。可读/写。 |
| [Tracking](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextEffectFormat/member/Tracking) | 返回或设置指定艺术字中每个字符的水平间距相对于字符宽度的比例。可读/写。 |