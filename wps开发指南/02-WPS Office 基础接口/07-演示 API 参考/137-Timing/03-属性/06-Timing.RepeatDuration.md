# Timing.RepeatDuration

设置或返回重复动画应持续的时间（以秒为单位）。可读/写。



## 语法

express.**RepeatDuration**

express   一个代表 **Timing** 对象的变量。

## 类型

number（float 精度）

## 说明


在动画的时间序列与 **RepeatDuration** 属性值二者中较短的时间结束后，动画即停止。



## 示例


```JavaScript
/*本示例向活动演示文稿第一张幻灯片添加形状和动画，然后重复该动画十次。但是，五秒钟后，动画将被截掉，即使动画标注为 20 秒的时间线（如果未指定 Duration 属性，动画默认为两秒）。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    //Adds new shape and sets animation effect
    let shape = slide.Shapes.AddShape(msoShapeRectangle, 100, 100, 50, 50)
    let effect = slide.TimeLine.MainSequence.AddEffect(shape, msoAnimEffectPathDiamond)
    //Sets repeat duration and number of times to repeat animation
    let timing = effect.Timing
    timing.RepeatDuration = 5
    timing.RepeatCount = 10
}
```


```JavaScript
/*本示例显示活动窗口选定的第一张幻灯片的主动画序列时间线的第一个动画重复持续的时间。*/
function test() {
    let slide = ActiveWindow.Selection.SlideRange.Item(1)
    let timing = slide.TimeLine.MainSequence.Item(1).Timing
    alert(timing.RepeatDuration)
}
```
