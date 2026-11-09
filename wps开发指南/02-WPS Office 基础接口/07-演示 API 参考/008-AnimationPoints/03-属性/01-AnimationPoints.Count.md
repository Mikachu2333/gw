# AnimationPoints.Count

返回指定集合中的对象数。只读。



## 语法

express.**Count**

express   一个代表 **AnimationPoints** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动演示文稿第一张幻灯片的主动画序列时间线的第二个动画行为的动画点的数量。*/
function test() {
    let effect = ActivePresentation.Slides.Item(1).TimeLine.MainSequence.Item(1)
    let points = effect.Behaviors.Item(2).PropertyEffect.Points
    alert(points.Count)
}
```
