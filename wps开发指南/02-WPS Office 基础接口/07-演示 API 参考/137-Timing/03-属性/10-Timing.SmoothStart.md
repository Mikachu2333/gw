# Timing.SmoothStart

确定动画启动时是否应该加速。可读/写。



## 语法

express.**SmoothStart**

express   一个代表 **Timing** 对象的变量。

## 类型

MsoTriState

## 说明


 **SmoothStart** 属性的值可以是下列 **MsoTriState** 常量之一：

| 常量           | 说明            |
| ------------ | ------------- |
| **msoFalse** | 默认值。动画启动时不加速。 |
| **msoTrue**  | 动画启动时加速。      |



## 示例


```JavaScript
/*本示例向活动演示文稿第一张幻灯片添加一个形状并使该形状具有动画效果，然后指示该形状在动画启动时加速。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let shape = slide.Shapes.AddShape(msoShapeRectangle, 100, 100, 50, 50)
    let effect = slide.TimeLine.MainSequence.AddEffect(shape, msoAnimEffectPathDiamond)
    let timing = effect.Timing
    timing.Duration = 5
    timing.SmoothStart = msoTrue
}
```


```JavaScript
/*本示例显示活动窗口选定的第一张幻灯片的主动画序列时间线的第一个动画启动时是否加速。*/
function test() {
    let slide = ActiveWindow.Selection.SlideRange.Item(1)
    let timing = slide.TimeLine.MainSequence.Item(1).Timing
    alert(timing.SmoothStart == msoTrue)
}
```
