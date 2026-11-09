# Master 对象

代表一个幻灯片母版、标题母版、讲义母版、备注母版或设计母版。

## 说明


若要返回一个 **Master** 对象，请使用 **[Slide](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slide/obj)** 对象或 **[SlideRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideRange/obj)** 集合的 **Master** 属性，或使用 **[Presentation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/obj)** 对象的 **[HandoutMaster](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/HandoutMaster)** 、 **[NotesMaster](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/NotesMaster)** 、 **[SlideMaster](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/SlideMaster)** 或 **[TitleMaster](#TODO)** 属性。请注意，这些属性中的某些也可用于 **[Design](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Design/obj)** 对象。


## 示例


```JavaScript
/*本示例显示活动演示文稿的幻灯片母版的背景填充的预设渐变类型是否为msoGradientDaybreak。*/
function test() {
    let master = ActivePresentation.SlideMaster
    alert(master.Background.Fill.PresetGradientType == msoGradientDaybreak)
}
```
若要为演示文稿添加标题母版或设计并返回代表新标题母版或设计的 **[Master](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Master/obj)** 对象，请使用 **[AddTitleMaster](#TODO)** 方法。



```JavaScript
/*本示例将一个出现动画添加到活动演示文稿第一张幻灯片的幻灯片母版的第一个形状中。*/
function test() {
    let master = ActivePresentation.Slides.Item(1).Master
    let shape = master.Shapes.Item(1)
    master.TimeLine.MainSequence.AddEffect(shape, msoAnimEffectAppear)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Master/member/Delete) | 删除指定的 **Master** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Master/member/Application) | 返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/obj)** 对象，该对象表示指定对象的创建者。 |
| [Background](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Master/member/Background) | 返回代表幻灯片母版背景的 **[ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/obj)** 对象。 |
| [ColorScheme](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Master/member/ColorScheme) | 返回或设置 **[ColorScheme](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ColorScheme/obj)** 对象，该对象代表指定幻灯片、幻灯片区域或幻灯片母版的配色方案。可读/写。 |
| [CustomLayouts](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Master/member/CustomLayouts) | 返回一个 **[CustomLayouts](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/CustomLayouts/obj)** 对象，该对象代表与指定 **[Master](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Master/obj)** 对象的演示文稿设计关联的自定义布局。只读。 |
| [Design](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Master/member/Design) | 返回代表设计的 **Design** 对象。 |
| [HeadersFooters](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Master/member/HeadersFooters) | 返回一个 **[HeadersFooters](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/HeadersFooters/obj)** 集合，该集合代表与幻灯片、幻灯片母版或幻灯片区域相关联的页眉、页脚、日期和时间以及幻灯片编号。只读。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Master/member/Height) | 返回指定对象的高度（以磅为单位）。只读。 |
| [Hyperlinks](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Master/member/Hyperlinks) | 返回一个代表指定幻灯片中的所有超链接的 **[Hyperlinks](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Hyperlinks/obj)** 集合。只读。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Master/member/Name) | 返回或设置指定对象的名称。可读/写。 |
| [Shapes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Master/member/Shapes) | 返回一个 **[Shapes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/obj)** 集合，该集合代表被放置或插入到指定幻灯片、幻灯片母版或幻灯片组的所有元素。只读。 |
| [SlideShowTransition](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Master/member/SlideShowTransition) | 返回一个 **[SlideShowTransition](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowTransition/obj)** 对象，该对象代表指定幻灯片切换的特殊效果。只读。 |
| [TextStyles](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Master/member/TextStyles) | 返回一个 **[TextStyles](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextStyles/obj)** 集合，该集合代表用于指定幻灯片母版的三种文本样式，即标题文本、正文文本和默认文本。只读。 |
| [Theme](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Master/member/Theme) | 返回一个 **OfficeTheme** 对象，该对象代表指定的幻灯片母版、标题母版、讲义母版、备注母版或设计母版所使用的主题。 |
| [TimeLine](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Master/member/TimeLine) | 返回 **[TimeLine](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TimeLine/obj)** 对象，该对象代表幻灯片的动画时间线。只读。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Master/member/Width) | 返回指定对象的宽度（以磅为单位）。只读。 |