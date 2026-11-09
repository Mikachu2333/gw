# Sequences.Add

返回一个 **[Sequence](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Sequence/obj)** 对象，该对象代表一个新的序列。



## 语法

express.**Add(Index)**

express   一个代表 **Sequences** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 可选 | number（int 精度） | 序列相对于其他序列的位置。默认值为 -1，表示如果省略 _Index_ 参数，新的序列将添加到现有序列的末尾。 |

## 返回值

Sequence

## 示例


```JavaScript
/*本示例将活动演示文稿第一张幻灯片的交互式动画序列集合中的第二个动画序列的第一个动画效果设置为按字符动画显示其所包含的文本。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let effect = slide.TimeLine.InteractiveSequences.Item(2).Item(1)
    let sequence = slide.TimeLine.InteractiveSequences.Add()
    sequence.ConvertToTextUnitEffect(effect, msoAnimTextUnitEffectByCharacter)
}
```


```JavaScript
/*本示例为活动窗口选定的第一张幻灯片的第二个形状设置交互式效果。*/
function test() {
    let slide = ActiveWindow.Selection.SlideRange.Item(1)
    let shape = slide.Shapes.Item(2)
    let sequence = slide.TimeLine.InteractiveSequences.Add(1)
    sequence.AddEffect(shape, msoAnimEffectStretch, msoAnimateChartByCategory, msoAnimTriggerWithPrevious, 1)
}
```
