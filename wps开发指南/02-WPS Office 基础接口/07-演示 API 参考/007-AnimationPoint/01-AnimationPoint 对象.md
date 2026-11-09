# AnimationPoint 对象

代表动画动作的单个动画点。 **AnimationPoint** 对象是 **[AnimationPoints](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationPoints/obj)** 集合的成员。 **AnimationPoints** 集合包含一个动画动作的所有动画点。

## 说明


若要添加或引用 **AnimationPoint** 对象，请分别使用 [ **Add** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationPoints/member/Add) 或 [ **Item** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationPoints/member/Item) 方法。使用 **AnimationPoint** 对象的 [ **Time** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationPoint/member/Time) 属性设置动画点之间的计时。使用 **[Value](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationPoint/member/Value)** 属性设置其他动画点属性，如颜色。


## 示例


```JavaScript
/*本示例向活动演示文稿添加一张幻灯片，并向该幻灯片中添加一个形状，然后向幻灯片的主序列动画时间线的新建动画行为中添加三个填充颜色的动画点。*/
function test() {
    let slide = ActivePresentation.Slides.Add(1, ppLayoutBlank)
    let shape = slide.Shapes.AddShape(msoShapeHeart, 100, 100, 200, 200)
    let effect = slide.TimeLine.MainSequence.AddEffect(shape, msoAnimEffectCustom)
    let animationBehavior = effect.Behaviors.Add(msoAnimTypeProperty)
    let propertyEffect = animationBehavior.PropertyEffect
    propertyEffect.Property = msoAnimShapeFillColor
    let animationPoint1 = propertyEffect.Points.Add()
    animationPoint1.Time = 0.2
    animationPoint1.Value = RGB(0, 0, 0)
    let animationPoint2 = propertyEffect.Points.Add()
    animationPoint2.Time = 0.5
    animationPoint2.Value = RGB(0, 255, 0)
    let animationPoint3 = propertyEffect.Points.Add()
    animationPoint3.Time = 1
    animationPoint3.Value = RGB(0, 255, 255)
}
```


```JavaScript
/*本示例删除活动窗口选定的第一张幻灯片主动画序列时间线的第二个动画动作的属性的第一个动画点。*/
function test() {
    let propertyEffect = ActiveWindow.Selection.SlideRange.Item(1).TimeLine.MainSequence.Item(1).Behaviors.Item(2).PropertyEffect
    propertyEffect.Points.Item(1).Delete()
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationPoint/member/Delete) | 删除指定的 **AnimationPoint** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Formula](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationPoint/member/Formula) | 返回或设置 **String** 类型的值，该值代表用于计算动画的公式。可读/写。 |
| [Time](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationPoint/member/Time) | 设置或返回给定动画点的时间。可读/写。 |
| [Value](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationPoint/member/Value) | 设置或返回动画点的属性值。可读/写。 |