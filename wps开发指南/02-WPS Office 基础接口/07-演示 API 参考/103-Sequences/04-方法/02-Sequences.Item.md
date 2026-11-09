# Sequences.Item

从指定的 **Sequences** 集合中返回单个 **Sequence** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **Sequences** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int 精度） | 集合中要返回的单个 **Sequence** 对象的索引编号。 |

## 返回值

Sequence

## 示例


```JavaScript
/*本示例向活动窗口选定的第一张幻灯片的第一个交互动画序列中添加第一个形状的飞入动画效果。*/
function test() {
    let slide = ActiveWindow.Selection.SlideRange.Item(1)
    let shape = slide.Shapes.Item(1)
    let sequence = slide.TimeLine.InteractiveSequences.Item(1)
    sequence.AddEffect(shape, msoAnimEffectFly, msoAnimateTextByFirstLevel, msoAnimTriggerOnShapeClick, 1)
}
```


```JavaScript
/*本示例将活动演示文稿第一张幻灯片的交互式动画序列集合中的第二个动画序列的第一个动画效果设置为按段落动画显示其所包含的文本。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let sequences = slide.TimeLine.InteractiveSequences
    let effect = sequences.Item(2).Item(1)
    sequences.Item(2).ConvertToTextUnitEffect(effect, msoAnimTextUnitEffectByParagraph)
}
```
