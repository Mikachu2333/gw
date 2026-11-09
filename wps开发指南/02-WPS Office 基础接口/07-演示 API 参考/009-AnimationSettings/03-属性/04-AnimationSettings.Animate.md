# AnimationSettings.Animate

决定在幻灯片放映过程中指定的形状是否被赋予动画效果。可读/写。



## 语法

express.**Animate**

express   一个代表 **AnimationSettings** 对象的变量。

## 类型

MsoTriState

## 说明


要为一个形状赋予动画效果，则该形状的 **AnimationSettings** 对象的 **[TextLevelEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationSettings/member/TextLevelEffect)** 属性必须设置为除 **ppAnimateLevelNone** 之外的值，并且必须将 **Animate** 属性设置为 **msoTrue** ，或将 **[EntryEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationSettings/member/EntryEffect)** 属性设置为除 **ppEffectNone** 之外的常量。

 **Animate** 属性的值可以是下列 **MsoTriState** 常量之一：

| 常量 | 说明 |
| ---- | ---- |
| **msoFalse**  | 在幻灯片放映过程中指定的形状未被赋予动画效果。 |
| **msoTrue** | 在幻灯片放映过程中指定的形状被赋予动画效果。      |



## 示例


```JavaScript
/*本示例指定活动演示文稿第二张幻灯片的标题在创建后变暗。如果该标题是第二张幻灯片中的最后一个或唯一创建的形状，则该文本不变暗。*/
function test() {
    let animationSettings = ActivePresentation.Slides.Item(2).Shapes.Title.AnimationSettings
    animationSettings.TextLevelEffect = ppAnimateByAllLevels
    animationSettings.AfterEffect = ppAfterEffectDim
    animationSettings.Animate = msoTrue
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个形状在幻灯片放映过程中是否被赋予动画效果。*/
function test() {
    let animationSettings = ActiveWindow.Selection.ShapeRange.Item(1).AnimationSettings
    alert(animationSettings.Animate == msoTrue)
}
```
