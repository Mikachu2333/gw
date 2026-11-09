# Sequence.ConvertToAnimateBackground

确定背景是否独立于其附带的文本显示动画，或者与其附带文本一起显示动画。返回一个 **[Effect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Effect/obj)** 对象，该对象代表新修改过的动画效果。



## 语法

express.**ConvertToAnimateBackground(Effect, AnimateBackground)**

express   一个代表 **Sequence** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Effect | 必选 | Effect | 要应用于背景的动画效果。 |
| AnimateBackground | 必选 | MsoTriState | 确定是否脱离背景单独动画显示文本。 |

## 返回值

Effect

## 示例


```JavaScript
/*本示例为当前演示文稿中第一张幻灯片的第一个形状创建一个文本效果，并脱离背景单独动画显示该文本。本示例假定第一张幻灯片上有一个形状，并且该形状内具有文本。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let timeLine = ActivePresentation.Slides.Item(1).TimeLine
    // Add a blast effect to the text, and animate the text separately
    // from the background.
    timeLine.MainSequence.ConvertToAnimateBackground(timeLine.MainSequence.AddEffect(shape, msoAnimEffectBlast), msoFalse)
}
```


```JavaScript
/*本示例将活动窗口选定的第一张幻灯片的第一个动画效果设置为背景与文本一起显示动画。*/
function test() {
    let sequence = ActiveWindow.Selection.SlideRange.Item(1).TimeLine.MainSequence
    sequence.ConvertToAnimateBackground(sequence.Item(1), msoTrue)
}
```
