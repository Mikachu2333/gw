# AnimationBehaviors.Add

返回一个代表新动画行为的 **[AnimationBehavior](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationBehavior/obj)** 对象。



## 语法

express.**Add(Type, Index)**

express   一个代表 **AnimationBehaviors** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Type | 必选 | MsoAnimType | 动画行为的类型。 |
| Index | 可选 | number（int 精度） | 动画行为相对于其他动画行为的位置。默认值为 -1，这意味着如果省略 _Index_ 参数，则会在现有动画行为的末尾添加新的动画行为。 |

## 返回值

AnimationBehavior

## 说明


_Type_ 参数值可以是下列 **MsoAnimType** 常量之一：

| 常量 |
| ----------------------- |
| **msoAnimTypeColor**    |
| **msoAnimTypeCommand** |
| **msoAnimTypeFilter** |
| **msoAnimTypeMixed**    |
| **msoAnimTypeMotion**   |
| **msoAnimTypeNone**     |
| **msoAnimTypeProperty** |
| **msoAnimTypeRotation** |
| **msoAnimTypeScale**    |
| **msoAnimTypeSet** |



## 示例


```JavaScript
/*本示例向活动窗口选定的第一张幻灯片的主动画序列时间线第一个动画效果添加一个动画行为。*/
function test() {
    let timeLine = ActiveWindow.Selection.SlideRange.Item(1).TimeLine
    timeLine.MainSequence.Item(1).Behaviors.Add(msoAnimTypeSet)
}
```


```JavaScript
/*本示例向活动演示文稿的第一张幻灯片的主动画序列时间线的第一个动画效果添加一个动画行为。*/
function test() {
    let timeLine = ActivePresentation.Slides.Item(1).TimeLine
    timeLine.MainSequence.Item(1).Behaviors.Add(msoAnimTypeRotation, 1)
}
```
