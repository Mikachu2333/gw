# Sequence.Item

从指定的 **Sequence** 集合中返回单个 **Effect** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **Sequence** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int 精度） | 集合中要返回的单个 **Effect** 对象的索引编号。 |

## 返回值

Effect

## 示例


```JavaScript
/*本示例显示第一张幻灯片的主动画序列时间线的第一个动画效果的名称。*/
function test() {
    let sequence = ActivePresentation.Slides.Item(1).TimeLine.MainSequence
    alert(sequence.Item(1).DisplayName)
}
```


```JavaScript
/*本示例设置活动窗口选定的第一张幻灯片中第二个动画效果的持续时间。*/
function test() {
    let sequence = ActiveWindow.Selection.SlideRange.Item(1).TimeLine.MainSequence
    sequence.Item(2).Timing.Duration = 1
}
```
