# PropertyEffect.From

设置或返回一个 **Variant** 类型的值，该值代表对象的属性的起始值。读/写。



## 语法

express.**From**

express   一个代表 **PropertyEffect** 对象的变量。

## 类型

any

## 说明


 **From** 属性类似于 **[Points](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PropertyEffect/member/Points)** 属性，但使用 **From** 属性更容易执行简单任务。

此属性的默认值为 **空** ，在此情况下使用对象的当前位置。

不要将此属性与 **[ScaleEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ScaleEffect/obj)** 和 **[MotionEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/MotionEffect/obj)** 对象的 **FromX** 或 **FromY** 属性混淆，这些属性仅用于缩放或运动效果。



## 示例


```JavaScript
/*本示例向活动演示文稿第一张幻灯片中添加一个菱形，并向该菱形添加一个动画效果；然后设置菱形动画效果属性的起始值。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let shape = slide.Shapes.AddShape(msoShapeDiamond, 100, 100, 50, 50)
    let effect = slide.TimeLine.MainSequence.AddEffect(shape, msoAnimEffectCustom)
    let animationBehavior = effect.Behaviors.Add(msoAnimTypeScale)
    let propertyEffect = animationBehavior.PropertyEffect
    propertyEffect.From = "visible"
}
```


```JavaScript
/*本示例显示活动窗口选定的第一张幻灯片的主动画序列时间线的第一个动画行为属性的起始值是否为“hidden”。*/
function test() {
    let effect = ActiveWindow.Selection.SlideRange.Item(1).TimeLine.MainSequence.Item(1)
    alert(effect.Behaviors.Item(1).PropertyEffect.From == "hidden")
}
```
