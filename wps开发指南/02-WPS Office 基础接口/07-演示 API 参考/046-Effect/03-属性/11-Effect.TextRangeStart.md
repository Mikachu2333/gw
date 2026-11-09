# Effect.TextRangeStart

返回文本区域的起始位置。只读。



## 语法

express.**TextRangeStart**

express   一个代表 **Effect** 对象的变量。

## 类型

number（int 精度）

## 示例


```JavaScript
/*本示例添加一个包含文本的文本框，并设置文本框中的文本沿着五角星旋转。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let shape = slide.Shapes.AddTextbox(msoTextOrientationHorizontal, 32, 32, 300, 300)
    shape.TextFrame.TextRange.Text = "Test Box"
    effect = slide.TimeLine.MainSequence.AddEffect(shape, msoAnimEffectPath5PointStar, msoAnimateTextByAllLevels, msoAnimTriggerAfterPrevious)
    if (effect.TextRangeStart == 0 && effect.TextRangeLength > 0) {
        let rotationEffect = effect.Behaviors.Add(msoAnimTypeRotation).RotationEffect
        rotationEffect.From = 0
        rotationEffect.To = 360
        effect.Timing.AutoReverse = msoTrue
    }
}
```


```JavaScript
/*本示例显示活动窗口中选定的第一张幻灯片的第一个动画效果的文本范围的起始位置。*/
function test() {
    let effect = ActiveWindow.Selection.SlideRange.Item(1).TimeLine.MainSequence.Item(1)
    alert(effect.TextRangeStart)
}
```
