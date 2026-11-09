# SlideShowSettings 对象

代表演示文稿的幻灯片放映设置。

## 说明


使用 **[SlideShowSettings](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/SlideShowSettings)** 属性返回 **SlideShowSettings** 对象。


## 示例


```JavaScript
/*本示例的第一部分设置活动演示文稿中所有幻灯片在五秒后自动切换。第二部分设置幻灯片放映从第二张幻灯片开始，在第四张幻灯片结束，使用第一部分中设置的定时前进幻灯片，并连续循环运行，直到用户按下 ESC 键。最后，示例运行幻灯片放映。*/
function test() {
    let slides = ActivePresentation.Slides
    for (let i = 1; i <= slides.Count; i++) {
        let slideShowTransition = slides.Item(i).SlideShowTransition
        slideShowTransition.AdvanceOnTime = msoTrue
        slideShowTransition.AdvanceTime = 5
    }

    let slideShowSettings = ActivePresentation.SlideShowSettings
    slideShowSettings.RangeType = ppShowSlideRange
    slideShowSettings.StartingSlide = 2
    slideShowSettings.EndingSlide = 4
    slideShowSettings.AdvanceMode = ppSlideShowUseSlideTimings
    slideShowSettings.LoopUntilStopped = msoTrue
    slideShowSettings.Run()
}
```


```JavaScript
/*本示例显示第一篇演示文稿的幻灯片放映的放映类型是否为ppShowTypeSpeaker。*/
function test() {
    let slideShowSettings = Presentations.Item(1).SlideShowSettings
    alert(slideShowSettings.ShowType == ppShowTypeSpeaker)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Run](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowSettings/member/Run) | 运行指定演示文稿的幻灯片放映。返回一个 **[SlideShowWindow](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowWindow/obj)** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [AdvanceMode](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowSettings/member/AdvanceMode) | 返回或设置一个值，该值指示幻灯片放映的切换方式。可读/写。 |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowSettings/member/Application) | 返回一个 **Application** 对象，该对象表示指定对象的创建者。 |
| [EndingSlide](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowSettings/member/EndingSlide) | 返回或设置指定幻灯片放映中最后显示的幻灯片。可读/写。 |
| [LoopUntilStopped](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowSettings/member/LoopUntilStopped) | 决定指定幻灯片放映是否持续循环播放，直到用户按 Esc。可读/写。 |
| [NamedSlideShows](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowSettings/member/NamedSlideShows) | 返回一个 **[NamedSlideShows](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/NamedSlideShows/obj)** 集合，该集合代表指定演示文稿中所有命名幻灯片放映（自定义幻灯片放映）。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowSettings/member/Parent) | 返回指定对象的父对象。 |
| [PointerColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowSettings/member/PointerColor) | 以 **[ColorFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ColorFormat/obj)** 对象的形式返回指定演示文稿的指针颜色。只读。 |
| [RangeType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowSettings/member/RangeType) | 返回或设置运行幻灯片放映的类型。可读/写。 |
| [ShowPresenterView](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowSettings/member/ShowPresenterView) | 如果为 **msoTrue** ，则放映时显示演讲者视图，可读写。 |
| [ShowScrollbar](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowSettings/member/ShowScrollbar) | 属性值为 **msoTrue** 时，在以浏览模式放映幻灯片的过程中显示滚动条。可读/写。 |
| [ShowType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowSettings/member/ShowType) | 返回或设置指定幻灯片放映的放映类型。可读/写。 |
| [ShowWithAnimation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowSettings/member/ShowWithAnimation) | 决定指定的幻灯片放映是否显示已分配动画设置的形状。可读/写。 |
| [ShowWithNarration](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowSettings/member/ShowWithNarration) | 决定显示指定幻灯片放映时是否有旁白。可读/写。 |
| [SlideShowName](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowSettings/member/SlideShowName) | 返回或设置 **SlideShowSettings** 对象的自定义幻灯片放映的名称。可读/写。 |
| [StartingSlide](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowSettings/member/StartingSlide) | 返回或设置指定幻灯片放映中要显示的第一张幻灯片。可读/写。 |