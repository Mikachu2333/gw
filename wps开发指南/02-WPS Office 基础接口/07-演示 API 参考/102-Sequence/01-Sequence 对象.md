# Sequence 对象

代表幻灯片交互式动画序列的 **[Effect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Effect/obj)** 对象的集合。 **Sequence** 集合是 **[Sequences](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Sequences/obj)** 集合的成员。

## 说明


使用 **[TimeLine](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TimeLine/obj)** 对象的 [ **MainSequence** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TimeLine/member/MainSequence) 属性返回 **Sequence** 对象。


## 示例


```JavaScript
/*本示例将活动窗口选定的第一张幻灯片中第二个动画效果的创建级别设置为msoAnimateDiagramUp。*/
function test() {
    let sequence = ActiveWindow.Selection.SlideRange.Item(1).TimeLine.MainSequence
    sequence.ConvertToBuildLevel(sequence.Item(2), msoAnimateDiagramUp)
}
```
使用 [ **AddEffect** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Sequence/member/AddEffect) 方法添加新的 **Effect** 对象。



```JavaScript
/*本示例向当前演示文稿第一张幻灯片的第一个形状添加动画效果。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let effect = ActivePresentation.Slides.Item(1).TimeLine.MainSequence.AddEffect(shape, msoAnimEffectBlinds)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [AddEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Sequence/member/AddEffect) | 返回一个 **[Effect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Effect/obj)** 对象，该对象代表一个已添加到动画效果序列中的新动画效果。 |
| [Clone](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Sequence/member/Clone) | 创建 **[Effect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Effect/obj)** 对象的一个副本，并将其添加到指定索引位置处的 **[Sequences](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Sequences/obj)** 集合中。 |
| [ConvertToAnimateBackground](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Sequence/member/ConvertToAnimateBackground) | 确定背景是否独立于其附带的文本显示动画，或者与其附带文本一起显示动画。返回一个 **[Effect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Effect/obj)** 对象，该对象代表新修改过的动画效果。 |
| [ConvertToBuildLevel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Sequence/member/ConvertToBuildLevel) | 更改指定动画效果的创建级别信息。返回 **[Effect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Effect/obj)** 对象，该对象代表创建级别信息。 |
| [ConvertToTextUnitEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Sequence/member/ConvertToTextUnitEffect) | 返回一个 **[Effect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Effect/obj)** 对象，该对象表示应如何为文本添加动画效果。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Sequence/member/Item) | 从指定的 **Sequence** 集合中返回单个 **Effect** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Sequence/member/Count) | 返回指定集合中的对象数。只读。 |