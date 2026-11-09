# Slide.SlideShowTransition

返回一个 **[SlideShowTransition](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowTransition/obj)** 对象，该对象代表指定幻灯片切换的特殊效果。只读。



## 语法

express.**SlideShowTransition**

express   一个代表 **Slide** 对象的变量。

## 类型

SlideShowTransition

## 示例


```JavaScript
/*以下示例设置在幻灯片放映过程中，当前演示文稿的第二张幻灯片在 5 秒后自动换片，并在幻灯片切换时播放犬吠声。*/
function test() {
    let slideTransition = ActivePresentation.Slides.Item(2).SlideShowTransition
    slideTransition.AdvanceOnTime = true
    slideTransition.AdvanceTime = 5
    slideTransition.SoundEffect.ImportFromFile("c:\\windows\\media\\dogbark.wav")
    ActivePresentation.SlideShowSettings.AdvanceMode = ppSlideShowUseSlideTimings
}
```


```JavaScript
/*本示例设置第一个幻灯片放映窗口中当前放映幻灯片的动画为淡出。*/
function test() {
    let slideTransition = SlideShowWindows.Item(1).View.Slide.SlideShowTransition
    slideTransition.EntryEffect = ppEffectFade
}
```
