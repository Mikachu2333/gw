# Timing.Duration

返回或设置以秒为单位的动画长度。可读/写。



## 语法

express.**Duration**

express   一个代表 **Timing** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例显示活动窗口选定的第一张幻灯片的主动画序列时间线的第一个动画效果的长度。*/
function test() {
    let slide = ActiveWindow.Selection.SlideRange.Item(1)
    let timing = slide.TimeLine.MainSequence.Item(1).Timing
    alert(timing.Duration)
}
```


```JavaScript
/*本示例向活动演示文稿第一张幻灯片添加一个心形并添加一个动画长度为 5 秒的飞入动画。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let shape = slide.Shapes.AddShape(msoShapeHeart, 80, 80, 120, 120)
    let effect = slide.TimeLine.MainSequence.AddEffect(shape, msoAnimEffectFly)
    effect.Timing.Duration = 5
}
```
