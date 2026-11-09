# Sequence.ConvertToBuildLevel

更改指定动画效果的创建级别信息。返回 **[Effect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Effect/obj)** 对象，该对象代表创建级别信息。



## 语法

express.**ConvertToBuildLevel(Effect, Level)**

express   一个代表 **Sequence** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Effect | 必选 | Effect | 指定的动画效果。 |
| Level | 必选 | MsoAnimateByLevel | 动画创建级别。 |

## 返回值

Effect

## 说明


更改一个效果的创建级别信息将使任何现有的效果失效。



## 示例


```JavaScript
/*本示例更改一个动画效果的创建级别信息，这将使其原效果失效。*/
function test() {
    let slide = ActiveWindow.Selection.SlideRange.Item(1)
    let shape = slide.Shapes.Item(1)
    let effect1 = slide.TimeLine.MainSequence.AddEffect(shape, msoAnimEffectAscend)
    let effect2 = slide.TimeLine.MainSequence.ConvertToBuildLevel(effect1, msoAnimateTextByFirstLevel)
}
```


```JavaScript
/*本示例将活动演示文稿第一张幻灯片的第一个动画效果的级别设置为msoAnimateChartBySeries。*/
function test() {
    let sequence = ActivePresentation.Slides.Item(1).TimeLine.MainSequence
    sequence.ConvertToBuildLevel(sequence.Item(1), msoAnimateChartBySeries)
}
```
