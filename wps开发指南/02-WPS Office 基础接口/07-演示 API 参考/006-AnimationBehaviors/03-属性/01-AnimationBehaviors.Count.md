# AnimationBehaviors.Count

返回指定集合中的对象数。只读。



## 语法

express.**Count**

express   一个代表 **AnimationBehaviors** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片的主动画序列时间线的第一个动画效果的动画行为的数量。*/
function test() {
    let timeLine = ActivePresentation.Slides.Item(1).TimeLine
    alert(timeLine.MainSequence.Item(1).Behaviors.Count)
}
```
