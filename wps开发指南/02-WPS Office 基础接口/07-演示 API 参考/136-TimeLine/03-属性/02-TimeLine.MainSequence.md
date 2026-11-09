# TimeLine.MainSequence

返回一个 **[Sequence](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Sequence/obj)** 对象，该对象代表幻灯片的主动画序列中 **[Effect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Effect/obj)** 对象的集合。



## 语法

express.**MainSequence**

express   一个代表 **TimeLine** 对象的变量。

## 类型

Sequence

## 说明


 **MainSequence** 属性的默认值是一个空 **Sequence** 集合。在未向主动画序列添加一个或多个 **Effect** 对象的情况下，从此属性返回值的任何尝试都将导致运行时错误。



## 示例


```JavaScript
/*本示例向活动演示文稿添加一张新的幻灯片，并向该幻灯片新形状中添加一个飞旋动画。*/
function test() {
    let slide = ActivePresentation.Slides.Add(1, ppLayoutBlank)
    let shape = slide.Shapes.AddShape(msoShape5pointStar, 25, 25, 100, 100)
    let effect = slide.TimeLine.MainSequence.AddEffect(shape, msoAnimEffectBoomerang)
    effect.Timing.Speed = 0.5
    effect.Timing.Accelerate = 0.2
}
```


```JavaScript
/*本示例显示活动窗口选定的第一张幻灯片的主动画序列时间线的第二个动画效果的类型是否为msoAnimEffectCustom。*/
function test() {
    let timeLine = ActiveWindow.Selection.SlideRange.Item(1).TimeLine
    alert(timeLine.MainSequence.Item(2).EffectType == msoAnimEffectCustom)
}
```
