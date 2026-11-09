# SlideShowWindow.Top

返回或设置一个 **Single** 类型值，该值代表幻灯片放映窗口的上边缘到应用程序窗口用户区域上边缘的距离（以磅为单位）。可读/写。



## 语法

express.**Top**

express   一个代表 **SlideShowWindow** 对象的变量。

## 类型

number（float 精度）

## 说明


将该属性设为一个很大的正值或负值会将整个窗口移出桌面。



## 示例


```JavaScript
/*本示例运行第一篇演示文稿的幻灯片放映，设置第一个幻灯片放映的窗口的上边缘到应用程序窗口用户区域上边缘的距离和幻灯片放映窗口的高度。*/
function test() {
    Presentations.Item(1).SlideShowSettings.Run()
    let slideShowWindow = Application.SlideShowWindows.Item(1)
    slideShowWindow.Top /= 2
    slideShowWindow.Height /= 2
}
```


```JavaScript
/*本示例运行活动演示文稿的幻灯片放映，然后显示最后一个幻灯片放映的窗口的上边缘到应用程序窗口用户区域上边缘的距离。*/
function test() {
    ActivePresentation.SlideShowSettings.Run()
    let slideShowWindow = Application.SlideShowWindows.Item(SlideShowWindows.Count)
    alert(slideShowWindow.Top + " 磅")
}
```
