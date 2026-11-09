# AnimationBehavior.ScaleEffect

返回给定动画动作的 **[ScaleEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ScaleEffect/obj)** 对象。只读。



## 语法

express.**ScaleEffect**

express   一个代表 **AnimationBehavior** 对象的变量。

## 类型

ScaleEffect

## 示例


```JavaScript
/*本示例对活动演示文稿第一张幻灯片中的第一个形状进行缩放，该形状由零开始增长至其初始大小的 100%。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let effect = ActivePresentation.Slides.Item(1).TimeLine.MainSequence.AddEffect(shape, msoAnimEffectCustom)
    let animationBehavior = effect.Behaviors.Add(msoAnimTypeScale)
    let scaleEffect = animationBehavior.ScaleEffect
    //Starting size
    scaleEffect.FromX = 0
    scaleEffect.FromY = 0
    //Size after scale effect
    scaleEffect.ToX = 100
    scaleEffect.ToY = 100
}
```


```JavaScript
/*本示例显示活动窗口选定的第一张幻灯片的主动画序列时间线的第一个动画行为的水平缩放的屏幕宽度百分比。*/
function test() {
    let effect = ActiveWindow.Selection.SlideRange.Item(1).TimeLine.MainSequence.Item(1)
    alert(effect.Behaviors.Item(1).ScaleEffect.ByX)
}
```
