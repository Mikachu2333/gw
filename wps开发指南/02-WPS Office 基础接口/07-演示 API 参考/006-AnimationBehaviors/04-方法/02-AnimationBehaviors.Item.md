# AnimationBehaviors.Item

从指定的 **AnimationBehaviors** 集合中返回单个 **AnimationBehavior** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **AnimationBehaviors** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int 精度） | 集合中要返回的单个 **AnimationBehavior** 对象的索引号。 |

## 返回值

AnimationBehavior

## 示例


```JavaScript
/*本示例将活动演示文稿第一张幻灯片的主动画序列时间线的第一个动画行为添加到另一个动画行为中。*/
function test() {
    let animationBehavior = ActivePresentation.Slides.Item(1).TimeLine.MainSequence.Item(1).Behaviors.Item(1)
    animationBehavior.Additive = msoAnimAdditiveAddSum
}
```


```JavaScript
/*本示例显示活动窗口选定的第一张幻灯片的主动画序列时间线的第一个动画行为正向播放后是否会再反向播放。*/
function test() {
    let effect = ActiveWindow.Selection.SlideRange.Item(1).TimeLine.MainSequence.Item(1)
    alert(effect.Behaviors.Item(1).Timing.AutoReverse == msoTrue)
}
```
