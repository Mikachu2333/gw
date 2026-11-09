# SlideShowView.Slide

返回一个 **[Slide](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slide/obj)** 对象，该对象代表在指定的幻灯片放映窗口视图中当前显示的幻灯片。只读。



## 语法

express.**Slide**

express   一个代表 **SlideShowView** 对象的变量。

## 类型

Slide

## 说明


如果当前显示的幻灯片来源于一个嵌入演示文稿，则可以使用 [ **Slide** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slide/obj) 对象（从 **Slide** 属性返回）的 [ **Parent** ](#TODO) 属性返回包含该幻灯片的嵌入演示文稿。（[ **SlideShowWindow** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowWindow/obj) 对象或 [ **DocumentWindow** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DocumentWindow/obj) 对象的 [ **Presentation** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowWindow/member/Presentation) 属性返回创建该窗口的演示文稿，而不是该嵌入演示文稿。）



## 示例


```JavaScript
/*本示例显示第一篇演示文稿幻灯片放映视图中当前显示的幻灯片的名称。*/
function test() {
    let slideShowView = Presentations.Item(1).SlideShowWindow.View
    Console.log(slideShowView.Slide.Name)
}
```


```JavaScript
/*本示例将一个跳动的动画添加到活动演示文稿当前幻灯片放映视图的第一个形状中。*/
function test() {
    let slideShowView = ActivePresentation.SlideShowWindow.View
    let shape = slideShowView.Slide.Shapes.Item(1)
    slideShowView.Slide.TimeLine.MainSequence.AddEffect(shape, msoAnimEffectBounce)
}
```
