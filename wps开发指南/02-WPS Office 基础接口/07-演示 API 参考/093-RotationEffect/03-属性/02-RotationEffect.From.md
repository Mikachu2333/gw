# RotationEffect.From

设置或返回一个代表初始角度（以度为单位）的 **Single** 类型值，该角度是相对于屏幕指定的（例如，90 度表示完全水平）。可读/写。



## 语法

express.**From**

express   一个代表 **RotationEffect** 对象的变量。

## 类型

number（float 精度）

## 说明


将该属性与 **[To](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/RotationEffect/member/To)** 属性联合使用可从一个旋转角度转换到另一个旋转角度。

默认值为 **Empty** ，此情况下使用对象的当前位置。

请勿将该属性与 **[ScaleEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ScaleEffect/obj)** 和 **[MotionEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/MotionEffect/obj)** 对象的 **FromX** 或 **FromY** 属性相混淆，后者仅用于缩放或运动效果。



## 示例


```JavaScript
/*本示例向活动演示文稿第一张幻灯片添加一个矩形，并向该矩形中添加一个旋转效果并且更改该效果的旋转角度。*/
function test() {
    //Adds rectangle and sets effect and animation
    let shape = ActivePresentation.Slides.Item(1).Shapes.AddShape(msoShapeRectangle, 100, 100, 50, 50)
    let timeLine = ActivePresentation.Slides.Item(1).TimeLine
    let effect = timeLine.MainSequence.AddEffect(shape, msoAnimEffectBlinds)
    let animationBehavior = timeLine.MainSequence.Item(1).Behaviors.Add(msoAnimTypeRotation)
    let rotationEffect = animationBehavior.RotationEffect
    //Sets the rotation effect starting and ending positions
    rotationEffect.From = 90
    rotationEffect.To = 270
}
```


```JavaScript
/*本示例显示活动窗口选定的第一张幻灯片的主动画序列时间线的第一个动画行为相对于屏幕的起始角度。*/
function test() {
    let effect = ActiveWindow.Selection.SlideRange.Item(1).TimeLine.MainSequence.Item(1)
    alert(effect.Behaviors.Item(1).RotationEffect.From)
}
```
