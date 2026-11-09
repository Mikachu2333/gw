# EffectParameters.Direction

决定动画效果使用的方向。只有当效果使用方向时才可以使用此属性。可读/写。



## 语法

express.**Direction**

express   一个代表 **EffectParameters** 对象的变量。

## 类型

MsoAnimDirection

## 说明


 **Direction** 属性的值可以是下列 **MsoAnimDirection** 常量之一：

| 常量 |
| ----------------------------------------- |
| **msoAnimDirectionAcross**                |
| **msoAnimDirectionBottom**                |
| **msoAnimDirectionBottomLeft**            |
| **msoAnimDirectionBottomRight**           |
| **msoAnimDirectionCenter**                |
| **msoAnimDirectionClockwise**             |
| **msoAnimDirectionCounterclockwise**      |
| **msoAnimDirectionCycleClockwise**        |
| **msoAnimDirectionCycleCounterclockwise** |
| **msoAnimDirectionDown**                  |
| **msoAnimDirectionDownLeft**              |
| **msoAnimDirectionDownRight**             |
| **msoAnimDirectionFontAllCaps**           |
| **msoAnimDirectionFontBold**              |
| **msoAnimDirectionFontItalic**            |
| **msoAnimDirectionFontShadow**            |
| **msoAnimDirectionFontStrikethrough**     |
| **msoAnimDirectionFontUnderline**         |
| **msoAnimDirectionGradual**               |
| **msoAnimDirectionHorizontal**            |
| **msoAnimDirectionHorizontalIn**          |
| **msoAnimDirectionHorizontalOut**         |
| **msoAnimDirectionIn**                    |
| **msoAnimDirectionInBottom**              |
| **msoAnimDirectionInCenter**              |
| **msoAnimDirectionInSlightly**            |
| **msoAnimDirectionInstant**               |
| **msoAnimDirectionLeft**                  |
| **msoAnimDirectionNone**                  |
| **msoAnimDirectionOrdinalMask**           |
| **msoAnimDirectionOut**                   |
| **msoAnimDirectionOutBottom**             |
| **msoAnimDirectionOutCenter**             |
| **msoAnimDirectionOutSlightly**           |
| **msoAnimDirectionRight**                 |
| **msoAnimDirectionSlightly**              |
| **msoAnimDirectionTop**                   |
| **msoAnimDirectionTopLeft**               |
| **msoAnimDirectionTopRight**              |
| **msoAnimDirectionUp**                    |
| **msoAnimDirectionUpLeft**                |
| **msoAnimDirectionUpRight**               |
| **msoAnimDirectionVertical**              |
| **msoAnimDirectionVerticalIn**            |
| **msoAnimDirectionVerticalOut**           |



## 示例


```JavaScript
/*以下示例添加一个形状，并且将该形状的动画效果设置为从左侧飞入。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.AddShape(msoShapeCube, 100, 100, 50, 50)
    let effect = ActivePresentation.Slides.Item(1).TimeLine.MainSequence.AddEffect(shape, msoAnimEffectFly)
    effect.Timing.Duration = 3
    effect.EffectParameters.Direction = msoAnimDirectionLeft
}
```


```JavaScript
/*本示例显示活动窗口中选定的第一张幻灯片的第二个动画效果使用的方向是否为msoAnimDirectionDown。*/
function test() {
    let effectParameters = ActiveWindow.Selection.SlideRange.Item(1).TimeLine.MainSequence.Item(2).EffectParameters
    alert(effectParameters.Direction == msoAnimDirectionDown)
}
```
