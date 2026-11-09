# Presentation.SlideShowSettings

返回一个 **[SlideShowSettings](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowSettings/obj)** 对象，该对象代表指定演示文稿的幻灯片放映设置。只读。



## 语法

express.**SlideShowSettings**

express   一个代表 **Presentation** 对象的变量。

## 类型

SlideShowSettings

## 示例


```JavaScript
/*本示例启动一个预设使用扬声器的幻灯片放映。运行该幻灯片放映时关闭动画和旁白。*/
function test() {
    let slideShowSettings = Application.ActivePresentation.SlideShowSettings
    slideShowSettings.ShowType = ppShowTypeSpeaker
    slideShowSettings.ShowWithNarration = msoFalse
    slideShowSettings.ShowWithAnimation = msoFalse
    slideShowSettings.Run()
}
```


```JavaScript
/*本示例在窗口中运行第一篇演示文稿的一个幻灯片放映，从第二张幻灯片开始，到第四张幻灯片结束。新的幻灯片放映窗口位于屏幕左上角，宽度和高度均为 300 磅。*/
function test() {
    let slideShowSettings = Presentations.Item(1).SlideShowSettings
    slideShowSettings.RangeType = ppShowSlideRange
    slideShowSettings.StartingSlide = 2
    slideShowSettings.EndingSlide = 4
    slideShowSettings.ShowType = ppShowTypeWindow
    let slideShowWindow = slideShowSettings.Run()
    slideShowWindow.Left = 0
    slideShowWindow.Top = 0
    slideShowWindow.Width = 300
    slideShowWindow.Height = 300
}
```
