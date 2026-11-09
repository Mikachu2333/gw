# ScaleEffect 对象

代表 **[AnimationBehavior](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationBehavior/obj)** 对象的缩放效果。

## 说明


使用 **AnimationBehavior** 对象的 [ **ScaleEffect** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationBehavior/member/ScaleEffect) 属性返回 **ScaleEffect** 对象。


## 示例


```JavaScript
/*本示例显示活动演示文稿第一张幻灯片的主动画序列时间线的第一个动画行为的水平缩放的屏幕宽度百分比。*/
function test() {
    let effect = ActivePresentation.Slides.Item(1).TimeLine.MainSequence.Item(1)
    alert(effect.Behaviors.Item(1).ScaleEffect.ByX)
}
```
使用 **ScaleEffect** 对象的 [ **ByX** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ScaleEffect/member/ByX)、[ **ByY** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ScaleEffect/member/ByY)、[ **FromX** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ScaleEffect/member/FromX)、[ **FromY** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ScaleEffect/member/FromY)、[ **ToX** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ScaleEffect/member/ToX) 和 [ **ToY** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ScaleEffect/member/ToY) 属性操纵对象的缩放。



```JavaScript
/*本示例将活动演示文稿的第一个幻灯片上第一个形状从零开始缩放，逐渐增大，直至达到其原始大小的100%。本示例假定第一张幻灯片上有一个形状。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let shape = slide.Shapes.Item(1)
    let effect = slide.TimeLine.MainSequence.AddEffect(shape, msoAnimEffectCustom)
    let animationBehavior = effect.Behaviors.Add(msoAnimTypeScale)
    let scaleEffect = animationBehavior.ScaleEffect
    //Starting size
    scaleEffect.FromX = 0
    scaleEffect.FromY = 0
    //Size after scale effect
    scaleEffect.ToX = 100
    scaleEffect.ToY = 100
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [ByX](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ScaleEffect/member/ByX) | 设置或返回 **Single** 类型值，该值代表按指定的屏幕宽度百分比水平缩放对象。例如，缩放效果值为 50 表示将对象向右缩小为屏幕宽度的一半。可读/写。 |
| [ByY](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ScaleEffect/member/ByY) | 设置或返回 **Single** 类型值，该值代表按指定的屏幕宽度百分比垂直缩放对象。可读/写。 |
| [FromX](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ScaleEffect/member/FromX) | 设置或返回 **Single** 类型值，该值代表 **[ScaleEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ScaleEffect/obj)** 对象的起始宽度，它以屏幕宽度百分比的形式指定。可读/写。 |
| [FromY](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ScaleEffect/member/FromY) | 返回或设置 **Single** 类型值，该值代表 **[ScaleEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ScaleEffect/obj)** 对象的初始高度，它以屏幕宽度百分比的形式指定。可读/写。 |
| [ToX](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ScaleEffect/member/ToX) | 设置或返回 **Single** 类型值，该值代表 **[ScaleEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ScaleEffect/obj)** 对象的最终宽度，它以屏幕宽度百分比的形式指定。可读/写。 |
| [ToY](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ScaleEffect/member/ToY) | 返回或设置 **Single** 类型值，该值代表 **[ScaleEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ScaleEffect/obj)** 对象的最终高度，它以屏幕宽度百分比的形式指定。可读/写。 |