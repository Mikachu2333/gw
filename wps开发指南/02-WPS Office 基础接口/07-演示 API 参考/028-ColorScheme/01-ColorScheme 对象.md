# ColorScheme 对象

代表一种配色方案，该配色方案是八种颜色的组合，分别用于幻灯片、备注页或讲义中的不同元素，例如标题或背景（请注意，演示文稿中幻灯片、备注页及讲义的配色方案可以单独设置）。

## 说明


每种颜色由一个 **[RGBColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/RGBColor/obj)** 对象代表。 **ColorScheme** 对象是 **[ColorSchemes](#TODO)** 集合的一个成员。 **ColorSchemes** 集合包含演示文稿中所有的配色方案。

设置 **Slide** 、 **SlideRange** 或 **Master** 对象的 **[ColorScheme](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slide/member/ColorScheme)** 属性以分别对应修改一张幻灯片、一组幻灯片或母版的配色方案。


## 示例


```JavaScript
/*本示例设置活动窗口显示的幻灯片中标题的配色，并将活动演示文稿幻灯片母版的配色方案更改为第二篇演示文稿第一张幻灯片的配色方案。*/
function test() {
    let colorScheme = ActiveWindow.View.Slide.ColorScheme
    colorScheme.Colors(ppTitle).RGB = RGB(0, 150, 250)
    ActivePresentation.SlideMaster.ColorScheme = Presentations.Item(2).Slides.Item(1).ColorScheme
}
```
使用 **[Colors](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ColorScheme/member/Colors)** 方法返回一个 **RGBColor** 对象，表示单个幻灯片元素类型的颜色。可以将 **RGBColor** 对象设置为另一个 **RGBColor** 对象，也可以使用 **[RGB](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ColorFormat/member/RGB)** 属性设置或返回 **RGBColor** 对象的显式红绿蓝（RGB）值。



```JavaScript
/*本示例将活动演示文稿第一张幻灯片配色方案中的背景色设置为红色，并将标题颜色设为绿色。*/
function test() {
    let colorScheme = ActivePresentation.Slides.Item(1).ColorScheme
    colorScheme.Colors(ppBackground).RGB = RGB(255, 0, 0)
    colorScheme.Colors(ppTitle).RGB = RGB(0, 255, 0)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Colors](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ColorScheme/member/Colors) | 返回一个 **[RGBColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/RGBColor/obj)** 对象，该对象代表配色方案中的一种颜色。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ColorScheme/member/Application) | 返回一个 **Application** 对象，该对象表示指定对象的创建者。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ColorScheme/member/Count) | 返回指定集合中的对象数目。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ColorScheme/member/Parent) | 返回指定对象的父对象。 |