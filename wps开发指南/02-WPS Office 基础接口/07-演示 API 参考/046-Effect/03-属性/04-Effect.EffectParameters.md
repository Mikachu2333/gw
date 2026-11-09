# Effect.EffectParameters

返回一个代表动画效果属性的 **[EffectParameters](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/EffectParameters/obj)** 对象。



## 语法

express.**EffectParameters**

express   一个代表 **Effect** 对象的变量。

## 类型

EffectParameters

## 示例


```JavaScript
/*本示例向活动演示文稿第一张幻灯片的第一个形状添加飞入动画，并设置动画效果为从左侧飞入。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let effect = ActivePresentation.Slides.Item(1).TimeLine.MainSequence.AddEffect(shape, msoAnimEffectFly)
    effect.EffectParameters.Direction = msoAnimDirectionLeft
}
```


```JavaScript
/*本示例显示活动窗口选定的第一张幻灯片的主动画序列时间线的第二个动画效果的移动路径是否为相对路径。*/
function test() {
    let effect = ActiveWindow.Selection.SlideRange.Item(1).TimeLine.MainSequence.Item(2)
    alert(effect.EffectParameters.Relative == msoTrue)
}
```
