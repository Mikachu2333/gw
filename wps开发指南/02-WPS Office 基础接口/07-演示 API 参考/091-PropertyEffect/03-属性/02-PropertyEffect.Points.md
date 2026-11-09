# PropertyEffect.Points

返回一个 **AnimationPoints** 对象，该对象表示动画点。



## 语法

express.**Points**

express   一个代表 **PropertyEffect** 对象的变量。

## 类型

AnimationPoints

## 说明


可以使用 **[From](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PropertyEffect/member/From)** 和 **[To](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PropertyEffect/member/To)** 属性设置该属性的值。



## 示例


```JavaScript
/*本示例删除活动演示文稿第一张幻灯片主动画序列时间线的第二个动画动作的属性的第一个动画点。*/
function test() {
    let propertyEffect = ActivePresentation.Slides.Item(1).TimeLine.MainSequence.Item(1).Behaviors.Item(2).PropertyEffect
    propertyEffect.Points.Item(1).Delete()
}
```


```JavaScript
/*本示例向活动演示文稿第一张幻灯片添加一个矩形，然后向该矩形添加一个动画动作，并添加一个动画点。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let shape = slide.Shapes.AddShape(msoShapeRectangle, 100, 100, 50, 50)
    let effect = slide.TimeLine.MainSequence.AddEffect(shape, msoAnimEffectMediaPlay)
    let animationBehavior = effect.Behaviors.Add(msoAnimTypeProperty)
    let propertyEffect = animationBehavior.PropertyEffect
    propertyEffect.Points.Add()
}
```
