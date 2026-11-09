# SlideShowWindow.Activate

激活指定的对象。



## 语法

express.**Activate()**

express   一个代表 **SlideShowWindow** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例运行活动演示文稿的幻灯片放映，然后激活第一个幻灯片放映的窗口。*/
function test() {
    ActivePresentation.SlideShowSettings.Run()
    Application.SlideShowWindows.Item(1).Activate()
}
```


```JavaScript
/*本示例运行第一篇演示文稿的幻灯片放映，并设置最后一个幻灯片放映的窗口的宽度，然后激活最后一个幻灯片放映的窗口。*/
function test() {
    Presentations.Item(1).SlideShowSettings.Run()
    let slideShowWindow = Application.SlideShowWindows.Item(SlideShowWindows.Count)
    slideShowWindow.Width = 1000
    slideShowWindow.Activate()
}
```
