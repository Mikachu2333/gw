# Shape.AnimationSettings

返回一个 **AnimationSettings** 对象，该对象代表所有可应用于指定形状的动画的特殊效果。



## 语法

express.**AnimationSettings**

express   一个代表 **Shape** 对象的变量。

## 类型

AnimationSettings

## 示例


```JavaScript
/*本示例设置在创建幻灯片时，当前演示文稿第二张幻灯片的第一个形状从左侧飞入。*/
function test() {
    let asets = Application.ActivePresentation.Slides.Item(2).Shapes.Item(1).AnimationSettings
    asets.EntryEffect = ppEffectFlyFromLeft
    asets.TextLevelEffect = ppAnimateByAllLevels
}
```


```JavaScript
/*本示例显示当前演示文稿第一张幻灯片的第二个形状在幻灯片放映期间是否设置动画效果。*/
function test() {
    let asets = Application.ActivePresentation.Slides.Item(1).Shapes.Item(2).AnimationSettings
    alert(asets.Animate == msoTrue)
}
```
