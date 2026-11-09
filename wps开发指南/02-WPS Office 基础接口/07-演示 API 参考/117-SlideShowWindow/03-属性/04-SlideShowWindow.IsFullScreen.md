# SlideShowWindow.IsFullScreen

返回指定幻灯片放映窗口是否占用全屏。只读。



## 语法

express.**IsFullScreen**

express   一个代表 **SlideShowWindow** 对象的变量。

## 类型

MsoTriState

## 说明


 **IsFullScreen** 属性的值可以是下列 **MsoTriState** 常量之一：

| **常量** | **说明** |
| ----- | ----- |
| **msoFalse** | 指定幻灯片放映窗口不占用全屏。 |
| **msoTrue** | 指定幻灯片放映窗口占用全屏。 |



## 示例


```JavaScript
/*本示例运行活动演示文稿的幻灯片放映，然后将全屏的幻灯片放映窗口的高度适当缩小以便可看到任务栏。*/
function test() {
    ActivePresentation.SlideShowSettings.Run()
    let slideShowWindow = Application.SlideShowWindows.Item(1)
    if (slideShowWindow.IsFullScreen == msoTrue) {
        slideShowWindow.Height -= 20
    }
}
```


```JavaScript
/*本示例运行第一篇演示文稿的幻灯片放映，显示最后一个幻灯片放映的窗口是否占用全屏。*/
function test() {
    Presentations.Item(1).SlideShowSettings.Run()
    let slideShowWindow = Application.SlideShowWindows.Item(SlideShowWindows.Count)
    alert(slideShowWindow.IsFullScreen === msoTrue)
}
```
