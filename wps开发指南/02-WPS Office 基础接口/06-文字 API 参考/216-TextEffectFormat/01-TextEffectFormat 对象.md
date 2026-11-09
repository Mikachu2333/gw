# TextEffectFormat 对象

包含应用于艺术字对象的属性和方法。

## 说明


使用 **TextEffect** 属性可返回一个 **TextEffectFormat** 对象。


## 示例


```JavaScript
/*本示例为活动文档的第一个形状设置字体与格式。为使本示例能运行，第一个形状必须是一个艺术字对象。*/
function test() {
    let textEffectFormat = ActiveDocument.Shapes(1).TextEffect
    textEffectFormat.FontName = "Courier New"
    textEffectFormat.FontBold = msoTrue
    textEffectFormat.FontItalic = msoTrue
}
```


```JavaScript
/*本示例显示选中的第二个艺术字的文本。*/
function test() {
    alert(Selection.ShapeRange.Item(2).TextEffect.Text)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [ToggleVerticalText](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextEffectFormat/member/ToggleVerticalText) | 将指定的艺术字中的文字排列从水平切换为垂直，反之亦然。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Alignment](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextEffectFormat/member/Alignment) | 返回或设置一个 **MsoTextEffectAlignment** 常量，该常量代表指定文本效果的对齐方式，可读写。 |
| [FontBold](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextEffectFormat/member/FontBold) | 设置指定艺术字图形的字体为加粗。 **MsoTriState** 类型，可读写。 |
| [FontItalic](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextEffectFormat/member/FontItalic) | 将艺术字文字设置为倾斜。 **MsoTriState** 类型，可读写。 |
| [FontName](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextEffectFormat/member/FontName) | 返回或设置指定艺术字的字体名称。 **String** 类型，可读写。 |
| [FontSize](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextEffectFormat/member/FontSize) | 以磅为单位返回或设置指定的艺术字字体大小。 **Single** 类型，可读写。 |
| [KernedPairs](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextEffectFormat/member/KernedPairs) | 代表经过字距调整的艺术字对象中的字符对。 **MsoTriState** 类型，可读写。 |
| [NormalizedHeight](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextEffectFormat/member/NormalizedHeight) | 如果指定艺术字中所有字符（不论大小写）的高度相同，则该属性值为 **msoTrue** 。 **MsoTriState** 类型，可读写。 |
| [PresetShape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextEffectFormat/member/PresetShape) | 返回或设置指定艺术字的形状。 **MsoPresetTextEffectShape** 类型，可读写。 |
| [PresetTextEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextEffectFormat/member/PresetTextEffect) | 返回或设置指定艺术字的样式。该属性的值对应于“艺术字库”对话框（ **“插入”** 菜单）中的格式（从左到右，从上到下进行编号）。 **MsoPresetTextEffect** 类型，可读/写。 |
| [RotatedChars](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextEffectFormat/member/RotatedChars) | 如果指定的艺术字中的字符相对于艺术字边框形状旋转 90 度，则该属性值为 **msoTrue** 。如果指定的艺术字中的字符相对于边框形状保持原来的方向，则该属性值为 **msoFalse** 。 **MsoTriState** 类型，可读写。 |
| [Text](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextEffectFormat/member/Text) | 返回或设置指定对象中的文本。 **String** 类型，可读写。 |
| [Tracking](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextEffectFormat/member/Tracking) | 该属性返回或设置指定的艺术字中分配给每个字符的水平间距与字符宽度之比。 **Single** 类型，可读写。 |