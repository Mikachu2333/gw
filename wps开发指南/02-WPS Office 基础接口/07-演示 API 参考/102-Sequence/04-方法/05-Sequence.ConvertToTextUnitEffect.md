# Sequence.ConvertToTextUnitEffect

返回一个 **[Effect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Effect/obj)** 对象，该对象表示应如何为文本添加动画效果。



## 语法

express.**ConvertToTextUnitEffect(Effect, unitEffect)**

express   一个代表 **Sequence** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Effect | 必选 | Effect | 要应用于文本单元的动画效果。 |
| unitEffect | 必选 | MsoAnimTextUnitEffect | 文本的动画处理方式。 |

## 返回值

Effect

## 示例


```JavaScript
/*本示例在给定形状中添加一个动画，并按字符动画显示其所包含的文本。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let timeLine = ActivePresentation.Slides.Item(1).TimeLine
    timeLine.MainSequence.ConvertToTextUnitEffect(timeLine.MainSequence.AddEffect(shape, msoAnimEffectRandomEffects), msoAnimTextUnitEffectByCharacter)
}
```


```JavaScript
/*本示例将活动窗口选定的第一张幻灯片的第一个动画效果文本处理方式设置为msoAnimTextUnitEffectByParagraph。*/
function test() {
    let sequence = ActiveWindow.Selection.SlideRange.Item(1).TimeLine.MainSequence
    sequence.ConvertToTextUnitEffect(sequence.Item(1), msoAnimTextUnitEffectByParagraph)
}
```
