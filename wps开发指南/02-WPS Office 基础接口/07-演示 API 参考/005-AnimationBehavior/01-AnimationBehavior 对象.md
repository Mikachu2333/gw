# AnimationBehavior 对象

代表动画效果、主动画序列或交互式动画序列的动作。 **AnimationBehavior** 对象是 **[AnimationBehaviors](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationBehaviors/obj)** 集合的成员。

## 说明


使用 [ **Behaviors** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Effect/member/Behaviors)(_index_) 返回单个 **AnimationBehavior** 对象，其中 _index_ 是动作序列中动作的编号。


## 示例


```JavaScript
/*本示例设置活动演示文稿第一张幻灯片主动画序列时间线的第一个动画效果旋转位置的起点和终点。本示例假定的主动画序列的第一个行为是一个 RotationEffect 对象。*/
function test() {
    let rotationEffect = ActivePresentation.Slides.Item(1).TimeLine.MainSequence.Item(1).Behaviors.Item(1).RotationEffect
    rotationEffect.From = 1
    rotationEffect.To = 180
}
```


```JavaScript
/*本示例删除活动窗口选定的第一张幻灯片的主动画序列时间线的第一个动画效果行为。*/
function test() {
    let effect = ActiveWindow.Selection.SlideRange.Item(1).TimeLine.MainSequence.Item(1)
    effect.Behaviors.Item(1).Delete()
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationBehavior/member/Delete) | 删除指定的 **AnimationBehavior** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Additive](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationBehavior/member/Additive) | 设置或返回当前动画行为是否与其他正在运行的动画合并。可读/写。 |
| [MotionEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationBehavior/member/MotionEffect) | 返回一个代表移动动画的属性的 **[MotionEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/MotionEffect/obj)** 对象。 |
| [PropertyEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationBehavior/member/PropertyEffect) | 返回给定动画动作的 **[PropertyEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PropertyEffect/obj)** 对象。只读。 |
| [RotationEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationBehavior/member/RotationEffect) | 返回动画动作的 **[RotationEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/RotationEffect/obj)** 对象。只读。 |
| [ScaleEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationBehavior/member/ScaleEffect) | 返回给定动画动作的 **[ScaleEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ScaleEffect/obj)** 对象。只读。 |
| [SetEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationBehavior/member/SetEffect) | 返回动画行为的 **SetEffect** 对象。只读。 |
| [Timing](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationBehavior/member/Timing) | 返回 **[Timing](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Timing/obj)** 对象，该对象代表动画序列的计时属性。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationBehavior/member/Type) | 代表动画的类型。可读/写。 |