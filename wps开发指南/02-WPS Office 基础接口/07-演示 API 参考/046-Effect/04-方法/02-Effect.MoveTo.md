# Effect.MoveTo

将指定对象移动到同一集合中的指定位置，并适当地对集合中所有其他项目进行重新编号。



## 语法

express.**MoveTo(toPos)**

express   一个代表 **Effect** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| toPos | 必选 | number（int 精度） | 动画效果要移动到的索引位置。 |

## 返回值

void

## 示例


```JavaScript
/*本示例在指定形状的动画效果集合中将一个动画效果移动到第二个动画效果的位置上。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let shape = slide.Shapes.Item(1)
    let effect = slide.TimeLine.MainSequence.AddEffect(shape, msoAnimEffectBlinds)
    effect.MoveTo(2)
}
```


```JavaScript
/*本示例将活动窗口中选定的第一张幻灯片的主动画序列时间线的第二个动画效果移动到第一个索引位置上。*/
function test() {
    let effect = ActiveWindow.Selection.SlideRange.Item(1).TimeLine.MainSequence.Item(2)
    effect.MoveTo(1)
}
```
