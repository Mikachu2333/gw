# Slide.TimeLine

返回 **TimeLine** 对象，该对象代表幻灯片的动画时间线。只读。



## 语法

express.**TimeLine**

express   一个代表 **Slide** 对象的变量。

## 类型

TimeLine

## 示例


```JavaScript
/*本示例将一个跳动的动画添加到第一张幻灯片的第一个形状中。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let shape = slide.Shapes.Item(1)
    slide.TimeLine.MainSequence.AddEffect(shape, msoAnimEffectBounce)
}
```


```JavaScript
/*本示例显示活动演示文稿第一张幻灯片的主动画序列中动画效果的数量。*/
function test() {
    alert(ActivePresentation.Slides.Item(1).TimeLine.MainSequence.Count)
}
```
