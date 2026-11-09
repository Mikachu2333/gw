# SlideShowTransition 对象

包含关于幻灯片放映中指定幻灯片的切换方式的信息。

## 说明


使用 **[SlideShowTransition](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slide/member/SlideShowTransition)** 属性返回的 **SlideShowTransition** 对象。


## 示例


```JavaScript
/*本示例设置活动演示文稿上第一张幻灯片切换幻灯片中的速度、特殊效果和播放的声音，并设置该幻灯片在前一个幻灯片切换之后的五秒自动换片。*/
function test() {
    let slideShowTransition = ActivePresentation.Slides.Item(1).SlideShowTransition
    slideShowTransition.Speed = ppTransitionSpeedFast
    slideShowTransition.EntryEffect = ppEffectStripsDownLeft
    slideShowTransition.SoundEffect.ImportFromFile("C:\\sndsys\\bass.wav")
    slideShowTransition.AdvanceOnTime = msoTrue
    slideShowTransition.AdvanceTime = 5
    ActivePresentation.SlideShowSettings.AdvanceMode = ppSlideShowUseSlideTimings
}
```


```JavaScript
/*本示例判断第一篇演示文稿第一张幻灯片在放映期间单击幻灯片后是否会切换，并通知用户。*/
function test() {
    let slideShowTransition = Presentations.Item(1).Slides.Item(1).SlideShowTransition
    if (slideShowTransition.AdvanceOnClick == msoTrue) {
        alert("在放映过程中，单击幻灯片后进行切换。")
    } else {
        alert("在放映过程中，单击幻灯片后不进行切换。")
    }
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [AdvanceOnClick](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowTransition/member/AdvanceOnClick) | 决定在幻灯片放映期间单击指定的幻灯片后是否会切换。可读/写。 |
| [AdvanceOnTime](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowTransition/member/AdvanceOnTime) | 决定指定的幻灯片在经过指定时间后是否自动切换。可读/写。 |
| [AdvanceTime](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowTransition/member/AdvanceTime) | 返回或设置以秒为单位的时间长度，该段时间过后，指定的幻灯片将会切换。可读/写。 |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowTransition/member/Application) | 返回一个 **Application** 对象，该对象表示指定对象的创建者 |
| [Duration](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowTransition/member/Duration) | 返回或设置以秒为单位的动画长度。可读/写。 |
| [EntryEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowTransition/member/EntryEffect) | 对于 **SlideShowTransition** 对象，此属性返回或设置应用于指定幻灯片切换的特殊效果。 **PpEntryEffect** 类型，可读写。 |
| [Hidden](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowTransition/member/Hidden) | 决定幻灯片放映过程中指定的幻灯片是否隐藏。可读/写， **MsoTriState** 类型。 |
| [LoopSoundUntilNext](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowTransition/member/LoopSoundUntilNext) | 指定是否循环播放为指定的幻灯片切换所设置的声音，直到下一个声音开始。可读/写， **MsoTriState** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowTransition/member/Parent) | 返回指定对象的父对象。 |
| [SoundEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowTransition/member/SoundEffect) | 返回一个 **SoundEffect** 对象，该对象代表切换到指定幻灯片时播放的声音。只读。 |
| [Speed](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowTransition/member/Speed) | 返回或设置一个 **PpTransitionSpeed** 常量，该常量代表切换到指定幻灯片的速度。可读/写。 |