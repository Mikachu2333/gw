# AnimationBehavior.MotionEffect

返回一个代表移动动画的属性的 **[MotionEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/MotionEffect/obj)** 对象。



## 语法

express.**MotionEffect**

express   一个代表 **AnimationBehavior** 对象的变量。

## 类型

MotionEffect

## 示例


```JavaScript
/*本示例设置活动演示文稿第一张幻灯片主动画序列时间线的第一个动画效果的特定路径。*/
function test() {
    let effect = ActivePresentation.Slides.Item(1).TimeLine.MainSequence.Item(1)
    effect.Behaviors.Item(1).MotionEffect.Path = "M 0.1355 0.1166 L 0.0687 0.894 L 0.2082 0.0358   Z"
}
```


```JavaScript
/*本示例显示活动窗口选定的第一张幻灯片主动画序列时间线的第一个动画效果的特定路径。*/
function test() {
    let effect = ActiveWindow.Selection.SlideRange.Item(1).TimeLine.MainSequence.Item(1)
    alert(effect.Behaviors.Item(1).MotionEffect.Path)
}
```
