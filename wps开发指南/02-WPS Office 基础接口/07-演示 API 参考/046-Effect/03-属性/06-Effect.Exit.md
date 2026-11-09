# Effect.Exit

决定动画效果是否为退出效果。可读/写。



## 语法

express.**Exit**

express   一个代表 **Effect** 对象的变量。

## 类型

MsoTriState

## 说明


 **Exit** 属性的值可以是下列 **MsoTriState** 常量之一：

| 常量           | 说明         |
| ------------ | ---------- |
| **msoFalse** | 该效果不是退出效果。 |
| **msoTrue**  | 该效果是退出效果。  |



## 示例


```JavaScript
/*本示例判断活动演示文稿的第一张幻灯片的主动画序列时间线的第一个动画效果是否为退出效果，并通知用户。*/
function test() {
    let effect = ActivePresentation.Slides.Item(1).TimeLine.MainSequence.Item(1)
    if (effect.Exit == msoTrue) {
        alert("This is an exit animation effect.")
    } else {
        alert("This is not an exit animation effect.")
    }
}
```


```JavaScript
/*本示例设置活动窗口中选定的第一张幻灯片的主动画序列时间线的第二个动画效果为退出效果。*/
function test() {
    let effect = ActiveWindow.Selection.SlideRange.Item(1).TimeLine.MainSequence.Item(2)
    effect.Exit = msoTrue
}
```
