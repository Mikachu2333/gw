# SetEffect 对象

代表动画动作的设置效果。可以使用 **SetEffect** 对象设置属性的值。

## 说明


使用 **[AnimationBehavior](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationBehavior/obj)** 对象的 **SetEffect** 属性返回 **SetEffect** 对象。使用 **SetEffect** 对象的 **Property** 和 **To** 属性可以更改设置效果。


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
/*本示例显示活动窗口所选的第一张幻灯片的主动画序列时间线的第一个动画行为的动画属性的结束值是否为“hidden”。*/
function test() {
    let effect = ActiveWindow.Selection.SlideRange.Item(1).TimeLine.MainSequence.Item(1)
    alert(effect.Behaviors.Item(1).SetEffect.To == "hidden")
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Property](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SetEffect/member/Property) | 设置或返回表示动画属性的 **[MsoAnimProperty](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/enum/MsoAnimProperty)** 常量。可读写。 |
| [To](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SetEffect/member/To) | 设置或返回一个 **Variant** 类型值，该值代表 **SetEffect** 对象的 **Type** 属性的值或结束值。可读/写。 |