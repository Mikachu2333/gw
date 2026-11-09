# Timing.AutoReverse

决定某个效果是否应在正向播放结束后进行反向播放，从而使播放时间增加一倍。可读/写。



## 语法

express.**AutoReverse**

express   一个代表 **Timing** 对象的变量。

## 类型

MsoTriState

## 说明


 **AutoReverse** 属性的值可以是下列 **MsoTriState** 常量之一：

| 常量           | 说明                  |
| ------------ | ------------------- |
| **msoFalse** | 默认值。效果不会正向播放后再反向播放。 |
| **msoTrue**  | 效果正向播放后再反向播放。       |



## 示例


```JavaScript
/*本示例向活动演示文稿第一张幻灯片添加一个形状并向其添加动画效果；然后将动画设置为正向播放结束后反向播放。*/
function test() {
    //Adds rectangle and applies diamond effect
    let slide = ActivePresentation.Slides.Item(1)
    let shape = slide.Shapes.AddShape(msoShapeRectangle, 100, 100, 50, 50)
    let effect = slide.TimeLine.MainSequence.AddEffect(shape, msoAnimEffectPathDiamond)
    //Sets the duration of and reverses the effect
    let timing = effect.Timing
    //Length of effect.
    timing.Duration = 5
    timing.AutoReverse = msoTrue
}
```


```JavaScript
/*本示例显示活动窗口选定的第一张幻灯片的主动画序列时间线的第一个动画效果在正向播放结束后是否进行反向播放。*/
function test() {
    let slide = ActiveWindow.Selection.SlideRange.Item(1)
    let timing = slide.TimeLine.MainSequence.Item(1).Timing
    alert(timing.AutoReverse == msoTrue)
}
```
