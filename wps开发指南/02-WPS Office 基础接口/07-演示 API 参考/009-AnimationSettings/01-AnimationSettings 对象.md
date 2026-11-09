# AnimationSettings 对象

代表幻灯片放映时应用于指定形状的动画的特殊效果。

## 说明


使用 **Shape** 对象的 **[AnimationSettings](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/AnimationSettings)** 属性返回 **AnimationSettings** 对象。


## 示例


```JavaScript
/*本示例在当前演示文稿的第一张幻灯片后添加一张标题幻灯片，然后设置标题文本，并为文本占位符添加三个项的列表，并设置该列表由第一级段落从左边时进行动画处理，正在进行动画处理后为指定的颜色变暗，并按相反的顺序动画显示其项飞入动画显示。*/
function test() {
    let shapes = ActivePresentation.Slides.Add(2, ppLayoutText).Shapes
    shapes.Title.TextFrame.TextRange.Text = "Top Three Reasons"
    let shape2 = shapes.Placeholders.Item(2)
    shape2.TextFrame.TextRange.Text = "Reason 1\rReason 2\rReason 3"
    let animationSettings = shape2.AnimationSettings
    animationSettings.TextLevelEffect = ppAnimateByFirstLevel
    animationSettings.EntryEffect = ppEffectFlyFromLeft
    animationSettings.AfterEffect = ppAfterEffectDim
    animationSettings.DimColor.RGB = RGB(100, 120, 100)
    animationSettings.AnimateTextInReverse = msoTrue
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个形状中的文本是否按段落动画展示文本单元效果。*/
function test() {
    let animationSettings = ActiveWindow.Selection.ShapeRange.Item(1).AnimationSettings
    alert(animationSettings.TextUnitEffect == ppAnimateByParagraph)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [AdvanceMode](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationSettings/member/AdvanceMode) | 返回或设置一个值，该值指示指定形状的动画是仅在被单击时切换还是在经过指定时间后自动切换。可读/写 **PpAdvanceMode** 类型。 |
| [AdvanceTime](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationSettings/member/AdvanceTime) | 返回或设置以秒为单位的时间，在该时间过后指定的形状将开始播放动画。可读/写。 |
| [AfterEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationSettings/member/AfterEffect) | 返回或设置一个 **PpAfterEffect** 常量，该常量指示指定的形状在生成之后是变暗、隐藏还是不更改。可读/写。 |
| [Animate](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationSettings/member/Animate) | 决定在幻灯片放映过程中指定的形状是否被赋予动画效果。可读/写。 |
| [AnimateBackground](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationSettings/member/AnimateBackground) | 如果指定的对象是自选图形，若该形状独立于其所包含的文本单独显示动画，则值为 **msoTrue** 。可读/写 。 |
| [AnimateTextInReverse](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationSettings/member/AnimateTextInReverse) | 决定指定形状是否按相反顺序构造。仅应用于具有多个创建步骤的形状（例如，包含列表的形状）。可读/写。 |
| [AnimationOrder](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationSettings/member/AnimationOrder) | 返回或设置一个整数，该整数代表指定形状在动画形状集合中的位置。可读/写。 |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationSettings/member/Application) | 返回一个 **Application** 对象，该对象表示指定对象的创建者。 |
| [DimColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationSettings/member/DimColor) | 返回或设置一个 **[ColorFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ColorFormat/obj)** 对象，该对象代表指定形状生成后的颜色。只读。 |
| [EntryEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationSettings/member/EntryEffect) | 对于 **AnimationSettings** 对象，此属性返回或设置应用于指定形状中动画的特殊效果。可读写。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationSettings/member/Parent) | 返回指定对象的父对象。 |
| [PlaySettings](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationSettings/member/PlaySettings) | 返回一个 **[PlaySettings](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PlaySettings/obj)** 对象，该对象包含指定的媒体剪辑在幻灯片放映中的播放方式的信息。只读。 |
| [SoundEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationSettings/member/SoundEffect) | 返回一个 **SoundEffect** 对象，该对象代表切换到指定幻灯片时播放的声音。只读。 |
| [TextLevelEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationSettings/member/TextLevelEffect) | 设置或返回一个 **PpTextLevelEffect** 常量，该常量表示指定形状中的文本是否由第一级段落、第二级段落或其他级段落（最高为第五级段落）激活动画显示。可读/写。 |
| [TextUnitEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationSettings/member/TextUnitEffect) | 返回或设置一个 **PpTextUnitEffect** 常量，该常量指示指定形状中的文本是按段落、按字或是按字母被赋予动画效果。可读/写。 |