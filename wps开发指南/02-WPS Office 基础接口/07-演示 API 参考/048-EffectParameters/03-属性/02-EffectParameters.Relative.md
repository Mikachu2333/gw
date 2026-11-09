# EffectParameters.Relative

确定是否设置相对于形状位置的动作位置。可读/写。



## 语法

express.**Relative**

express   一个代表 **EffectParameters** 对象的变量。

## 类型

MsoTriState

## 说明


此属性只能与移动路径联合使用。

 **Relative** 属性的值可以是下列 **MsoTriState** 常量之一：

| 常量           | 说明             |
| ------------ | -------------- |
| **msoFalse** | 默认值。动作路径为绝对路径。 |
| **msoTrue**  | 动作路径为相对路径。     |



## 示例


```JavaScript
/*本示例添加一个形状并对该形状添加一个动画移动路径，然后报告该移动路径的相对性。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.AddShape(msoShapeCube, 100, 100, 50, 50)
    let effect = ActivePresentation.Slides.Item(1).TimeLine.MainSequence.AddEffect(shape, msoAnimEffectPathDiamond)
    effect.Timing.Duration = 3
    alert(`Is motion path relative or absolute: ${effect.EffectParameters.Relative}\n-1 = Relative, 0 = Absolute`)
}
```


```JavaScript
/*本示例将活动窗口中选定的第一张幻灯片的第二个动画效果的移动路径设置为相对路径。*/
function test() {
    let effectParameters = ActiveWindow.Selection.SlideRange.Item(1).TimeLine.MainSequence.Item(2).EffectParameters
    effectParameters.Relative = msoTrue
}
```
