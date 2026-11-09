# SlideShowWindow.Width

以磅为单位返回或设置指定对象的宽度。可读/写。



## 语法

express.**Width**

express   一个代表 **SlideShowWindow** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例运行第一篇演示文稿的幻灯片放映，设置第一个幻灯片放映的窗口的宽度和高度。*/
function test() {
    Presentations.Item(1).SlideShowSettings.Run()
    let slideShowWindow = Application.SlideShowWindows.Item(1)
    slideShowWindow.Width /= 2
    slideShowWindow.Height /= 2
}
```


```JavaScript
/*本示例运行活动演示文稿的幻灯片放映，然后显示该幻灯片放映的窗口的宽度。*/
function test() {
    let slideShowWindow = ActivePresentation.SlideShowSettings.Run()
    alert(slideShowWindow.Width + " 磅")
}
```
