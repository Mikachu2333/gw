# AnimationSettings.AdvanceMode

返回或设置一个值，该值指示指定形状的动画是仅在被单击时切换还是在经过指定时间后自动切换。可读/写 **PpAdvanceMode** 类型。



## 语法

express.**AdvanceMode**

express   一个代表 **AnimationSettings** 对象的变量。

## 类型

PpAdvanceMode

## 说明


如果该形状不会有动画效果，请确保将 **TextLevelEffect** 属性设置为除 **ppAnimateLevelNone** 之外的值，并且将 **Animate** 属性设置为 **True** 。

 **AdvanceMode** 属性的值可以是其中一个 **PpAdvanceMode** 常量。

| AdvanceMode 可以是下列 PpAdvanceMode 常量之一。 |
| --------------------------------------- |
| ppAdvanceModeMixed                      |
| ppAdvanceOnClick                        |
| ppAdvanceOnTime                         |



## 示例


```JavaScript
/*本示例将当前演示文稿第一张幻灯片的第2个形状设为五秒后自动播放动画。*/
function test() {
    let Ani = ActivePresentation.Slides.Item(1).Shapes.Item(2).AnimationSettings
    Ani.AdvanceMode = ppAdvanceOnTime
    Ani.AdvanceTime = 5
    Ani.TextLevelEffect = ppAnimateByAllLevels
    Ani.Animate = true
}
```


```JavaScript
/*本示例显示活动演示文稿第一张幻灯片的第一个形状的动画是否为单击时切换。*/
function test() {
    let Ani = ActivePresentation.Slides.Item(1).Shapes.Item(1).AnimationSettings
    alert(Ani.AdvanceMode == ppAdvanceOnClick)
}
```
