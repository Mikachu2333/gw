# AnimationBehavior.Timing

返回 **[Timing](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Timing/obj)** 对象，该对象代表动画序列的计时属性。



## 语法

express.**Timing**

express   一个代表 **AnimationBehavior** 对象的变量。

## 类型

Timing

## 示例


```JavaScript
/*本示例设置活动演示文稿第一张幻灯片的主动画序列时间线的第一个动画行为的持续时间。*/
function test() {
    ActivePresentation.Slides.Item(1).TimeLine.MainSequence.Item(1).Behaviors.Item(1).Timing.Duration = 1
}
```


```JavaScript
/*本示例显示活动窗口选定的第一张幻灯片的主动画序列时间线的第一个动画效果正向播放后是否会再反向播放。*/
function test() {
    let effect = ActiveWindow.Selection.SlideRange.Item(1).TimeLine.MainSequence.Item(1)
    alert(effect.Behaviors.Item(1).Timing.AutoReverse == msoTrue)
}
```
