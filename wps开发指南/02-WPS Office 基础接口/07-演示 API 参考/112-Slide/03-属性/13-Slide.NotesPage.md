# Slide.NotesPage

返回一个 **[SlideRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideRange/obj)** 对象，该对象代表指定幻灯片或幻灯片区域的备注页。只读。



## 语法

express.**NotesPage**

express   一个代表 **Slide** 对象的变量。

## 类型

SlideRange

## 说明


对 **SlideRange** 对象代表的备注页使用下列属性和方法无效： **Copy** 方法、 **Cut** 方法、 **Delete** 方法、 **Duplicate** 方法、 **HeadersFooters** 属性、 **Hyperlinks** 属性、 **Layout** 属性、 **PrintSteps** 属性、 **SlideShowTransition** 属性。

 **NotesPage** 属性返回一张或一组幻灯片的备注页，且只允许对这些备注页进行修改。如果要进行会影响所有备注页的更改，请使用 **NotesMaster** 返回代表备注母版的 **Slide** 对象。



## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片的备注页设置背景填充。*/
function test() {
    let slideRange = ActivePresentation.Slides.Item(1).NotesPage
    slideRange.Background.Fill.PresetGradient(msoGradientHorizontal, 1, msoGradientLateSunset)
}
```


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片的备注页的背景颜色设为绿色。*/
function test() {
    let slideRange = ActivePresentation.Slides.Item(1).NotesPage
    slideRange.ColorScheme.Colors(ppBackground).RGB = RGB(0, 255, 0)
}
```
