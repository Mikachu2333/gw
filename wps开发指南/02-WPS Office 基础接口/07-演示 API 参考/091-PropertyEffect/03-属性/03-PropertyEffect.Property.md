# PropertyEffect.Property

设置或返回一个 **[MsoAnimProperty](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/enum/MsoAnimProperty)** 常量，代表一个动画属性。读/写。



## 语法

express.**Property**

express   一个代表 **PropertyEffect** 对象的变量。

## 类型

MsoAnimProperty

## 示例


```JavaScript
/*本示例向活动演示文稿第一张幻灯片中添加一个形状，并对该形状添加一个三秒钟的填充动画，然后将填充动画设置为彩色。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let shape = slide.Shapes.AddShape(msoShapeRectangle, 100, 100, 50, 50)
    let effect = slide.TimeLine.MainSequence.AddEffect(shape, msoAnimEffectBlinds)
    effect.Timing.Duration = 3
    let animationBehavior = effect.Behaviors.Add(msoAnimTypeProperty)
    let propertyEffect = animationBehavior.PropertyEffect
    propertyEffect.Property = msoAnimColor
    propertyEffect.From = RGB(0, 0, 255)
    propertyEffect.To = RGB(255, 0, 0)
}
```


```JavaScript
/*本示例显示活动窗口选定的第一张幻灯片主动画序列时间线的第一个动画效果的动画属性是否为msoAnimVisibility。*/
function test() {
    let effect = ActiveWindow.Selection.SlideRange.Item(1).TimeLine.MainSequence.Item(1)
    alert(effect.Behaviors.Item(1).PropertyEffect.Property == msoAnimVisibility)
}
```
