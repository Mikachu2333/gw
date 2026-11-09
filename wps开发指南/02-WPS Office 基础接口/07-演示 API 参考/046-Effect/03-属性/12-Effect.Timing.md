# Effect.Timing

返回 **[Timing](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Timing/obj)** 对象，该对象代表动画序列的计时属性。



## 语法

express.**Timing**

express   一个代表 **Effect** 对象的变量。

## 类型

Timing

## 示例


```JavaScript
/*本示例设置第一张幻灯片中第一个动画序列的持续时间。*/
function test() {
    ActivePresentation.Slides.Item(1).TimeLine.MainSequence.Item(1).Timing.Duration = 1
}
```


```JavaScript
/*本示例显示活动窗口中选定的第一张幻灯片的第一个动画效果的速度。*/
function test() {
    let effect = ActiveWindow.Selection.SlideRange.Item(1).TimeLine.MainSequence.Item(1)
    alert(effect.Timing.Speed)
}
```
