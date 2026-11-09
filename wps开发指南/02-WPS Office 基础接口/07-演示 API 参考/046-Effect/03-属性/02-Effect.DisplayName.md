# Effect.DisplayName

返回动画效果的名称。只读。



## 语法

express.**DisplayName**

express   一个代表 **Effect** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示第一张幻灯片的主动画序列时间线的第一个动画序列的名称。*/
function test() {
    let effect = ActivePresentation.Slides.Item(1).TimeLine.MainSequence.Item(1)
    alert(effect.DisplayName)
}
```


```JavaScript
/*本示例向第一篇演示文稿第一张幻灯片的第二个形状添加一种动画效果，并显示该形状动画效果的名称。*/
function test() {
    let slide = Presentations.Item(1).Slides.Item(1)
    let effect = slide.TimeLine.MainSequence.AddEffect(slide.Shapes.Item(2), msoAnimEffectStretchy, msoAnimTriggerAfterPrevious)
    alert(effect.DisplayName)
}
```
