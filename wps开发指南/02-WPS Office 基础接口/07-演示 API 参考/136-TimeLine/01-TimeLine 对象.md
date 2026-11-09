# TimeLine 对象

存储 **Master** 、 **Slide** 或 **SlideRange** 对象的动画信息。

## 说明


使用 **[Master](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Master/obj)** 、 **[Slide](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slide/obj)** 或 **[SlideRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideRange/obj)** 对象的 **TimeLine** 属性返回 **TimeLine** 对象。

 **TimeLine** 对象的 **[MainSequence](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TimeLine/member/MainSequence)** 属性可获得访问主动画序列的权限，而 **[InteractiveSequences](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TimeLine/member/InteractiveSequences)** 属性可获得访问单张幻灯片或幻灯片范围的交互式动画序列集合的权限。

若要引用时间线对象，请使用与这些代码示例相似的语法：

```JavaScript
ActivePresentation.Slides(1).TimeLine.MainSequence

ActivePresentation.SlideMaster.TimeLine.InteractiveSequences

ActiveWindow.Selection.SlideRange.TimeLine.InteractiveSequences
```


## 示例


```JavaScript
/*本示例将一个百叶窗动画效果添加到活动演示文稿第一张幻灯片的第一个形状中。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let shape = slide.Shapes.Item(1)
    slide.TimeLine.MainSequence.AddEffect(shape, msoAnimEffectBlinds)
}
```


```JavaScript
/*本示例为活动窗口选定的第一张幻灯片的第一个形状设置交互式效果。*/
function test() {
    let slide = ActiveWindow.Selection.SlideRange.Item(1)
    let shape = slide.Shapes.Item(1)
    let sequence = slide.TimeLine.InteractiveSequences.Add(1)
    sequence.AddEffect(shape, msoAnimEffectStretchy, msoAnimTriggerAfterPrevious, msoAnimTriggerWithPrevious)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [InteractiveSequences](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TimeLine/member/InteractiveSequences) | 返回一个 **[Sequences](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Sequences/obj)** 对象，该对象代表通过单击指定形状触发的动画。 |
| [MainSequence](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TimeLine/member/MainSequence) | 返回一个 **[Sequence](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Sequence/obj)** 对象，该对象代表幻灯片的主动画序列中 **[Effect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Effect/obj)** 对象的集合。 |