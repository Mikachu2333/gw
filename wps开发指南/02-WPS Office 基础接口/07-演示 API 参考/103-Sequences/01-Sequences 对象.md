# Sequences 对象

代表 **[Sequence](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Sequence/obj)** 对象的集合。使用 **Sequence** 对象可添加、查找、修改和克隆动画效果。

## 说明


使用 **[TimeLine](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TimeLine/obj)** 对象的 [ **InteractiveSequences** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TimeLine/member/InteractiveSequences) 属性可返回 **Sequences** 集合。使用 [ **Add** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Sequences/member/Add) 方法可添加交互式动画序列。


## 示例


```JavaScript
/*本示例向活动演示文稿第一张幻灯片中添加两个形状并设置星形形状的交互式效果，这样在单击棱台形状时，该星形形状会具有动画效果。*/
function test() {
    let shape1 = ActivePresentation.Slides.Item(1).Shapes.AddShape(msoShape32pointStar, 100, 100, 200, 200)
    let shape2 = ActivePresentation.Slides.Item(1).Shapes.AddShape(msoShapeBevel, 400, 200, 150, 100)
    let sequence = ActivePresentation.Slides.Item(1).TimeLine.InteractiveSequences.Add(1)
    let effect = sequence.AddEffect(shape2, msoAnimEffectBlinds, null, msoAnimTriggerOnShapeClick)
    effect.Shape = shape1
}
```


```JavaScript
/*本示例向活动窗口选定的第一张幻灯片的第一个交互动画序列中添加第一个形状的菱形动画效果。*/
function test() {
    let slide = ActiveWindow.Selection.SlideRange.Item(1)
    let shape = slide.Shapes.Item(1)
    let sequence = slide.TimeLine.InteractiveSequences.Item(1)
    sequence.AddEffect(shape, msoAnimEffectDiamond, msoAnimateTextByFirstLevel, msoAnimTriggerOnShapeClick, 1)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Sequences/member/Add) | 返回一个 **[Sequence](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Sequence/obj)** 对象，该对象代表一个新的序列。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Sequences/member/Item) | 从指定的 **Sequences** 集合中返回单个 **Sequence** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Sequences/member/Count) | 返回指定集合中的对象数。只读。 |