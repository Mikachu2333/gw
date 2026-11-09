# AnimationBehavior.Type

代表动画的类型。可读/写。



## 语法

express.**Type**

express   一个代表 **AnimationBehavior** 对象的变量。

## 类型

MsoAnimType

## 说明


 **Type** 属性的值可以是下列 **MsoAnimType** 常量之一：

| 常量 |
| ------------------------- |
| **msoAnimTypeColor**      |
| **msoAnimTypeCommand** |
| **msoAnimTypeFilter** |
| **msoAnimTypeMixed**      |
| **msoAnimTypeMotion**     |
| **msoAnimTypeNone**       |
| **msoAnimTypeProperty**   |
| **msoAnimTypeRoatation**  |
| **msoAnimTypeScale**      |
| **msoAnimTypeSet** |



## 示例


```JavaScript
/*本示例显示活动窗口选定的第一张幻灯片的主动画序列时间线的第一个动画行为的类型是否为msoAnimTypeSet。*/
function test() {
    let effect = ActiveWindow.Selection.SlideRange.Item(1).TimeLine.MainSequence.Item(1)
    alert(effect.Behaviors.Item(1).Type == msoAnimTypeSet)
}
```


```JavaScript
/*本示例将活动演示文稿第一张幻灯片的主动画序列时间线的第一个动画行为的类型设置为msoAnimTypeProperty。*/
function test() {
    let animationBehavior = ActivePresentation.Slides.Item(1).TimeLine.MainSequence.Item(1).Behaviors.Item(1)
    animationBehavior.Type = msoAnimTypeProperty
}
```
