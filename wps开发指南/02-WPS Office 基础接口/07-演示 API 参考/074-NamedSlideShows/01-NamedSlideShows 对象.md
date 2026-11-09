# NamedSlideShows 对象

演示文稿中所有 **[NamedSlideShow](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/NamedSlideShow/obj)** 对象的集合。每个 **NamedSlideShow** 对象代表一个自定义幻灯片放映。

## 说明


使用 **[NamedSlideShows](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowSettings/member/NamedSlideShows)** 属性返回 **NamedSlideShows** 集合。 使用 **NamedSlideShows** (*index*)（其中 *index* 是自定义幻灯片放映名称或索引号）可返回单个 **NamedSlideShow** 对象。


## 示例


```JavaScript
/*本示例删除活动演示文稿中名为“test”的自定义幻灯片放映。*/
function test() {
    ActivePresentation.SlideShowSettings.NamedSlideShows.Item("test").Delete()
}
```
使用 **[Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/NamedSlideShows/member/Add)** 方法创建新的幻灯片放映，并将其添加到 **NamedSlideShows** 集合。



```JavaScript
/*本示例为当前演示文稿添加一个命名幻灯片放映“Quick Show”（该放映包含第二、第七和第九张幻灯片），然后运行该自定义幻灯片放映。*/
function test() {
    let arrSlides = []
    let slides = ActivePresentation.Slides
    arrSlides.push(slides.Item(2).SlideID)
    arrSlides.push(slides.Item(7).SlideID)
    arrSlides.push(slides.Item(9).SlideID)

    let slideShowSettings = ActivePresentation.SlideShowSettings
    slideShowSettings.NamedSlideShows.Add("Quick Show", arrSlides)
    slideShowSettings.RangeType = ppShowNamedSlideShow
    slideShowSettings.SlideShowName = "Quick Show"
    slideShowSettings.Run()
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/NamedSlideShows/member/Add) | 创建一个新的命名幻灯片放映，并将其添加到指定演示文稿的命名幻灯片放映集合中。返回一个代表新命名幻灯片放映的 **[NamedSlideShow](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/NamedSlideShow/obj)** 对象。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/NamedSlideShows/member/Item) | 从指定的 **NamedSlideShows** 集合中返回单个 **NamedSlideShow** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/NamedSlideShows/member/Application) | 返回一个 **Application** 对象，该对象表示指定对象的创建者。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/NamedSlideShows/member/Count) | 返回指定集合中的对象数目。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/NamedSlideShows/member/Parent) | 返回指定对象的父对象。 |