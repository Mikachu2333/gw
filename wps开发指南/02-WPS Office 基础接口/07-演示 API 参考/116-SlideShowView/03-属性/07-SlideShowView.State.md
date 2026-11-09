# SlideShowView.State

返回或设置幻灯片放映的状态。可读/写， **PpSlideShowState** 类型。



## 语法

express.**State**

express   一个代表 **SlideShowView** 对象的变量。

## 类型

PpSlideShowState

## 说明


| **State** 属性的值可以是下列 **PpSlideShowState** 常量之一： |
| --------------------------------------------- |
| **ppSlideShowBlackScreen**                    |
| **ppSlideShowDone**                           |
| **ppSlideShowPaused**                         |
| **ppSlideShowRunning**                        |
| **ppSlideShowWhiteScreen**                    |



## 示例


```JavaScript
/*本示例将第一个幻灯片放映窗口的视图状态设为黑屏。*/
function test() {
    Application.SlideShowWindows.Item(1).View.State = ppSlideShowBlackScreen
}
```


```JavaScript
/*本示例判断如果第一篇演示文稿的幻灯片放映视图当前放映状态为 ppSlideShowRunning，则切换到下一张幻灯片。*/
function test() {
    let slideShowView = Presentations.Item(1).SlideShowWindow.View
    if (slideShowView.State == ppSlideShowRunning) {
        slideShowView.Next()
    }
}
```
