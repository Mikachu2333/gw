# AnimationPoint.Time

设置或返回给定动画点的时间。可读/写。



## 语法

express.**Time**

express   一个代表 **AnimationPoint** 对象的变量。

## 类型

number（float 精度）

## 说明


 **Time** 属性的值可以是介于 0 和 1 之间的任何浮点值，表示从 0% 到 100% 的整个时间线的百分比。例如，值 0.2 对应于从左到右的整个时间轴持续时间的 20% 处的时间点。



## 示例


```JavaScript
/*本示例向活动演示文稿第一张幻灯片的主序列动画时间线中插入三个填充颜色的动画点。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let timeLine = ActivePresentation.Slides.Item(1).TimeLine
    let effect = timeLine.MainSequence.AddEffect(shape, msoAnimEffectBlinds)
    let animationBehavior = timeLine.MainSequence.Item(1).Behaviors.Add(msoAnimTypeProperty)
    let propertyEffect = animationBehavior.PropertyEffect
    propertyEffect.Property = msoAnimShapeFillColor
    let animationPoint1 = propertyEffect.Points.Add()
    animationPoint1.Time = 0.2
    animationPoint1.Value = RGB(0, 0, 0)
    let animationPoint2 = propertyEffect.Points.Add()
    animationPoint2.Time = 0.5
    animationPoint2.Value = RGB(0, 255, 0)
    let animationPoint3 = propertyEffect.Points.Add()
    animationPoint3.Time = 1
    animationPoint3.Value = RGB(0, 255, 255)
}
```


```JavaScript
/*本示例显示活动窗口选定的第一张幻灯片的主序列动画时间线第二个动画动作属性的第一个动画点的时间。*/
function test() {
    let propertyEffect = ActiveWindow.Selection.SlideRange.Item(1).TimeLine.MainSequence.Item(1).Behaviors.Item(2).PropertyEffect
    alert(propertyEffect.Points.Item(1).Time)
}
```
