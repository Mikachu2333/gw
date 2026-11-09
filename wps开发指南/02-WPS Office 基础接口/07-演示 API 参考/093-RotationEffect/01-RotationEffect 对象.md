# RotationEffect 对象

代表 **[AnimationBehavior](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationBehavior/obj)** 对象的旋转效果。

## 说明


使用 **AnimationBehavior** 对象的 [ **RotationEffect** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationBehavior/member/RotationEffect) 属性返回 **RotationEffect** 对象。


## 示例


```JavaScript
/*本示例显示活动演示文稿第一张幻灯片的主动画序列时间线的第一个动画行为的起始旋转角度。*/
function test() {
    let effect = ActivePresentation.Slides.Item(1).TimeLine.MainSequence.Item(1)
    alert(effect.Behaviors.Item(1).RotationEffect.From)
}
```
使用 **RotationEffect** 对象的 [ **By** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/RotationEffect/member/By)、[ **From** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/RotationEffect/member/From) 和 [ **To** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/RotationEffect/member/To) 属性改变对象的动画旋转。



```JavaScript
/*本示例向活动演示文稿第一张幻灯片中添加一个新形状，并设置该形状的旋转动画动作。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.AddShape(msoShape5pointStar, 0, 0, 100, 100)
    let effect = ActivePresentation.Slides.Item(1).TimeLine.MainSequence.AddEffect(shape, msoAnimEffectCustom)
    let animationBehavior = effect.Behaviors.Add(msoAnimTypeRotation)
    let rotationEffect = animationBehavior.RotationEffect
    //Rotate 270 degrees from current position
    rotationEffect.By = 270
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [By](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/RotationEffect/member/By) | 设置或返回一个 **Single** 类型值，该值代表对象旋转的指定度数；例如，值 180 表示对象旋转 180 度。可读/写。 |
| [From](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/RotationEffect/member/From) | 设置或返回一个代表初始角度（以度为单位）的 **Single** 类型值，该角度是相对于屏幕指定的（例如，90 度表示完全水平）。可读/写。 |
| [To](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/RotationEffect/member/To) | 设置或返回一个代表对象旋转结束角度（以度为单位）的 **Single** 类型值，该角度是相对于屏幕指定的（例如，90 度表示完全水平）。可读/写。 |