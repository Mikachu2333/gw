# ShapeRange.AnimationSettings

返回一个 **[AnimationSettings](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationSettings/obj)** 对象，该对象代表所有可应用于指定形状的动画的特殊效果。只读。



## 语法

express.**AnimationSettings**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

AnimationSettings

## 示例


```JavaScript
/*本示例设置在放映幻灯片时，活动演示文稿第二张幻灯片中第一个形状从左侧飞入。*/
function test() {
    let actionSettings = ActivePresentation.Slides.Item(2).Shapes.Range(1).AnimationSettings
    actionSettings.EntryEffect = ppEffectFlyFromLeft
    actionSettings.TextLevelEffect = ppAnimateByAllLevels
}
```


```JavaScript
/*本示例显示活动窗口选中形状在幻灯片放映期间是否有动画效果。*/
function test() {
    alert(ActiveWindow.Selection.ShapeRange.AnimationSettings.Animate == msoTrue)
}
```
