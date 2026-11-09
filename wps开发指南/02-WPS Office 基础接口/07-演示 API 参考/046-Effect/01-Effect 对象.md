# Effect 对象

代表有关幻灯片动画的计时信息。

## 说明


使用 [ **AddEffect** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Sequence/member/AddEffect) 方法添加一个效果。


## 示例


```JavaScript
/*本示例向当前演示文稿第一张幻灯片添加一个形状并向形状中添加一种动画效果和动画行为。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let shape = slide.Shapes.AddShape(msoShape5pointStar, 150, 72, 400, 400)
    let effect = slide.TimeLine.MainSequence.AddEffect(shape, msoAnimEffectStretchy, msoAnimTriggerAfterPrevious)
    let scaleEffect = effect.Behaviors.Add(msoAnimTypeScale).ScaleEffect
    scaleEffect.FromX = 75
    scaleEffect.FromY = 75
    scaleEffect.ToX = 0
    scaleEffect.ToY = 0
    effect.Timing.AutoReverse = msoTrue
}
```
若要引用现有的 **Effect** 对象，请使用 **[MainSequence](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TimeLine/member/MainSequence)** (_index_)，其中 _index_ 是 **Effect** 对象在 **[Sequence](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Sequence/obj)** 集合中的编号。



```JavaScript
/*本示例更改第一个序列的动画效果，并为该效果指定动画行为。*/
function test() {
    let effect = ActivePresentation.Slides.Item(1).TimeLine.MainSequence.Item(1)
    effect.EffectType = msoAnimEffectSpin
    let rotationEffect = effect.Behaviors.Item(1).RotationEffect
    rotationEffect.From = 100
    rotationEffect.To = 360
    rotationEffect.By = 5
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Effect/member/Delete) | 删除指定的 **Effect** 对象。 |
| [MoveTo](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Effect/member/MoveTo) | 将指定对象移动到同一集合中的指定位置，并适当地对集合中所有其他项目进行重新编号。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Behaviors](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Effect/member/Behaviors) | 以 **[AnimationBehaviors](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationBehaviors/obj)** 集合的形式返回指定的幻灯片动画行为。 |
| [DisplayName](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Effect/member/DisplayName) | 返回动画效果的名称。只读。 |
| [EffectInformation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Effect/member/EffectInformation) | 返回一个 **[EffectInformation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/EffectInformation/obj)** 对象，该对象代表指定动画效果的信息。 |
| [EffectParameters](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Effect/member/EffectParameters) | 返回一个代表动画效果属性的 **[EffectParameters](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/EffectParameters/obj)** 对象。 |
| [EffectType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Effect/member/EffectType) | 设置或返回 **MsoAnimEffect** 常量，该常量代表动画效果的类型。可读/写。 |
| [Exit](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Effect/member/Exit) | 决定动画效果是否为退出效果。可读/写。 |
| [Index](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Effect/member/Index) | 返回 **Long** 类型值，该值代表动画效果或设计的索引号。只读。 |
| [Paragraph](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Effect/member/Paragraph) | 返回或设置文本范围中要应用动画效果的段落。可读/写。 |
| [Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Effect/member/Shape) | 返回一个代表具有动画效果的形状的 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/obj)** 对象。 |
| [TextRangeLength](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Effect/member/TextRangeLength) | 返回一个 **Long** 类型的值，该值代表文本区域的长度。只读。 |
| [TextRangeStart](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Effect/member/TextRangeStart) | 返回文本区域的起始位置。只读。 |
| [Timing](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Effect/member/Timing) | 返回 **[Timing](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Timing/obj)** 对象，该对象代表动画序列的计时属性。 |