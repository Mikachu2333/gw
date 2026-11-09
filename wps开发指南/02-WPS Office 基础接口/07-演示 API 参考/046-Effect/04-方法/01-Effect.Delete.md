# Effect.Delete

删除指定的 **Effect** 对象。



## 语法

express.**Delete()**

express   一个代表 **Effect** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除活动演示文稿第一张幻灯片的主动画序列时间线的第一个动画效果。*/
function test() {
    let effect = ActivePresentation.Slides.Item(1).TimeLine.MainSequence.Item(1)
    effect.Delete()
}
```


```JavaScript
/*本示例判断如果第一篇演示文稿第一张幻灯片的主动画序列时间线的第二个动画效果的名称为“椭圆 3”，则删除该动画效果。*/
function test() {
    let effect = Presentations.Item(1).Slides.Item(1).TimeLine.MainSequence.Item(2)
    if (effect.DisplayName == "椭圆 3") {
        effect.Delete()
    }
}
```
