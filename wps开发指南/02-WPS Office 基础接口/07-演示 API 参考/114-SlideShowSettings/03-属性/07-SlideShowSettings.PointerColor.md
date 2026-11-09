# SlideShowSettings.PointerColor

以 **[ColorFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ColorFormat/obj)** 对象的形式返回指定演示文稿的指针颜色。只读。



## 语法

express.**PointerColor**

express   一个代表 **SlideShowSettings** 对象的变量。

## 类型

ColorFormat

## 说明


该颜色随演示文稿一起保存，并且是该演示文稿每次运行时的默认绘图笔颜色。

要将指针更改为绘图笔，可将 **[PointerType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowView/member/PointerType)** 属性设置为 **ppSlideShowPointerPen** 。



## 示例


```JavaScript
/*本示例将当前演示文稿的默认绘图笔颜色设为蓝色，然后开始一个幻灯片放映，将指针改变为绘图笔，并设定绘图笔颜色仅在此幻灯片放映中为红色。*/
function test() {
    let slideShowSettings = ActivePresentation.SlideShowSettings
    slideShowSettings.PointerColor.RGB = RGB(0, 0, 255)          //blue
    slideShowSettings.Run().View.PointerColor.RGB = RGB(255, 0, 0)      //red
    slideShowSettings.Run().View.PointerType = ppSlideShowPointerPen
}
```


```JavaScript
/*本示例显示第一篇演示文稿的指针颜色类型是否为msoColorTypeRGB。*/
function test() {
    let slideShowSettings = Presentations.Item(1).SlideShowSettings
    alert(slideShowSettings.PointerColor.Type == msoColorTypeRGB)
}
```
