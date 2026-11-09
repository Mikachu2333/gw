# SlideShowWindow.View

返回一个 [SlideShowView](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowView/obj) 对象。只读。



## 语法

express.**View**

express   一个代表 **SlideShowWindow** 对象的变量。

## 类型

SlideShowView

## 示例


```JavaScript
/*本示例运行活动演示文稿的幻灯片放映，然后结束第一个幻灯片放映窗口中的幻灯片放映，最后将视图设置为幻灯片视图并显示第一张幻灯片。*/
function test() {
    ActivePresentation.SlideShowSettings.Run()
    Application.SlideShowWindows.Item(1).View.Exit()
    ActiveWindow.ViewType = ppViewSlide
    ActiveWindow.View.GotoSlide(1)
}
```


```JavaScript
/*本示例运行活动演示文稿的幻灯片放映，然后将该演示文稿幻灯片放映时的指针更改为绘图笔。*/
function test() {
    let slideShowView = ActivePresentation.SlideShowSettings.Run().View
    slideShowView.PointerType = ppSlideShowPointerPen
}
```
