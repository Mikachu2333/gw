# Timing.Accelerate

返回或设置计时加速发生的期间的百分比。可读/写。



## 语法

express.**Accelerate**

express   一个代表 **Timing** 对象的变量。

## 类型

number（float 精度）

## 说明


例如，数值 0.9 意味着动画将在前 90% 的时间内逐渐加速到默认速度，并在最后 10% 的时间内保持默认速度。

要在动画结束时减速，请使用 **[Decelerate](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Timing/member/Decelerate)** 属性。



## 示例


```JavaScript
/*本示例向活动演示文稿第一张幻灯片添加一个形状并添加一个动画，慢速启动并在动画序列进行到 30% 后达到默认速度。*/
function test() {
    //Adds rectangle and specifies effect to use for rectangle
    let slide = ActivePresentation.Slides.Item(1)
    let shape = slide.Shapes.AddShape(msoShapeRectangle, 100, 100, 50, 50)
    let effect = slide.TimeLine.MainSequence.AddEffect(shape, msoAnimEffectPathDiamond)
    //Specifies the acceleration for the effect
    effect.Timing.Accelerate = 0.3
}
```


```JavaScript
/*本示例显示活动窗口选定的第一张幻灯片的主动画序列时间线的第一个动画效果计时加速发生期间的百分比。*/
function test() {
    let slide = ActiveWindow.Selection.SlideRange.Item(1)
    let timing = slide.TimeLine.MainSequence.Item(1).Timing
    alert(timing.Accelerate)
}
```
