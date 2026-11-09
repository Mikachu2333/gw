# ColorScheme.Colors

返回一个 **[RGBColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/RGBColor/obj)** 对象，该对象代表配色方案中的一种颜色。



## 语法

express.**Colors(SchemeColor)**

express   一个代表 **ColorScheme** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| SchemeColor | 必选 | PpColorSchemeIndex | 指定的配色方案中的一种颜色。 |

## 返回值

RGBColor

## 示例


```JavaScript
/*本示例设置活动演示文稿第一张幻灯片的标题颜色。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    slide.ColorScheme.Colors(ppTitle).RGB = RGB(0, 255, 0)
}
```


```JavaScript
/*本示例创建一个包含活动演示文稿中所有标题幻灯片的数组，并用它定义一个幻灯片范围，然后设置该范围内所有幻灯片的背景颜色。*/
function test() {
    let slides = ActivePresentation.Slides
    let titleArray = []
    for (let i = slides.Count; i > 0; i--) {
        let slide = slides.Item(i)
        if (slide.Layout == ppLayoutTitle) {
            titleArray.push(slide.SlideIndex)
        }
    }
    let slideRange = ActivePresentation.Slides.Range(titleArray)
    slideRange.ColorScheme.Colors(ppBackground).RGB = RGB(255, 123, 99)
}
```
