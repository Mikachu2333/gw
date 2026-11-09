# SlideShowSettings.NamedSlideShows

返回一个 **[NamedSlideShows](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/NamedSlideShows/obj)** 集合，该集合代表指定演示文稿中所有命名幻灯片放映（自定义幻灯片放映）。只读。



## 语法

express.**NamedSlideShows**

express   一个代表 **SlideShowSettings** 对象的变量。

## 类型

NamedSlideShows

## 说明


每个命名的幻灯片放映或自定义幻灯片放映都是用户选择的指定演示文稿的子集。

使用 **NamedSlideShows** 对象的 **[Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/NamedSlideShows/member/Add)** 方法创建命名幻灯片放映。



## 示例


```JavaScript
/*本示例为当前演示文稿添加一个命名幻灯片放映“Quick Show”（该放映包含第二、第七和第九张幻灯片），然后运行该放映。*/
function test() {
    let arrSlides = []
    let slides = ActivePresentation.Slides
    arrSlides.push(slides.Item(2).SlideID)
    arrSlides.push(slides.Item(7).SlideID)
    arrSlides.push(slides.Item(9).SlideID)

    let slideShowSettings = ActivePresentation.SlideShowSettings
    slideShowSettings.RangeType = ppShowNamedSlideShow
    slideShowSettings.NamedSlideShows.Add("Quick Show", arrSlides)
    slideShowSettings.SlideShowName = "Quick Show"
    slideShowSettings.Run()
}
```


```JavaScript
/*本示例显示第一篇演示文稿中第一个自定义幻灯片放映的名称。*/
function test() {
    let slideShowSettings = Presentations.Item(1).SlideShowSettings
    alert(slideShowSettings.NamedSlideShows.Item(1).Name)
}
```
