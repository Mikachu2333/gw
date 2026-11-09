# Master.SlideShowTransition

返回一个 **[SlideShowTransition](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowTransition/obj)** 对象，该对象代表指定幻灯片切换的特殊效果。只读。



## 语法

express.**SlideShowTransition**

express   一个代表 **Master** 对象的变量。

## 类型

SlideShowTransition

## 示例


```JavaScript
/*本示例设置活动演示文稿第一张幻灯片的幻灯片母版在前一个幻灯片切换之后的五秒自动换片，并设置该幻灯片母版在切换时播放声音文件“coin.wav”。*/
function test() {
    let slideShowTransition = ActivePresentation.Slides.Item(1).Master.SlideShowTransition
    slideShowTransition.AdvanceOnTime = msoTrue
    slideShowTransition.AdvanceTime = 5
    slideShowTransition.SoundEffect.ImportFromFile("D:\\TestFile\\coin.wav")
    ActivePresentation.SlideShowSettings.AdvanceMode = ppSlideShowUseSlideTimings
}
```


```JavaScript
/*本示例显示活动窗口选定的第一张幻灯片的幻灯片母版切换期间速度是否为慢速。*/
function test() {
    let slide = ActiveWindow.Selection.SlideRange.Item(1)
    alert(slide.Master.SlideShowTransition.Speed == ppTransitionSpeedSlow)
}
```
