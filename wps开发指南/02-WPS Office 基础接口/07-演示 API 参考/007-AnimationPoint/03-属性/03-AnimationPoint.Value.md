# AnimationPoint.Value

设置或返回动画点的属性值。可读/写。



## 语法

express.**Value**

express   一个代表 **AnimationPoint** 对象的变量。

## 类型

any

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
/*本示例显示活动窗口选定的第一张幻灯片的主序列动画时间线第二个动画动作属性的第一个动画点的属性值。*/
function test() {
    let propertyEffect = ActiveWindow.Selection.SlideRange.Item(1).TimeLine.MainSequence.Item(1).Behaviors.Item(2).PropertyEffect
    alert(propertyEffect.Points.Item(1).Value)
}
```
