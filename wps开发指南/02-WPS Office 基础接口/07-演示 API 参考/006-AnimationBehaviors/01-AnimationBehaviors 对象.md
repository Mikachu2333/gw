# AnimationBehaviors 对象

代表 **[AnimationBehavior](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationBehavior/obj)** 对象的集合。

## 说明


使用 [ **Add** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationBehaviors/member/Add) 方法添加一个动画行为。


## 示例


```JavaScript
/*本示例向活动演示文稿的第一张幻灯片的主动画序列时间线的第一个动画效果添加一个动画行为。*/
function test() {
    //Reference the main animation timeline
    let timeLine = ActivePresentation.Slides.Item(1).TimeLine
    //Add an animation rotation behavior
    //as the first animation in the main animation sequence
    timeLine.MainSequence.Item(1).Behaviors.Add(msoAnimTypeRotation, 1)
}
```


```JavaScript
/*本示例显示活动窗口选定的第一张幻灯片的主动画序列时间线的第一个动画行为的旋转结束角度。*/
function test() {
    let effect = ActiveWindow.Selection.SlideRange.Item(1).TimeLine.MainSequence.Item(1)
    alert(effect.Behaviors.Item(1).RotationEffect.To)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationBehaviors/member/Add) | 返回一个代表新动画行为的 **[AnimationBehavior](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationBehavior/obj)** 对象。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationBehaviors/member/Item) | 从指定的 **AnimationBehaviors** 集合中返回单个 **AnimationBehavior** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationBehaviors/member/Count) | 返回指定集合中的对象数。只读。 |