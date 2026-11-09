# Timing.Decelerate

设置或返回将发生记时减速过程的期间百分比。可读/写。



## 语法

express.**Decelerate**

express   一个代表 **Timing** 对象的变量。

## 类型

number（float 精度）

## 说明


例如，数值 0.9 表示减速过程以默认速度启动，经过动画持续时间的 10% 之后开始减速。



## 示例


```JavaScript
/*本示例向活动演示文稿第一张幻灯片添加一个形状并添加一个动画，该动画以默认速度启动，在动画完成 70% 以后开始减速。*/
function test() {
    //Adds rectangle and sets animation effect
    let slide = ActivePresentation.Slides.Item(1)
    let shape = slide.Shapes.AddShape(msoShapeRectangle, 100, 100, 50, 50)
    let effect = slide.TimeLine.MainSequence.AddEffect(shape, msoAnimEffectPathDiamond)
    //Slows the effect after seventy percent of the animation has finished
    effect.Timing.Decelerate = 0.3
}
```


```JavaScript
/*本示例显示活动窗口选定的第一张幻灯片的主动画序列时间线的第一个动画效果计时减速持续期间的百分比。*/
function test() {
    let slide = ActiveWindow.Selection.SlideRange.Item(1)
    let timing = slide.TimeLine.MainSequence.Item(1).Timing
    alert(timing.Decelerate)
}
```
