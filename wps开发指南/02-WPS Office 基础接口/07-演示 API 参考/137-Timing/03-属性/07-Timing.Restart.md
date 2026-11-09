# Timing.Restart

代表动画效果启动一次后是否会重新启动。可读/写。



## 语法

express.**Restart**

express   一个代表 **Timing** 对象的变量。

## 类型

MsoAnimEffectRestart

## 说明


 **Restart** 属性的值可以是下列 **MsoAnimEffectRestart** 常量之一。默认值为 **msoAnimEffectRestartNever** 。

| 常量 |
| ------------------------------- |
| **msoAnimEffectRestartAlways**  |
| **msoAnimEffectRestartNever**   |
| **msoAnimEffectRestartWhenOff** |



## 示例


```JavaScript
/*本示例向活动演示文稿第一张幻灯片添加一个形状并向该形状添加一个动画，然后设置该动画的重新启动动作。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    //Adds shape and sets animation
    let shape = slide.Shapes.AddShape(msoShapeRectangle, 100, 100, 50, 50)
    let effect = slide.TimeLine.MainSequence.AddEffect(shape, msoAnimEffectPathDiamond)
    let timing = effect.Timing
    timing.Duration = 3
    timing.RepeatDuration = 5
    timing.RepeatCount = 3
    timing.Restart = msoAnimEffectRestartAlways
}
```


```JavaScript
/*本示例显示活动窗口选定的第一张幻灯片的主动画序列时间线的第一个动画效果已启动一次后是否当动画关闭时重新启动动画效果。*/
function test() {
    let slide = ActiveWindow.Selection.SlideRange.Item(1)
    let timing = slide.TimeLine.MainSequence.Item(1).Timing
    alert(timing.Restart == msoAnimEffectRestartWhenOff)
}
```
