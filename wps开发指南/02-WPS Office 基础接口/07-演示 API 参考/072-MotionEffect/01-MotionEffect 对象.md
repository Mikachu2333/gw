# MotionEffect 对象

代表 **AnimationBehavior** 对象的动作效果。

## 说明


使用 **AnimationBehavior** 对象的 [ **MotionEffect** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationBehavior/member/MotionEffect) 属性返回 **MotionEffect** 对象。


## 示例


```JavaScript
/*本示例设置活动窗口选定的第一张幻灯片主动画序列时间线的第一个动画效果的特定路径。*/
function test() {
    let effect = ActiveWindow.Selection.SlideRange.Item(1).TimeLine.MainSequence.Item(1)
    effect.Behaviors.Item(1).MotionEffect.Path = "M 0 0 L 0.125 0.216 L -0.125 0.216 L 0 0 Z"
}
```
使用 **MotionEffect** 对象的 [ **ByX** ](#TODO)、[ **ByY** ](#TODO)、[ **FromX** ](#TODO)、[ **FromY** ](#TODO)、[ **ToX** ](#TODO) 和 [ **ToY** ](#TODO) 属性可构造动作路径。 **ToY** 和 **ToX** 属性以百分比的形式表示，其中 **ToX** \= 1.0 表示幻灯片宽度的 100%； **ToY** \= 1.0 表示幻灯片高度的 100%。



```JavaScript
/*本示例显示活动演示文稿第一张幻灯片主动画序列时间线的第一个动画效果的特定路径。*/
function test() {
    let effect = ActivePresentation.Slides.Item(1).TimeLine.MainSequence.Item(1)
    alert(effect.Behaviors.Item(1).MotionEffect.Path)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Path](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/MotionEffect/member/Path) | 返回或设置一个 **String** 类型值，该值代表后跟 **[MotionEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/MotionEffect/obj)** 对象的路径。可读写。 |