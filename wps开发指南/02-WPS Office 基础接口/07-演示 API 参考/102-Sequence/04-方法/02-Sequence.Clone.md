# Sequence.Clone

创建 **[Effect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Effect/obj)** 对象的一个副本，并将其添加到指定索引位置处的 **[Sequences](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Sequences/obj)** 集合中。



## 语法

express.**Clone(Effect, Index)**

express   一个代表 **Sequence** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Effect | 必选 | Effect | **Effect** 对象。要复制的动画效果。 |
| Index | 可选 | number（int 精度） | 将复制的动画效果添加到 **Sequences** 集合中的位置。默认值为 -1（即添加到末尾）。 |

## 返回值

Effect

## 示例


```JavaScript
/*本示例复制活动演示文稿第一张幻灯片中的第一个动画效果，并将其放在动画序列的末尾。*/
function test() {
    let sequence = ActivePresentation.Slides.Item(1).TimeLine.MainSequence
    sequence.Clone(sequence.Item(1), -1)
}
```


```JavaScript
/*本示例复制活动窗口选定的第一张幻灯片的第二个动画效果，并将其放在动画序列的第一个位置。*/
function test() {
    let slide = ActiveWindow.Selection.SlideRange.Item(1)
    let sequence = slide.TimeLine.MainSequence
    sequence.Clone(sequence.Item(2), 1)
}
```
