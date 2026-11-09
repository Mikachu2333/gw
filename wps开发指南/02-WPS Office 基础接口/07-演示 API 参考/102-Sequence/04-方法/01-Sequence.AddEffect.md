# Sequence.AddEffect

返回一个 **[Effect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Effect/obj)** 对象，该对象代表一个已添加到动画效果序列中的新动画效果。



## 语法

express.**AddEffect(Shape, effectId, Level, trigger, Index)**

express   一个代表 **Sequence** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Shape | 必选 | Shape | 向其添加动画效果的形状。 |
| effectId | 必选 | MsoAnimEffect | 要应用的动画效果。 |
| Level | 可选 | MsoAnimateByLevel | 将应用动画效果的级别（适用于图表、图示或文本）。默认值为 **msoAnimationLevelNone** 。 |
| trigger | 可选 | MsoAnimTriggerType | 触发动画效果的动作。默认值为 **msoAnimTriggerOnPageClick** 。 |
| Index | 可选 | number（int 精度） | 效果在动画效果集合中放置的位置。默认值为 -1（添加到末尾）。 |

## 返回值

Effect

## 示例


```JavaScript
/*本示例将一个弹跳的动画添加到第一张幻灯片的第一个形状范围内。本示例假定形状范围包含在第一张幻灯片中选定的一个或多个形状。*/
function test() {
    let slide = ActiveWindow.Selection.SlideRange.Item(1)
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    // Add a bouncing animation.
    slide.TimeLine.MainSequence.AddEffect(shape, msoAnimEffectBounce)
}
```


```JavaScript
/*本示例向当前演示文稿第一张幻灯片添加一个菱形并向菱形中添加一种动画效果和动画行为。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let shape = slide.Shapes.AddShape(msoShapeDiamond, 300, 200, 300, 300)
    let effect = slide.TimeLine.MainSequence.AddEffect(shape, msoAnimEffectStretchy, msoAnimTriggerAfterPrevious, msoAnimTriggerWithPrevious, 1)
    let scaleEffect = effect.Behaviors.Add(msoAnimTypeScale).ScaleEffect
    scaleEffect.FromX = 75
    scaleEffect.FromY = 75
    scaleEffect.ToX = 0
    scaleEffect.ToY = 0
    effect.Timing.AutoReverse = msoTrue
}
```
