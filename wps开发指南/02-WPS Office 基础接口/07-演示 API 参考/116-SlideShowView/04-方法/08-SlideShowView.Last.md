# SlideShowView.Last

将指定的幻灯片放映视图设置为显示演示文稿中的上一张幻灯片。



## 语法

express.**Last()**

express   一个代表 **SlideShowView** 对象的变量。

## 返回值

void

## 说明


如果使用 **Last** 方法在幻灯片放映过程中从一张幻灯片切换到另一张幻灯片，则在返回原幻灯片时，其中的动画继续从被中断处开始放映。



## 示例


```JavaScript
/*本例将第一个幻灯片放映窗口设置为显示演示文稿中的上一张幻灯片。*/
function test() {
    Application.SlideShowWindows.Item(1).View.Last()
}
```


```JavaScript
/*本示例判断如果第一篇演示文稿的放映视图处于运行状态，则放映视图将切换到上一张幻灯片。*/
function test() {
    let slideShowView = Presentations.Item(1).SlideShowWindow.View
    if (slideShowView.State == ppSlideShowRunning) {
        slideShowView.Last()
        console.log("已切换到上一张幻灯片。")
    }
}
```
