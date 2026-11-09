# AnimationPoints.Item

从指定的 **AnimationPoints** 集合中返回单个 **AnimationPoint** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **AnimationPoints** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int 精度） | 集合中要返回的单个 **AnimationPoint** 对象的索引号。 |

## 返回值

AnimationPoint

## 示例


```JavaScript
/*本示例设置活动窗口所选的第一张幻灯片的主动画序列时间线的第二个动画行为的第一个动画点的时间。*/
function test() {
    let effect = ActiveWindow.Selection.SlideRange.Item(1).TimeLine.MainSequence.Item(1)
    let points = effect.Behaviors.Item(2).PropertyEffect.Points
    points.Item(1).Time = 0.5
}
```


```JavaScript
/*本示例删除活动演示文稿第一张幻灯片的主动画序列时间线的第二个动画行为的最后一个动画点。*/
function test() {
    let effect = ActivePresentation.Slides.Item(1).TimeLine.MainSequence.Item(1)
    let points = effect.Behaviors.Item(2).PropertyEffect.Points
    points.Item(points.Count).Delete()
}
```
