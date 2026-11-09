# SlideShowView.First

设置指定的幻灯片放映视图，显示演示文稿的第一张幻灯片。



## 语法

express.**First()**

express   一个代表 **SlideShowView** 对象的变量。

## 返回值

void

## 说明


如果使用 **First** 方法在幻灯片放映过程中从一张幻灯片切换到另一张幻灯片，返回原幻灯片时，它的动画继续从被中断处开始放映。



## 示例


```JavaScript
/*本示例设置第一个幻灯片放映窗口以显示演示文稿的第一张幻灯片。*/
function test() {
    Application.SlideShowWindows.Item(1).View.First()
}
```


```JavaScript
/*本示例将第一篇演示文稿的放映视图切换到第一张幻灯片，并在立即窗口显示该幻灯片的名称。*/
function test() {
    let slideShowView = Presentations.Item(1).SlideShowWindow.View
    slideShowView.First()
    console.log(slideShowView.Slide.Name)
}
```
