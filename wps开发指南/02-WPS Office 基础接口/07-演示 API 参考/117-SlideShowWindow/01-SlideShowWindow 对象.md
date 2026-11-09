# SlideShowWindow 对象

代表运行幻灯片放映的窗口。

## 说明


使用 **SlideShowWindows** (*index*)（其中 *index* 是幻灯片放映窗口索引号）返回单个 **SlideShowWindow** 对象。


## 示例


```JavaScript
/*本示例运行活动演示文稿的幻灯片放映，然后激活第一个幻灯片放映的窗口。*/
function test() {
    ActivePresentation.SlideShowSettings.Run()
    Application.SlideShowWindows.Item(1).Activate()
}
```
使用 **[Run](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowSettings/member/Run)** 方法创建新的幻灯片放映窗口并返回对此幻灯片放映窗口的引用



```JavaScript
/*本示例设置活动演示文稿的幻灯片放映类型，并运行该演示文稿的幻灯片放映，然后设置幻灯片放映窗口的高度和宽度。*/
function test() {
    let slideShowSettings = ActivePresentation.SlideShowSettings
    slideShowSettings.ShowType = ppShowTypeSpeaker
    let slideShowWindow = slideShowSettings.Run()
    slideShowWindow.Height = 300
    slideShowWindow.Width = 400
}
```
使用 **[View](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowWindow/member/View)** 属性可返回指定幻灯片放映窗口中的视图。



```JavaScript
/*本示例运行活动演示文稿的幻灯片放映，并在幻灯片放映期间切换到指定幻灯片。*/
function test() {
    ActivePresentation.SlideShowSettings.Run()
    Application.SlideShowWindows.Item(1).View.GotoSlide(1)
}
```
使用 **[Presentation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowWindow/member/Presentation)** 属性可返回当前在指定幻灯片放映窗口中运行的演示文稿。



```JavaScript
/*本示例运行活动演示文稿的幻灯片放映，然后显示第一个幻灯片放映的窗口被创建的演示文稿的名称。*/
function test() {
    ActivePresentation.SlideShowSettings.Run()
    let presentation = Application.SlideShowWindows.Item(1).Presentation
    alert(presentation.Name)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Activate](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowWindow/member/Activate) | 激活指定的对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Active](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowWindow/member/Active) | 返回指定的窗格或窗口是否处于激活的状态。只读。 |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowWindow/member/Application) | 返回一个 Application 对象，该对象表示指定对象的创建者。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowWindow/member/Height) | 以磅为单位返回或设置指定对象的高度。可读/写。 |
| [IsFullScreen](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowWindow/member/IsFullScreen) | 返回指定幻灯片放映窗口是否占用全屏。只读。 |
| [Left](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowWindow/member/Left) | 返回或设置一个 **Single** 类型值，该值代表从幻灯片放映窗口的左边缘到应用程序窗口用户区域左边缘的距离（以磅为单位）。将该属性设为一个很大的正值或负值会将整个窗口移出桌面。可读/写。 |
| [Presentation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowWindow/member/Presentation) | 返回一个 **[Presentation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/obj)** 对象，该对象代表创建指定文档窗口或幻灯片放映窗口的演示文稿。只读。 |
| [Top](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowWindow/member/Top) | 返回或设置一个 **Single** 类型值，该值代表幻灯片放映窗口的上边缘到应用程序窗口用户区域上边缘的距离（以磅为单位）。可读/写。 |
| [View](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowWindow/member/View) | 返回一个 [SlideShowView](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowView/obj) 对象。只读。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowWindow/member/Width) | 以磅为单位返回或设置指定对象的宽度。可读/写。 |