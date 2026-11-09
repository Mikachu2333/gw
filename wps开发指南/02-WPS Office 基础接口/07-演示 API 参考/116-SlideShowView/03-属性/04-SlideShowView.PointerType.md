# SlideShowView.PointerType

返回或设置在幻灯片放映中使用的指针类型。可读/写， **PpSlideShowPointerType** 类型。



## 语法

express.**PointerType**

express   一个代表 **SlideShowView** 对象的变量。

## 类型

PpSlideShowPointerType

## 说明


| **PointerType** 可以是下列 **PpSlideShowPointerType** 常量之一： |
| --------------------------------------------------------- |
| **ppSlideShowPointerAlwaysHidden**                        |
| **ppSlideShowPointerArrow**                               |
| **ppSlideShowPointerAutoArrow**                           |
| **ppSlideShowPointerEraser**                              |
| **ppSlideShowPointerNone**                                |
| **ppSlideShowPointerPen**                                 |



## 示例


```JavaScript
/*本示例运行活动演示文稿的幻灯片放映，将指针更改为绘图笔，并将该放映视图的绘图笔颜色设置为红色。*/
function test() {
    let slideShowView = ActivePresentation.SlideShowSettings.Run().View
    slideShowView.PointerColor.RGB = RGB(255, 0, 0)
    slideShowView.PointerType = ppSlideShowPointerPen
}
```


```JavaScript
/*本示例将第一篇演示文稿幻灯片放映时的指针切换为橡皮擦指针。*/
function test() {
    let slideShowView = Presentations.Item(1).SlideShowWindow.View
    slideShowView.PointerType = ppSlideShowPointerEraser
}
```
