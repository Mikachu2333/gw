# AnimationBehavior.SetEffect

返回动画行为的 **SetEffect** 对象。只读。



## 语法

express.**SetEffect**

express   一个代表 **AnimationBehavior** 对象的变量。

## 类型

SetEffect

## 说明


可以使用返回的 **SetEffect** 对象设置属性的值。



## 示例


```JavaScript
/*本示例在活动演示文稿的第一张幻灯片中添加一个形状，并设置效果动画行为。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let shape = slide.Shapes.AddShape(msoShapeHeart, 100, 100, 100, 100)
    let effect = slide.TimeLine.MainSequence.AddEffect(shape, msoAnimEffectChangeFillColor, null, msoAnimTriggerAfterPrevious)
    let animationBehavior = effect.Behaviors.Add(msoAnimTypeSet)
    let setEffect = animationBehavior.SetEffect
    setEffect.Property = msoAnimShapeFillColor
    setEffect.To = RGB(0, 255, 255)
}
```


```JavaScript
/*本示例显示活动窗口选定的第一张幻灯片的主动画序列时间线的第一个动画行为的属性是否为msoAnimVisibility。*/
function test() {
    let effect = ActiveWindow.Selection.SlideRange.Item(1).TimeLine.MainSequence.Item(1)
    alert(effect.Behaviors.Item(1).SetEffect.Property == msoAnimVisibility)
}
```
