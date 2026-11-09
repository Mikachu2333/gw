# TimeLine.InteractiveSequences

返回一个 **[Sequences](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Sequences/obj)** 对象，该对象代表通过单击指定形状触发的动画。



## 语法

express.**InteractiveSequences**

express   一个代表 **TimeLine** 对象的变量。

## 类型

Sequences

## 说明


 **InteractiveSequences** 属性的默认值为一个空 **[Sequences](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Sequences/obj)** 集合。



## 示例


```JavaScript
/*本示例在活动演示文稿的第一张幻灯片中添加一个交互式序列并设置新动画序列的文本效果属性。*/
function test() {
    let sequence = ActivePresentation.Slides.Item(1).TimeLine.InteractiveSequences.Add(1)
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let effect = ActivePresentation.Slides.Item(1).TimeLine.MainSequence.AddEffect(shape, msoAnimEffectChangeFont, msoAnimTriggerOnPageClick)
    sequence.ConvertToTextUnitEffect(effect, msoAnimTextUnitEffectByWord)
}
```


```JavaScript
/*本示例向活动窗口选定的第一张幻灯片中添加一个形状并设置该形状的交互式效果。*/
function test() {
    let slide = ActiveWindow.Selection.SlideRange.Item(1)
    let shape = slide.Shapes.AddShape(msoShapeBevel, 400, 200, 150, 100)
    let sequence = slide.TimeLine.InteractiveSequences.Add(1)
    sequence.AddEffect(shape, msoAnimEffectStretchy, msoAnimTriggerAfterPrevious, msoAnimTriggerWithPrevious, 1)
}
```
