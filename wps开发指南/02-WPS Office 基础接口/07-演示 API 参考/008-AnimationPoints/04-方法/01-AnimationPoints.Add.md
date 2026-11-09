# AnimationPoints.Add

返回一个 **[AnimationPoint](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationPoint/obj)** 对象，该对象代表一个新的动画点。



## 语法

express.**Add(Index)**

express   一个代表 **AnimationPoints** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 可选 | number（int 精度） | 某动画点相对于其他动画点的位置。其默认值为 -1，表示如果省略 _Index_ 参数，则新的动画点将添加到现有动画点的末尾。 |

## 返回值

AnimationPoint

## 示例


```JavaScript
/*本示例在活动窗口所选的第一张幻灯片的主动画序列时间线中为该幻灯片的第一个形状添加一个动画行为，然后为该动画行为添加一个动画点。*/
function test() {
    let slide = ActiveWindow.Selection.SlideRange.Item(1)
    let shape = slide.Shapes.Item(1)
    let effect = slide.TimeLine.MainSequence.AddEffect(shape, msoAnimEffectFly)
    let animationBehavior = effect.Behaviors.Add(msoAnimTypeProperty)
    let propertyEffect = animationBehavior.PropertyEffect
    propertyEffect.Points.Add()
}
```


```JavaScript
/*本示例为活动演示文稿第一张幻灯片的主动画序列时间线的第二个动画行为添加一个动画点。*/
function test() {
    let effect = ActivePresentation.Slides.Item(1).TimeLine.MainSequence.Item(1)
    let points = effect.Behaviors.Item(2).PropertyEffect.Points
    points.Add(1)
}
```
