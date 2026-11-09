# SlideShowView.Exit

结束指定的幻灯片放映。



## 语法

express.**Exit()**

express   一个代表 **SlideShowView** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例将结束第一个幻灯片放映窗口中的幻灯片放映。*/
function test() {
    Application.SlideShowWindows.Item(1).View.Exit()
}
```


```JavaScript
/*本示例判断第一篇演示文稿的放映视图是否处于运行状态，如果处于运行状态，则结束幻灯片放映。*/
function test() {
    let slideShowView = Presentations.Item(1).SlideShowWindow.View
    if (slideShowView.State == ppSlideShowRunning) {
        slideShowView.Exit()
    } else {
        alert("该演示文稿未处于幻灯片放映的运行状态。")
    }
}
```
