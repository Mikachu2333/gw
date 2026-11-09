# SlideShowView.EraseDrawing

删除幻灯片放映时使用 **[DrawLine](#TODO)** 方法或钢笔工具绘制的线条。



## 语法

express.**EraseDrawing()**

express   一个代表 **SlideShowView** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例清除第一个幻灯片放映窗口放映幻灯片时绘制的线条。*/
function test() {
    SlideShowWindows.Item(1).View.EraseDrawing()
}
```


```JavaScript
/*本示例判断如果活动演示文稿的幻灯片放映时的指针为绘图笔，则清除幻灯片放映中所绘制的线条。*/
function test() {
    let slideShowView = ActivePresentation.SlideShowSettings.Run().View
    if (slideShowView.PointerType == ppSlideShowPointerPen) {
        slideShowView.EraseDrawing()
    }
}
```
