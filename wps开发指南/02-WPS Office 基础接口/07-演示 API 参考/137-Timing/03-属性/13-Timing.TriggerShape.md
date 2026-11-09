# Timing.TriggerShape

设置或返回一个 **Shape** 对象，该对象代表与动画触发器相关联的形状。可读/写。



## 语法

express.**TriggerShape**

express   一个代表 **Timing** 对象的变量。

## 类型

Shape

## 示例


```JavaScript
/*本示例向活动演示文稿的第一张幻灯片添加两个形状，并对其中的椭圆形状添加动画，然后设置在单击矩形后开始动画。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let shape = slide.Shapes.AddShape(msoShapeOval, 400, 100, 100, 50)
    let shape2 = slide.Shapes.AddShape(msoShapeRectangle, 100, 100, 50, 50)
    let effect = slide.TimeLine.InteractiveSequences.Add().AddEffect(shape2, msoAnimEffectPathDiamond, null, msoAnimTriggerOnShapeClick)
    let timing = effect.Timing
    timing.Duration = 5
    timing.TriggerShape = shape
}
```


```JavaScript
/*本示例显示与活动窗口选定的第一张幻灯片的交互式序列的第一个动画相关联的形状的名称。*/
function test() {
    let slide = ActiveWindow.Selection.SlideRange.Item(1)
    let timing = slide.TimeLine.InteractiveSequences.Item(1).Item(1).Timing
    alert(timing.TriggerShape.Name)
}
```
