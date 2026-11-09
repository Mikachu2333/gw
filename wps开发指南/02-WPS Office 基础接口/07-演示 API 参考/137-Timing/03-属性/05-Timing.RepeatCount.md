# Timing.RepeatCount

设置或返回要重复动画的次数。可读/写。



## 语法

express.**RepeatCount**

express   一个代表 **Timing** 对象的变量。

## 类型

number（int 精度）

## 示例


```JavaScript
/*本示例在活动演示文稿第一张幻灯片上创建一个形状并为该形状添加一个动画，然后将该动画重复两次。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let shape = slide.Shapes.AddShape(msoShapeRectangle, 100, 100, 50, 50)
    let effect = slide.TimeLine.MainSequence.AddEffect(shape, msoAnimEffectPathDiamond)
    let timing = effect.Timing
    timing.Duration = 5 // Length of effect.
    timing.RepeatCount = 2 // How many times to repeat.
}
```


```JavaScript
/*本示例显示活动窗口选定的第一张幻灯片的主动画序列时间线的第一个动画要重复的次数。*/
function test() {
    let slide = ActiveWindow.Selection.SlideRange.Item(1)
    let timing = slide.TimeLine.MainSequence.Item(1).Timing
    alert(timing.RepeatCount)
}
```
