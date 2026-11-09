# NamedSlideShows.Add

创建一个新的命名幻灯片放映，并将其添加到指定演示文稿的命名幻灯片放映集合中。返回一个代表新命名幻灯片放映的 **[NamedSlideShow](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/NamedSlideShow/obj)** 对象。



## 语法

express.**Add(Name, safeArrayOfSlideIDs)**

express   一个代表 **NamedSlideShows** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Name | 必选 | string | 幻灯片放映的名称。 |
| safeArrayOfSlideIDs | 必选 | any | 包含将在幻灯片放映中显示的幻灯片的唯一幻灯片 ID。 |

## 返回值

NamedSlideShow

## 说明


添加命名幻灯片放映时指定的名称就是用作 **[Run](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowSettings/member/Run)** 方法的名称，以便运行命名幻灯片放映。



## 示例


```JavaScript
/*本示例为当前演示文稿添加一个命名幻灯片放映“Quick Show”（该放映包含第一、第三和第四张幻灯片），然后运行该放映。*/
function test() {
    let arrSlides = []
    let slides = ActivePresentation.Slides
    arrSlides.push(slides.Item(1).SlideID)
    arrSlides.push(slides.Item(3).SlideID)
    arrSlides.push(slides.Item(4).SlideID)

    let slideShowSettings = ActivePresentation.SlideShowSettings
    slideShowSettings.RangeType = ppShowNamedSlideShow
    slideShowSettings.NamedSlideShows.Add("Quick Show", arrSlides)
    slideShowSettings.SlideShowName = "Quick Show"
    slideShowSettings.Run()
}
```


```JavaScript
/*本示例向活动窗口所属的演示文稿添加名为“test”的一个自定义幻灯片放映，该自定义幻灯片放映中包含活动窗口选定的幻灯片范围。*/
function test() {
    let arrSlides = []
    arrSlides.push(ActiveWindow.Selection.SlideRange.SlideID)
    let namedSlideShows = ActiveWindow.Presentation.SlideShowSettings.NamedSlideShows
    namedSlideShows.Add("test", arrSlides)
}
```
