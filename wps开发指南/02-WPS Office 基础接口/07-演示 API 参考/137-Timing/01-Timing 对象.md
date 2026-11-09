# Timing 对象

代表动画效果的计时属性。

## 说明


使用以下 **Timing** 对象的可读/写属性操作动画计时效果：

| **使用此属性**                                  | **若要更改此效果...**                      |
| -------------------------------------- | ------------------------------- |
| [ **Accelerate** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Timing/member/Accelerate)       | 加速过程持续时间的百分比                    |
| [ **AutoReverse** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Timing/member/AutoReverse)      | 某个效果是否应该先正向播放然后反向播放，从而让持续时间增加一倍 |
| [ **Decelerate** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Timing/member/Decelerate)       | 加速过程持续时间的百分比                    |
| [ **Duration** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Timing/member/Duration)         | 动画长度（以秒为单位）                     |
| [ **RepeatCount** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Timing/member/RepeatCount)      | 重复动画的次数                         |
| [ **RepeatDuration** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Timing/member/RepeatDuration)   | 重复动作持续的时间（以秒为单位）                |
| [ **Restart** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Timing/member/Restart)          | 重新启动动画节点的动作                     |
| [ **RewindAtEnd** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Timing/member/RewindAtEnd)      | 效果结束后对象是否返回其开始位置                |
| [ **SmoothStart** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Timing/member/SmoothStart)      | 效果启动时是否加速                       |
| [ **SmoothEnd** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Timing/member/SmoothEnd)        | 效果结束时是否减速                       |
| [ **TriggerDelayTime** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Timing/member/TriggerDelayTime) | 启用触发产生的延迟时间（以秒为单位）              |
| [ **TriggerShape** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Timing/member/TriggerShape)     | 与计时效果相关联的形状                     |
| [ **TriggerType** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Timing/member/TriggerType)      | 计时效果的触发方式                       |

若要返回 **Timing** 对象，请使用 **[AnimationBehavior](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationBehavior/obj)** 或 **[Effect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Effect/obj)** 对象的 **Timing** 属性。


## 示例


```JavaScript
/*本示例设置活动窗口选定的第一张幻灯片主动画序列时间线的第一个动画效果的持续时间信息。*/
function test() {
    let slide = ActiveWindow.Selection.SlideRange.Item(1)
    let timing = slide.TimeLine.MainSequence.Item(1).Timing
    timing.Duration = 5
}
```


```JavaScript
/*本示例显示活动演示文稿第一张幻灯片的主动画序列时间线的第一个动画启动时是否加速。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let timing = slide.TimeLine.MainSequence.Item(1).Timing
    alert(timing.SmoothStart == msoTrue)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Accelerate](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Timing/member/Accelerate) | 返回或设置计时加速发生的期间的百分比。可读/写。 |
| [AutoReverse](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Timing/member/AutoReverse) | 决定某个效果是否应在正向播放结束后进行反向播放，从而使播放时间增加一倍。可读/写。 |
| [Decelerate](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Timing/member/Decelerate) | 设置或返回将发生记时减速过程的期间百分比。可读/写。 |
| [Duration](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Timing/member/Duration) | 返回或设置以秒为单位的动画长度。可读/写。 |
| [RepeatCount](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Timing/member/RepeatCount) | 设置或返回要重复动画的次数。可读/写。 |
| [RepeatDuration](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Timing/member/RepeatDuration) | 设置或返回重复动画应持续的时间（以秒为单位）。可读/写。 |
| [Restart](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Timing/member/Restart) | 代表动画效果启动一次后是否会重新启动。可读/写。 |
| [RewindAtEnd](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Timing/member/RewindAtEnd) | 代表动画结束后对象是否返回其初始位置。可读/写。 |
| [SmoothEnd](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Timing/member/SmoothEnd) | 确定动画结束时是否应该减速。可读/写。 |
| [SmoothStart](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Timing/member/SmoothStart) | 确定动画启动时是否应该加速。可读/写。 |
| [Speed](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Timing/member/Speed) | 返回或设置指定动画的速度（以秒为单位）。可读/写。 |
| [TriggerDelayTime](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Timing/member/TriggerDelayTime) | 设置或返回启用动画触发器后的延时（以秒为单位）。可读/写。 |
| [TriggerShape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Timing/member/TriggerShape) | 设置或返回一个 **Shape** 对象，该对象代表与动画触发器相关联的形状。可读/写。 |
| [TriggerType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Timing/member/TriggerType) | 代表启动动画的触发器。可读/写。 |