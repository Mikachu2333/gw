# Timing.TriggerType

代表启动动画的触发器。可读/写。



## 语法

express.**TriggerType**

express   一个代表 **Timing** 对象的变量。

## 类型

MsoAnimTriggerType

## 说明


 **TriggerType** 属性的值可以是下列 **MsoAnimTriggerType** 常量之一。默认值为 **msoAnimTriggerOnPageClick** 。

| 常量 |

| ------------------------------- |
| **msoAnimTriggerAfterPrevious** |
| **msoAnimTriggerMixed**         |
| **msoAnimTriggerNone**          |
| **msoAnimTriggerOnPageClick**   |
| **msoAnimTriggerOnShapeClick**  |
| **msoAnimTriggerWithPrevious**  |



## 示例


```JavaScript
/*本示例向活动演示文稿第一张幻灯片添加一个形状，并对该形状添加动画，然后指示在单击该形状三秒钟后开始动画。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let shape = slide.Shapes.AddShape(msoShapeRectangle, 100, 100, 50, 50)
    let effect = slide.TimeLine.MainSequence.AddEffect(shape, msoAnimEffectPathDiamond)
    let timing = effect.Timing
    timing.Duration = 5
    timing.TriggerType = msoAnimTriggerWithPrevious
    timing.TriggerDelayTime = 3
}
```


```JavaScript
/*本示例显示活动窗口选定的第一张幻灯片的第一个交互动画序列中第一个动画的触发器是否为msoAnimTriggerOnShapeClick。*/
function test() {
    let slide = ActiveWindow.Selection.SlideRange.Item(1)
    let timing = slide.TimeLine.InteractiveSequences.Item(1).Item(1).Timing
    alert(timing.TriggerType == msoAnimTriggerOnShapeClick)
}
```
