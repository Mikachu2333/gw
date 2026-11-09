# EffectInformation 对象

代表 **[Effect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Effect/obj)** 对象的各种动画选项。

## 说明


使用 **EffectInformation** 对象的成员可返回 **Effect** 对象的当前状态（例如，动画播放后的效果、背景是否与相应的文本一起动画显示、文本是否要反向动画显示、播放设置、声音效果、文本创建动作）。 **EffectInformation** 对象的所有成员都是只读的。若要更改任何效果信息属性，必须使用相应的 **[Sequence](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Sequence/obj)** 对象的方法。

使用 **Effect** 对象的 [ **EffectInformation** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Effect/member/EffectInformation) 属性返回 **EffectInformation** 对象。


## 示例


```JavaScript
/*本示例显示活动演示文稿第一张幻灯片的第一个动画效果在动画播放后效果是否隐藏。*/
function test() {
    let effect = ActivePresentation.Slides.Item(1).TimeLine.MainSequence.Item(1)
    alert(effect.EffectInformation.AfterEffect == msoAnimAfterEffectHide)
}
```


```JavaScript
/*本示例设置活动窗口中选定的第一张幻灯片在演示第二个动画效果时播放文件“type.wav”。*/
function test() {
    let effectInformation = ActiveWindow.Selection.SlideRange.Item(1).TimeLine.MainSequence.Item(2).EffectInformation
    effectInformation.SoundEffect.ImportFromFile("D:\\type.wav")
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [AfterEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/EffectInformation/member/AfterEffect) | 返回一个 **MsoAnimAfterEffect** 常量，该常量指示某个动画播放后效果在运行结束后是变暗、隐藏还是不更改。只读。 |
| [AnimateBackground](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/EffectInformation/member/AnimateBackground) | 如果指定的效果是背景动画，则返回 **msoTrue** 。只读。 |
| [AnimateTextInReverse](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/EffectInformation/member/AnimateTextInReverse) | 决定指定形状是否按相反顺序生成。仅应用于可在多个步骤中生成的形状（例如，包含列表的形状）。只读。 |
| [BuildByLevelEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/EffectInformation/member/BuildByLevelEffect) | 决定动画生成效果的级别。只读。 |
| [SoundEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/EffectInformation/member/SoundEffect) | 返回一个 **SoundEffect** 对象，该对象代表切换到指定幻灯片期间要播放的声音。只读。 |
| [TextUnitEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/EffectInformation/member/TextUnitEffect) | 指示指定形状中的文本是按段落、按字还是按字母显示动画效果。只读。 |