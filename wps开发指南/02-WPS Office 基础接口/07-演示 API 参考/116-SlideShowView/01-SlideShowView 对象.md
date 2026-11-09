# SlideShowView 对象

代表幻灯片放映窗口中的视图。

## 说明


使用 **[SlideShowWindow](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowWindow/obj)** 对象的 **View** 属性可返回 **SlideShowView** 对象。


## 示例


```JavaScript
/*本示例设置第一个幻灯片放映窗口以显示演示文稿的第一张幻灯片。*/
function test() {
    Application.SlideShowWindows.Item(1).View.First()
}
```
使用 **[SlideShowSettings](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowSettings/obj)** 对象的 **Run** 方法创建一个 **SlideShowWindow** 对象，然后使用 **View** 属性返回该窗口所包含的 **SlideShowView** 对象。



```JavaScript
/*本示例运行活动演示文稿的幻灯片放映，将指针更改为绘图笔，并将该放映视图的绘图笔颜色设置为红色。*/
function test() {
    let slideShowView = ActivePresentation.SlideShowSettings.Run().View
    slideShowView.PointerColor.RGB = RGB(255, 0, 0)
    slideShowView.PointerType = ppSlideShowPointerPen
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [EraseDrawing](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowView/member/EraseDrawing) | 删除幻灯片放映时使用 **[DrawLine](#TODO)** 方法或钢笔工具绘制的线条。 |
| [Exit](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowView/member/Exit) | 结束指定的幻灯片放映。 |
| [First](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowView/member/First) | 设置指定的幻灯片放映视图，显示演示文稿的第一张幻灯片。 |
| [GetClickCount](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowView/member/GetClickCount) | 返回为幻灯片定义的鼠标单击次数。 |
| [GetClickIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowView/member/GetClickIndex) | 返回启动当前正在幻灯片上播放或者刚刚已经播放完的动画的当前鼠标单击的索引号。 |
| [GotoClick](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowView/member/GotoClick) | 播放幻灯片上与指定的鼠标单击关联的动画以及随后的任何动画。 |
| [GotoSlide](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowView/member/GotoSlide) | 在幻灯片放映期间切换到指定幻灯片。可指定是否要重运行动画效果。 |
| [Last](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowView/member/Last) | 将指定的幻灯片放映视图设置为显示演示文稿中的上一张幻灯片。 |
| [Next](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowView/member/Next) | 显示紧接当前显示的幻灯片之后的幻灯片。 |
| [Previous](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowView/member/Previous) | 显示紧邻当前显示的幻灯片之前的幻灯片。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowView/member/Application) | 返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/obj)** 对象，该对象表示指定对象的创建者。 |
| [CurrentShowPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowView/member/CurrentShowPosition) | 返回当前幻灯片在指定视图下显示的幻灯片放映中的位置。只读， **Long** 类型。 |
| [PointerColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowView/member/PointerColor) | 返回一个 **ColorFormat** 对象，该对象代表在幻灯片放映过程中指定演示文稿的指针颜色。只读。 |
| [PointerType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowView/member/PointerType) | 返回或设置在幻灯片放映中使用的指针类型。可读/写， **PpSlideShowPointerType** 类型。 |
| [Slide](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowView/member/Slide) | 返回一个 **[Slide](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slide/obj)** 对象，该对象代表在指定的幻灯片放映窗口视图中当前显示的幻灯片。只读。 |
| [SlideShowName](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowView/member/SlideShowName) | 返回当前在指定幻灯片放映视图中运行的自定义幻灯片放映的名称。只读。 |
| [State](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowView/member/State) | 返回或设置幻灯片放映的状态。可读/写， **PpSlideShowState** 类型。 |
| [Zoom](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowView/member/Zoom) | 以正常大小的百分比形式返回指定幻灯片放映窗口视图的缩放设置。只读。 |