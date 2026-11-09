# RotationEffect.By

设置或返回一个 **Single** 类型值，该值代表对象旋转的指定度数；例如，值 180 表示对象旋转 180 度。可读/写。



## 语法

express.**By**

express   一个代表 **RotationEffect** 对象的变量。

## 类型

number（float 精度）

## 说明


指定的对象将围绕其中心旋转，其中心在屏幕上的位置保持不变。

如果同时设置了旋转效果的 **By** 和 **[To](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/RotationEffect/member/To)** 属性，则 **By** 属性的值将被忽略。

浮点数（例如 55.5）有效，但是负数无效。

请勿将该属性与 **[ScaleEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ScaleEffect/obj)** 和 **[MotionEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/MotionEffect/obj)** 对象的 **ByX** 或 **ByY** 属性相混淆，后者仅用于缩放或运动效果。



## 示例


```JavaScript
/*本示例向活动演示文稿第一张幻灯片的第一个形状中添加一个旋转效果并且更改该效果的旋转角度。*/
function test() {
    //Sets shape, timing, and effect
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let timeLine = ActivePresentation.Slides.Item(1).TimeLine
    let effect = timeLine.MainSequence.AddEffect(shape, msoAnimEffectBlinds)
    //Adds animation behavior and sets rotation effect
    let animationBehavior = timeLine.MainSequence.Item(1).Behaviors.Add(msoAnimTypeRotation)
    let rotationEffect = animationBehavior.RotationEffect
    rotationEffect.By = 270
}
```


```JavaScript
/*本示例显示活动窗口选定的第一张幻灯片的主动画序列时间线的第一个动画行为的旋转角度。*/
function test() {
    let effect = ActiveWindow.Selection.SlideRange.Item(1).TimeLine.MainSequence.Item(1)
    alert(effect.Behaviors.Item(1).RotationEffect.By)
}
```
