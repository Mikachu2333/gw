# AnimationPoint.Formula

返回或设置 **String** 类型的值，该值代表用于计算动画的公式。可读/写。



## 语法

express.**Formula**

express   一个代表 **AnimationPoint** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例向活动演示文稿第一张幻灯片中添加一个形状，并对该形状添加一个三秒钟的填充动画，然后将添加一个动画点并设置用于计算动画的公式。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    //Adds rectangle and sets animation effect
    let shape = slide.Shapes.AddShape(msoShapeRectangle, 100, 100, 50, 50)
    let effect = slide.TimeLine.MainSequence.AddEffect(shape, msoAnimEffectBlinds)
    //Sets the duration of the animation
    effect.Timing.Duration = 3
    //Adds a behavior to the animation
    let animationBehavior = effect.Behaviors.Add(msoAnimTypeProperty)
    //Sets the animation color effect and the formula to use
    let propertyEffect = animationBehavior.PropertyEffect
    propertyEffect.Property = msoAnimColor
    propertyEffect.Points.Add().Formula = RGB(255, 255, 255)
}
```


```JavaScript
/*本示例显示活动窗口选定的第一张幻灯片的主序列动画时间线第二个动画动作属性的第一个动画点用于计算动画的公式。*/
function test() {
    let propertyEffect = ActiveWindow.Selection.SlideRange.Item(1).TimeLine.MainSequence.Item(1).Behaviors.Item(2).PropertyEffect
    alert(propertyEffect.Points.Item(1).Formula)
}
```
