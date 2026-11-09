# SlideShowWindow.Height

以磅为单位返回或设置指定对象的高度。可读/写。



## 语法

express.**Height**

express   一个代表 **SlideShowWindow** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例运行活动演示文稿的幻灯片放映，然后显示第一个幻灯片放映的窗口的高度。*/
function test() {
    ActivePresentation.SlideShowSettings.Run()
    alert(Application.SlideShowWindows.Item(1).Height + " 磅")
}
```


```JavaScript
/*本示例运行第一篇演示文稿的幻灯片放映，设置最后一个幻灯片放映的窗口的高度。*/
function test() {
    Presentations.Item(1).SlideShowSettings.Run()
    let slideShowWindow = Application.SlideShowWindows.Item(SlideShowWindows.Count)
    slideShowWindow.Height = 700
}
```
