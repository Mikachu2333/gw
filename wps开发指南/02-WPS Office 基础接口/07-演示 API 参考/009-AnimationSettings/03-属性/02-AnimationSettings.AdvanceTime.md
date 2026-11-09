# AnimationSettings.AdvanceTime

返回或设置以秒为单位的时间，在该时间过后指定的形状将开始播放动画。可读/写。



## 语法

express.**AdvanceTime**

express   一个代表 **AnimationSettings** 对象的变量。

## 类型

number（float 精度）

## 说明


在指定的时间过后，指定的幻灯片动画不会自动开始，除非将动画的 **[AdvanceMode](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowSettings/member/AdvanceMode)** 属性设置为 **ppAdvanceOnTime** 。



## 示例


```JavaScript
/*本示例将当前演示文稿第一张幻灯片上的第二个形状设为五秒后自动播放动画。*/
function test() {
    let animationSettings = ActivePresentation.Slides.Item(1).Shapes.Item(2).AnimationSettings
    animationSettings.AdvanceMode = ppAdvanceOnTime
    animationSettings.AdvanceTime = 5
    animationSettings.TextLevelEffect = ppAnimateByAllLevels
    animationSettings.Animate = msoTrue
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个形状开始播放动画的时间。*/
function test() {
    let animationSettings = ActiveWindow.Selection.ShapeRange.Item(1).AnimationSettings
    alert(animationSettings.AdvanceTime)
}
```
