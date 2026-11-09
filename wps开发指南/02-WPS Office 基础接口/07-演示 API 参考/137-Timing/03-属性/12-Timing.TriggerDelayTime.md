# Timing.TriggerDelayTime

设置或返回启用动画触发器后的延时（以秒为单位）。可读/写。



## 语法

express.**TriggerDelayTime**

express   一个代表 **Timing** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例向活动演示文稿第一张幻灯片添加一个形状，并对该形状添加动画，然后指示在单击该形状三秒钟后开始动画。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let shape = slide.Shapes.AddShape(msoShapeRectangle, 100, 100, 50, 50)
    let effect = slide.TimeLine.MainSequence.AddEffect(shape, msoAnimEffectPathDiamond)
    let timing = effect.Timing
    timing.Duration = 5
    timing.TriggerShape = shape
    timing.TriggerType = msoAnimTriggerOnShapeClick
    timing.TriggerDelayTime = 3
}
```


```JavaScript
/*本示例显示活动窗口选定的第一张幻灯片的交互式序列的第一个动画启用动画触发器后的延时。*/
function test() {
    let slide = ActiveWindow.Selection.SlideRange.Item(1)
    let timing = slide.TimeLine.InteractiveSequences.Item(1).Item(1).Timing
    alert(timing.TriggerDelayTime)
}
```
