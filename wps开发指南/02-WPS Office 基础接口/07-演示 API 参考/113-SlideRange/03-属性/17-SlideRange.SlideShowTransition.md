# SlideRange.SlideShowTransition

返回一个 **[SlideShowTransition](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowTransition/obj)** 对象，该对象代表指定幻灯片切换的特殊效果。只读。



## 语法

express.**SlideShowTransition**

express   一个代表 **SlideRange** 对象的变量。

## 类型

SlideShowTransition

## 示例


```JavaScript
/*以下示例设置在幻灯片放映过程中，当前演示文稿的第二张幻灯片在 5 秒后自动换片，并在幻灯片切换时播放犬吠声。*/
function test() {
    let slideShowTransition = Application.ActivePresentation.Slides.Range(2).SlideShowTransition
    slideShowTransition.AdvanceOnTime = msoTrue
    slideShowTransition.AdvanceTime = 5
    slideShowTransition.SoundEffect.ImportFromFile("C:\\windows\\media\\dogbark.wav")

    ActivePresentation.SlideShowSettings.AdvanceMode = ppSlideShowUseSlideTimings
}
```


```JavaScript
/*本示例设置活动演示文稿第一个窗口中选定的幻灯片切换中的特殊效果，并指定幻灯片切换速度为快速。*/
function test() {
    let slideRange = ActivePresentation.Windows.Item(1).Selection.SlideRange
    slideRange.SlideShowTransition.EntryEffect = ppEffectStripsDownLeft
    slideRange.SlideShowTransition.Speed = ppTransitionSpeedFast
}
```
