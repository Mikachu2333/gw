# AnimationSettings.EntryEffect

对于 **AnimationSettings** 对象，此属性返回或设置应用于指定形状中动画的特殊效果。可读写。



## 语法

express.**EntryEffect**

express   一个代表 **AnimationSettings** 对象的变量。

## 类型

PpEntryEffect

## 说明


如果将指定形状的 **[TextLevelEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationSettings/member/TextLevelEffect)** 属性设为 **ppAnimateLevelNone** （默认值）或将 **[Animate](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationSettings/member/Animate)** 属性设为 **msoFalse** ，您将看不到通过 **EntryEffect** 属性应用的特殊效果。



## 示例


```JavaScript
/*本示例在当前演示文稿中添加一张标题幻灯片，并设置该标题在幻灯片放映中动画时从右侧飞入。*/
function test() {
    let shape = ActivePresentation.Slides.Add(1, ppLayoutTitleOnly).Shapes.Item(1)
    shape.TextFrame.TextRange.Text = "Sample title"
    let animationSettings = shape.AnimationSettings
    animationSettings.TextLevelEffect = ppAnimateByAllLevels
    animationSettings.EntryEffect = ppEffectFlyFromRight
    animationSettings.Animate = msoTrue
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个形状中动画的特殊效果是否为ppEffectWipeUp。*/
function test() {
    let animationSettings = ActiveWindow.Selection.ShapeRange.Item(1).AnimationSettings
    alert(animationSettings.EntryEffect == ppEffectWipeUp)
}
```
