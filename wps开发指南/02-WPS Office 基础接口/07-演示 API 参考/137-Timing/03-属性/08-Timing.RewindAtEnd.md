# Timing.RewindAtEnd

代表动画结束后对象是否返回其初始位置。可读/写。



## 语法

express.**RewindAtEnd**

express   一个代表 **Timing** 对象的变量。

## 类型

MsoTriState

## 说明


 **RewindAtEnd** 属性的值可以是下列 **MsoTriState** 常量之一：

| 常量           | 说明               |
| ------------ | ---------------- |
| **msoFalse** | 动画结束后对象不返回其初始位置。 |
| **msoTrue**  | 动画结束后对象返回其初始位置。  |



## 示例


```JavaScript
/*本示例向活动演示文稿第一张幻灯片添加一个形状并向该形状添加一个动画，然后指示该形状在动画结束后返回其初始位置。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    //Adds shape and sets animation effect
    let shape = slide.Shapes.AddShape(msoShapeRectangle, 100, 100, 50, 50)
    let effect = slide.TimeLine.MainSequence.AddEffect(shape, msoAnimEffectPathDiamond)
    //Sets duration of animation and returns shape to its original position
    let timing = effect.Timing
    timing.Duration = 3
    timing.RewindAtEnd = msoTrue
}
```


```JavaScript
/*本示例显示活动窗口选定的第一张幻灯片的主动画序列时间线的第一个动画结束后是否返回其初始位置。*/
function test() {
    let slide = ActiveWindow.Selection.SlideRange.Item(1)
    let timing = slide.TimeLine.MainSequence.Item(1).Timing
    alert(timing.RewindAtEnd == msoTrue)
}
```
