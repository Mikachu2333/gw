# ScaleEffect.FromX

设置或返回 **Single** 类型值，该值代表 **[ScaleEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ScaleEffect/obj)** 对象的起始宽度，它以屏幕宽度百分比的形式指定。可读/写。



## 语法

express.**FromX**

express   一个代表 **ScaleEffect** 对象的变量。

## 类型

number（float 精度）

## 说明


此属性的默认值为 **空** ，在此情况下使用对象的当前位置。

将此属性与 **ToX** 属性联合使用可以调整大小或从一个位置跳到另一个位置。

请勿将此属性与 **[ColorEffect](#TODO)** 、 **[RotationEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/RotationEffect/obj)** 或 **[PropertyEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PropertyEffect/obj)** 对象的 **From** 属性相混淆，后者分别用于设置或更改动画动作的颜色、旋转或其他属性。



## 示例


```JavaScript
/*本示例向活动演示文稿第一张幻灯片中添加一个矩形，并向该矩形添加一个动画效果；然后设置矩形起始和结束的水平和垂直位置。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    //Adds shape and sets effect and animation properties
    let shape = slide.Shapes.AddShape(msoShapeRectangle, 100, 100, 50, 50)
    let effect = slide.TimeLine.MainSequence.AddEffect(shape, msoAnimEffectCustom)
    let animationBehavior = effect.Behaviors.Add(msoAnimTypeScale)
    //Sets starting and ending horizontal and vertical positions
    let scaleEffect = animationBehavior.ScaleEffect
    scaleEffect.FromX = 0
    scaleEffect.FromY = 0
    scaleEffect.ToX = 50
    scaleEffect.ToY = 50
}
```


```JavaScript
/*本示例显示活动窗口选定的第一张幻灯片的主动画序列时间线的第一个动画行为的初始宽度的屏幕宽度百分比。*/
function test() {
    let effect = ActiveWindow.Selection.SlideRange.Item(1).TimeLine.MainSequence.Item(1)
    alert(effect.Behaviors.Item(1).ScaleEffect.FromX)
}
```
