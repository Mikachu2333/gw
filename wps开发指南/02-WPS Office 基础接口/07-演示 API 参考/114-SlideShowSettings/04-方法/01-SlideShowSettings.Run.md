# SlideShowSettings.Run

运行指定演示文稿的幻灯片放映。返回一个 **[SlideShowWindow](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowWindow/obj)** 对象。



## 语法

express.**Run()**

express   一个代表 **SlideShowSettings** 对象的变量。

## 返回值

SlideShowWindow

## 说明


要运行自定义幻灯片放映，请将 **RangeType** 属性设置为 **ppShowNamedSlideShow** ，并将 **SlideShowName** 属性设置为要运行的自定义放映的名称。



## 示例


```JavaScript
/*本示例启动活动演示文稿的全屏幻灯片放映。*/
function test() {
    let slideShowSettings = ActivePresentation.SlideShowSettings
    slideShowSettings.ShowType = ppShowTypeSpeaker
    slideShowSettings.Run()
}
```


```JavaScript
/*本示例运行活动演示文稿中名为“Quick Show”的幻灯片放映。*/
function test() {
    let slideShowSettings = ActivePresentation.SlideShowSettings
    slideShowSettings.RangeType = ppShowNamedSlideShow
    slideShowSettings.SlideShowName = "Quick Show"
    slideShowSettings.Run()
}
```
