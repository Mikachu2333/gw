# AnimationBehavior.PropertyEffect

返回给定动画动作的 **[PropertyEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PropertyEffect/obj)** 对象。只读。



## 语法

express.**PropertyEffect**

express   一个代表 **AnimationBehavior** 对象的变量。

## 类型

PropertyEffect

## 示例


```JavaScript
/*本示例向活动演示文稿第一张幻灯片中添加一个形状，并对该形状添加一个三秒钟的填充动画，然后将填充动画设置为彩色。*/
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
    propertyEffect.From = RGB(0, 0, 255)
    propertyEffect.To = RGB(255, 0, 0)
}
```


```JavaScript
/*本示例显示活动窗口选定的第一张幻灯片的主动画序列时间线的第一个动画行为属性的结束值是否为“visible”。*/
function test() {
    let effect = ActiveWindow.Selection.SlideRange.Item(1).TimeLine.MainSequence.Item(1)
    alert(effect.Behaviors.Item(1).PropertyEffect.To == "visible")
}
```
