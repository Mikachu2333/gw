# SetEffect.To

设置或返回一个 **Variant** 类型值，该值代表 **SetEffect** 对象的 **Type** 属性的值或结束值。可读/写。



## 语法

express.**To**

express   一个代表 **SetEffect** 对象的变量。

## 类型

any

## 说明


请勿将该属性与 **[ScaleEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ScaleEffect/obj)** 和 **[MotionEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/MotionEffect/obj)** 对象的 **ToX** 或 **ToY** 属性相混淆，后者仅用于缩放或运动效果。



## 示例


```JavaScript
/*本示例显示活动窗口所选的第一张幻灯片的主动画序列时间线的第一个动画行为的动画属性的结束值是否为“visible”。*/
function test() {
    let effect = ActiveWindow.Selection.SlideRange.Item(1).TimeLine.MainSequence.Item(1)
    alert(effect.Behaviors.Item(1).SetEffect.To == "visible")
}
```


```JavaScript
/*本示例设置活动演示文稿的第一张幻灯片的主动画序列时间线的第一个动画行为的动画属性的结束值。*/
function test() {
    let effect = ActivePresentation.Slides.Item(1).TimeLine.MainSequence.Item(1)
    effect.Behaviors.Item(1).SetEffect.To = "hidden"
}
```
