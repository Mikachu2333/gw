# AnimationBehavior.Delete

删除指定的 **AnimationBehavior** 对象。



## 语法

express.**Delete()**

express   一个代表 **AnimationBehavior** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除活动窗口选定的第一张幻灯片的主动画序列时间线的第一个动画行为。*/
function test() {
    let animationBehavior = ActiveWindow.Selection.SlideRange.Item(1).TimeLine.MainSequence.Item(1).Behaviors.Item(1)
    animationBehavior.Delete()
}
```


```JavaScript
/*本示例删除活动演示文稿第一张幻灯片的主动画序列时间线的所有动画行为。*/
function test() {
    let effect = ActivePresentation.Slides.Item(1).TimeLine.MainSequence.Item(1)
    for (let i = effect.Behaviors.Count; i >= 1; i--) {
        effect.Behaviors.Item(i).Delete()
    }
}
```
