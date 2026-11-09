# ScaleEffect.ByY

设置或返回 **Single** 类型值，该值代表按指定的屏幕宽度百分比垂直缩放对象。可读/写。



## 语法

express.**ByY**

express   一个代表 **ScaleEffect** 对象的变量。

## 类型

number（float 精度）

## 说明


负数表示垂直向下缩放对象。浮点数（例如 55.5）有效。

若要水平缩放对象，请使用 **ByX** 属性。

如果同时设置 **ByX** 和 **ByY** 属性，则可以同时在水平和垂直两个方向上缩放和移动对象。

请勿将此属性与 **[ColorEffect](#TODO)** 、 **[RotationEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/RotationEffect/obj)** 对象的 **By** 属性相混淆，它们分别用于设置动画行为的颜色、旋转属性。



## 示例


```JavaScript
/*本示例向活动演示文稿第一张幻灯片中添加一个矩形，并向该矩形添加一个动画效果；然后设置矩形在水平和垂直方向上的缩放。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    //Adds rectangle and sets effect and animation
    let shape = slide.Shapes.AddShape(msoShapeRectangle, 300, 300, 300, 150)
    let effect = slide.TimeLine.MainSequence.AddEffect(shape, msoAnimEffectCustom)
    let animationBehavior = effect.Behaviors.Add(msoAnimTypeScale)
    let scaleEffect = animationBehavior.ScaleEffect
    scaleEffect.ByX = 50
    scaleEffect.ByY = 50
}
```


```JavaScript
/*本示例显示活动窗口选定的第一张幻灯片的主动画序列时间线的第一个动画行为的垂直缩放的屏幕宽度百分比。*/
function test() {
    let effect = ActiveWindow.Selection.SlideRange.Item(1).TimeLine.MainSequence.Item(1)
    alert(effect.Behaviors.Item(1).ScaleEffect.ByY)
}
```
