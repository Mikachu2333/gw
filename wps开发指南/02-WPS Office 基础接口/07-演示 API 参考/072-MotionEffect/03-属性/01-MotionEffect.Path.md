# MotionEffect.Path

返回或设置一个 **String** 类型值，该值代表后跟 **[MotionEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/MotionEffect/obj)** 对象的路径。可读写。



## 语法

express.**Path**

express   一个代表 **MotionEffect** 对象的变量。

## 类型

string

## 说明


为 **MotionEffect** 对象返回的 **String** 类型值是一条具体路径，它使用与 VML 路径说明相同的语法描述移动效果在 From 和 To 之间沿行的路径。



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
