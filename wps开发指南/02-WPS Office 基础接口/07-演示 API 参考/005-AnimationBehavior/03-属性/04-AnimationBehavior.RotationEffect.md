# AnimationBehavior.RotationEffect

返回动画动作的 **[RotationEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/RotationEffect/obj)** 对象。只读。



## 语法

express.**RotationEffect**

express   一个代表 **AnimationBehavior** 对象的变量。

## 类型

RotationEffect

## 示例


```JavaScript
/*本示例向活动演示文稿第一张幻灯片添加新的形状并设置旋转动画动作。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let shape = slide.Shapes.AddShape(msoShape5pointStar, 0, 0, 100, 100)
    let effect = slide.TimeLine.MainSequence.AddEffect(shape, msoAnimEffectCustom)
    let animationBehavior = effect.Behaviors.Add(msoAnimTypeRotation)
    let rotationEffect = animationBehavior.RotationEffect
    //Rotate 270 degrees from current position
    rotationEffect.By = 270
}
```


```JavaScript
/*本示例显示活动窗口选定的第一张幻灯片的主动画序列时间线的第一个动画行为的旋转结束角度。*/
function test() {
    let effect = ActiveWindow.Selection.SlideRange.Item(1).TimeLine.MainSequence.Item(1)
    alert(effect.Behaviors.Item(1).RotationEffect.To)
}
```
