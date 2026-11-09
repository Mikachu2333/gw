# SlideShowWindows 对象

代表 WPP 中打开的幻灯片放映的所有 [SlideShowWindow](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowWindow/obj) 对象的集合。

## 说明


使用 **[SlideShowWindows](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/member/SlideShowWindows)** 属性可返回 **SlideShowWindows** 集合。使用 **SlideShowWindows** (*index*)（其中 *index* 是窗口索引号）返回单个 **SlideShowWindow** 对象。


## 示例


```JavaScript
/*本示例运行活动演示文稿的幻灯片放映，判断如果第一个幻灯片放映窗口为全屏的窗口，则减少该放窗口的宽度。*/
function test() {
    ActivePresentation.SlideShowSettings.Run()
    let slideShowWindow = Application.SlideShowWindows.Item(1)
    if (slideShowWindow.IsFullScreen == msoTrue) {
        slideShowWindow.Height -= 20
    }
}
```
使用 **[Run](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowSettings/member/Run)** 方法创建一个新的幻灯片放映窗口并将其添加到 **SlideShowWindows** 集合。



```JavaScript
/*本示例运行活动演示文稿的幻灯片放映，然后显示幻灯片放映的窗口的数量。*/
function test() {
    ActivePresentation.SlideShowSettings.Run()
    alert(Application.SlideShowWindows.Count)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowWindows/member/Item) | 从指定的 **SlideShowWindows** 集合中返回一个 **SlideShowWindow** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowWindows/member/Application) | 返回一个 Application 对象，该对象表示指定对象的创建者。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowWindows/member/Count) | 返回指定集合中的对象数目。 |