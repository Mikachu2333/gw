# SlideShowView.PointerColor

返回一个 **ColorFormat** 对象，该对象代表在幻灯片放映过程中指定演示文稿的指针颜色。只读。



## 语法

express.**PointerColor**

express   一个代表 **SlideShowView** 对象的变量。

## 类型

ColorFormat

## 说明


一旦幻灯片放映结束，该颜色将转变为演示文稿的默认颜色。

要将指针更改为绘图笔，可将 **[PointerType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowView/member/PointerType)** 属性设置为 **ppSlideShowPointerPen** 。



## 示例


```JavaScript
/*本示例将第一篇演示文稿幻灯片放映时的指针更改为绘图笔，并将绘图笔的颜色设置为红色。*/
function test() {
    let slideShowView = Presentations.Item(1).SlideShowWindow.View
    slideShowView.PointerType = ppSlideShowPointerPen
    slideShowView.PointerColor.RGB = RGB(255, 0, 0)
}
```


```JavaScript
/*本示例显示活动演示文稿幻灯片放映视图的指针颜色类型是否为 msoColorTypeRGB。*/
function test() {
    let slideShowView = ActivePresentation.SlideShowWindow.View
    console.log(slideShowView.PointerColor.Type == msoColorTypeRGB)
}
```
