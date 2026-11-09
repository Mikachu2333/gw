# SlideShowSettings.LoopUntilStopped

决定指定幻灯片放映是否持续循环播放，直到用户按 Esc。可读/写。



## 语法

express.**LoopUntilStopped**

express   一个代表 **SlideShowSettings** 对象的变量。

## 类型

MsoTriState

## 说明


 **LoopUntilStopped** 属性的值可以是下列 **MsoTriState** 常量之一：

| 常量 | 说明 |
| ---------- | -------- |
| **msoFalse** | 指定的幻灯片放映不持续循环播放。 |
| **msoTrue**  | 指定的幻灯片放映持续循环播放，直到用户按 Esc。 |



## 示例


```JavaScript
/*本示例开始当前演示文稿的一个幻灯片放映，该演示文稿自动切换幻灯片（按存储的时间间隔），并循环放映直到用户按 Esc。*/
function test() {
    let slideShowSettings = ActivePresentation.SlideShowSettings
    slideShowSettings.AdvanceMode = ppSlideShowUseSlideTimings
    slideShowSettings.LoopUntilStopped = msoTrue
    slideShowSettings.Run()
}
```


```JavaScript
/*本示例显示第一篇演示文稿中幻灯片放映是否持续循环播放，直到用户按 Esc。*/
function test() {
    let slideShowSettings = Presentations.Item(1).SlideShowSettings
    alert(slideShowSettings.LoopUntilStopped == msoTrue)
}
```
