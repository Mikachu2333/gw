# AnimationPoint.Delete

删除指定的 **AnimationPoint** 对象。



## 语法

express.**Delete()**

express   一个代表 **AnimationPoint** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除活动演示文稿第一张幻灯片主动画序列时间线的第二个动画动作的属性的第一个动画点。*/
function test() {
    let propertyEffect = ActivePresentation.Slides.Item(1).TimeLine.MainSequence.Item(1).Behaviors.Item(2).PropertyEffect
    propertyEffect.Points.Item(1).Delete()
}
```


```JavaScript
/*本示例向活动演示文稿第一张幻灯片添加一个矩形，然后向该矩形添加一个动画动作，并添加一个动画点，最后删除该动画点。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let shape = slide.Shapes.AddShape(msoShapeRectangle, 100, 100, 50, 50)
    let effect = slide.TimeLine.MainSequence.AddEffect(shape, msoAnimEffectMediaPlay)
    let animationBehavior = effect.Behaviors.Add(msoAnimTypeProperty)
    let propertyEffect = animationBehavior.PropertyEffect
    propertyEffect.Points.Add()
    propertyEffect.Points.Item(1).Delete()
}
```
