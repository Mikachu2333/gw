# Effect.Behaviors

以 **[AnimationBehaviors](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationBehaviors/obj)** 集合的形式返回指定的幻灯片动画行为。



## 语法

express.**Behaviors**

express   一个代表 **Effect** 对象的变量。

## 类型

AnimationBehaviors

## 说明


若要返回 **[AnimationBehaviors](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationBehaviors/obj)** 集合中的单个 **[AnimationBehavior](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationBehavior/obj)** 对象，请使用 **[Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationBehaviors/member/Item)** 方法或 **Behaviors** (_index_)，其中，_index_ 是 **AnimationBehaviors** 集合中 **AnimationBehavior** 对象的索引号。



## 示例


```JavaScript
/*本示例返回活动演示文稿中特定的动画行为类型。*/
function test() {
    let timeLine = ActiveWindow.Selection.SlideRange.Item(1).TimeLine
    alert(timeLine.MainSequence.Item(1).Behaviors.Item(1).Type)
}
```


```JavaScript
/*本示例向第一篇演示文稿第一张幻灯片的第一个形状添加一种动画效果和动画行为。*/
function test() {
    let slide = Presentations.Item(1).Slides.Item(1)
    let effect = slide.TimeLine.MainSequence.AddEffect(slide.Shapes.Item(1), msoAnimEffectStretchy, msoAnimTriggerAfterPrevious)
    let scaleEffect = effect.Behaviors.Add(msoAnimTypeScale).ScaleEffect
    scaleEffect.FromX = 75
    scaleEffect.FromY = 75
    scaleEffect.ToX = 0
    scaleEffect.ToY = 0
    effect.Timing.AutoReverse = msoTrue
}
```
