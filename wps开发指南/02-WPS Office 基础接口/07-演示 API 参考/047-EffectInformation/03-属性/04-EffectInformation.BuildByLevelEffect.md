# EffectInformation.BuildByLevelEffect

决定动画生成效果的级别。只读。



## 语法

express.**BuildByLevelEffect**

express   一个代表 **EffectInformation** 对象的变量。

## 类型

MsoAnimateByLevel

## 说明


 **BuildByLevelEffect**  属性返回的值可以是下列 **MsoAnimateByLevel** 常量之一：

| 常量 |
| ---------------------------------------- |
| **msoAnimateChartAllAtOnce**             |
| **msoAnimateChartByCategory**            |
| **msoAnimateChartByCategoryElements**    |
| **msoAnimateChartBySeries**              |
| **msoAnimateChartBySeriesElements**      |
| **msoAnimateDiagramAllAtOnce**           |
| **msoAnimateDiagramBreadthByLevel**      |
| **msoAnimateDiagramBreadthByNode**       |
| **msoAnimateDiagramClockwise**           |
| **msoAnimateDiagramClockwiseIn**         |
| **msoAnimateDiagramClockwiseOut**        |
| **msoAnimateDiagramCounterClockwise**    |
| **msoAnimateDiagramCounterClockwiseIn**  |
| **msoAnimateDiagramCounterClockwiseOut** |
| **msoAnimateDiagramDepthByBranch**       |
| **msoAnimateDiagramDepthByNode**         |
| **msoAnimateDiagramDown**                |
| **msoAnimateDiagramInByRing**            |
| **msoAnimateDiagramOutByRing**           |
| **msoAnimateDiagramUp**                  |
| **msoAnimateLevelMixed**                 |
| **msoAnimateTextByAllLevels**            |
| **msoAnimateTextByFifthLevel**           |
| **msoAnimateTextByFirstLevel**           |
| **msoAnimateTextByFourthLevel**          |
| **msoAnimateTextBySecondLevel**          |
| **msoAnimateTextByThirdLevel**           |
| **msoAnimationLevelNone**                |



## 示例


```JavaScript
/*本示例判断如果活动演示文稿第一张幻灯片的第一个动画生成效果的级别不为msoAnimateLevelNone，则设置其幻灯片放映期间按字/词显示动画效果。*/
function test() {
    let effect = ActivePresentation.Slides.Item(1).TimeLine.MainSequence.Item(1)
    if (effect.EffectInformation.BuildByLevelEffect != msoAnimateLevelNone) {
        ActivePresentation.Slides.Item(1).TimeLine.MainSequence.ConvertToTextUnitEffect(effect, msoAnimTextUnitEffectByWord)
    }
}
```


```JavaScript
/*本示例显示活动窗口中选定的第一张幻灯片的第二个动画生成效果的级别是否为msoAnimateChartByCategory。*/
function test() {
    let effectInformation = ActiveWindow.Selection.SlideRange.Item(1).TimeLine.MainSequence.Item(2).EffectInformation
    alert(effectInformation.BuildByLevelEffect == msoAnimateChartByCategory)
}
```
