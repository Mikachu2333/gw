# PropertyEffect 对象

代表一个 **[AnimationBehavior](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationBehavior/obj)** 对象的属性效果。

## 说明


使用 **[AnimationBehavior](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationBehavior/obj)** 对象的 **PropertyEffect** 属性返回一个 **PropertyEffect** 对象。


## 示例


```JavaScript
/*本示例显示活动演示文稿第一张幻灯片的主动画序列时间线的第一个动画行为属性的结束值是否为“hidden”。*/
function test() {
    let effect = ActivePresentation.Slides.Item(1).TimeLine.MainSequence.Item(1)
    alert(effect.Behaviors.Item(1).PropertyEffect.To == "hidden")
}
```
使用 **[Points](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PropertyEffect/member/Points)** 属性可访问特定动画行为的动画点。如果只想更改动画行为的两种状态，请使用 **[From](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PropertyEffect/member/From)** 和 **[To](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PropertyEffect/member/To)** 属性。



```JavaScript
/*本示例向活动演示文稿第一张幻灯片中添加一个形状，并对该形状添加一个三秒钟的填充动画，然后将填充动画设置为彩色。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let shape = slide.Shapes.AddShape(msoShapeRectangle, 100, 100, 50, 50)
    let effect = slide.TimeLine.MainSequence.AddEffect(shape, msoAnimEffectBlinds)
    effect.Timing.Duration = 3
    let animationBehavior = effect.Behaviors.Add(msoAnimTypeProperty)
    let propertyEffect = animationBehavior.PropertyEffect
    propertyEffect.Property = msoAnimColor
    propertyEffect.From = RGB(0, 0, 255)
    propertyEffect.To = RGB(255, 0, 0)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [From](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PropertyEffect/member/From) | 设置或返回一个 **Variant** 类型的值，该值代表对象的属性的起始值。读/写。 |
| [Points](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PropertyEffect/member/Points) | 返回一个 **AnimationPoints** 对象，该对象表示动画点。 |
| [Property](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PropertyEffect/member/Property) | 设置或返回一个 **[MsoAnimProperty](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/enum/MsoAnimProperty)** 常量，代表一个动画属性。读/写。 |
| [To](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PropertyEffect/member/To) | 设置或返回一个 **Variant** 类型的值，该值代表对象的属性的结束值。读/写。 |