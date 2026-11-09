# AnimationPoints 对象

代表 **[PropertyEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PropertyEffect/obj)** 对象动画点的集合。

## 说明


使用 **[PropertyEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PropertyEffect/obj)** 对象的 [ **Points** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PropertyEffect/member/Points) 属性返回 **AnimationPoints** 集合对象。


## 示例


```JavaScript
/*本示例为活动演示文稿第一张幻灯片的主动画序列时间线的第二个动画行为添加一个动画点。*/
function test() {
    let effect = ActivePresentation.Slides.Item(1).TimeLine.MainSequence.Item(1)
    let points = effect.Behaviors.Item(2).PropertyEffect.Points
    points.Add()
}
```
从一个动画点切换到另一动画点有时可能会不连续或不平稳。使用 [ **Smooth** ](#TODO) 属性可使切换更为平稳。



```JavaScript
/*本示例为活动窗口所选的第一张幻灯片的主动画序列时间线的第二个动画行为添加一个动画点，并设置该动画点的时间和属性值。*/
function test() {
    let effect = ActiveWindow.Selection.SlideRange.Item(1).TimeLine.MainSequence.Item(1)
    let propertyEffect = effect.Behaviors.Item(2).PropertyEffect
    propertyEffect.Property = msoAnimShapeFillColor
    let point = propertyEffect.Points.Add()
    point.Time = 0.2
    point.Value = RGB(255, 0, 0)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationPoints/member/Add) | 返回一个 **[AnimationPoint](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationPoint/obj)** 对象，该对象代表一个新的动画点。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationPoints/member/Item) | 从指定的 **AnimationPoints** 集合中返回单个 **AnimationPoint** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationPoints/member/Count) | 返回指定集合中的对象数。只读。 |