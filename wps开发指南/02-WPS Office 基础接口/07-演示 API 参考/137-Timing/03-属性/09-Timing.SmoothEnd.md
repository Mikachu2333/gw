# Timing.SmoothEnd

确定动画结束时是否应该减速。可读/写。



## 语法

express.**SmoothEnd**

express   一个代表 **Timing** 对象的变量。

## 类型

MsoTriState

## 说明


 **SmoothEnd** 属性的值可以是下列 **MsoTriState** 常量之一：

| 常量           | 说明            |
| ------------ | ------------- |
| **msoFalse** | 默认值。动画结束时不减速。 |
| **msoTrue**  | 动画结束时减速。      |



## 示例


```JavaScript
/*本示例向活动演示文稿第一张幻灯片添加一个形状并使该形状具有动画效果，然后指示该形状在动画结束时减速。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    //Adds shape and sets animation effect
    let shape = slide.Shapes.AddShape(msoShapeRectangle, 100, 100, 50, 50)
    let effect = slide.TimeLine.MainSequence.AddEffect(shape, msoAnimEffectPathDiamond)
    //Sets duration of effect and slows animation at end
    let timing = effect.Timing
    timing.Duration = 5
    timing.SmoothEnd = msoTrue
}
```


```JavaScript
/*本示例显示活动窗口选定的第一张幻灯片的主动画序列时间线的第一个动画结束时是否减速。*/
function test() {
    let slide = ActiveWindow.Selection.SlideRange.Item(1)
    let timing = slide.TimeLine.MainSequence.Item(1).Timing
    alert(timing.SmoothEnd == msoTrue)
}
```
