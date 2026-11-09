# Timing.Speed

返回或设置指定动画的速度（以秒为单位）。可读/写。



## 语法

express.**Speed**

express   一个代表 **Timing** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例将活动演示文稿第一张幻灯片主动画序列时间线的第一个动画设置为正向播放后再反向播放，并且将速度设置为一秒。*/
function test() {
    let timeLine = ActivePresentation.Slides.Item(1).TimeLine
    let timing = timeLine.MainSequence.Item(1).Timing
    timing.AutoReverse = msoTrue
    timing.Speed = 1
}
```


```JavaScript
/*本示例显示活动窗口选定的第一张幻灯片的主动画序列时间线的第一个动画的速度（以秒为单位）。*/
function test() {
    let slide = ActiveWindow.Selection.SlideRange.Item(1)
    let timing = slide.TimeLine.MainSequence.Item(1).Timing
    alert(timing.Speed)
}
```
