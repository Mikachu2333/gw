# EffectInformation.AnimateBackground

如果指定的效果是背景动画，则返回 **msoTrue** 。只读。



## 语法

express.**AnimateBackground**

express   一个代表 **EffectInformation** 对象的变量。

## 类型

MsoTriState

## 说明


使用 [ **TextLevelEffect** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationSettings/member/TextLevelEffect) 和 **[TextUnitEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/EffectInformation/member/TextUnitEffect)** 属性可以控制附加到指定形状的文本的动画效果。

如果将该属性设置为 **msoTrue** 并将 **TextLevelEffect** 属性设置为 **ppAnimateByAllLevels** ，则形状及其文本会同时显示动画效果。如果将该属性设置为 **msoTrue** 并将 **TextLevelEffect** 属性设置为除 **ppAnimateByAllLevels** 之外的任何值，则文本紧跟在形状之后显示动画效果。

除非为指定形状设置动画效果，否则看不到设置该属性的效果。若要为某形状设置动画效果，必须将该形状的 **TextLevelEffect** 属性设置为除 **ppAnimateLevelNone** 之外的某个值，并且必须将 **[Animate](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationSettings/member/Animate)** 属性设置为 **msoTrue** ，或必须将 **[EntryEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationSettings/member/EntryEffect)** 属性设置为除 **ppEffectNone** 之外的常量。

 **AnimateBackground** 属性返回的值可以是下列 **MsoTriState** 常量之一：

| 常量           | 说明           |
| ------------ | ------------ |
| **msoFalse** | 指定的效果不是背景动画。 |
| **msoTrue**  | 指定的效果是背景动画。  |



## 示例


```JavaScript
/*本示例中，如果背景当前具有动画效果，则更改该动画的方向。*/
function test() {
    let effect = ActivePresentation.Slides.Item(1).TimeLine.MainSequence.Item(1)
    if (effect.EffectInformation.AnimateBackground) {
        effect.EffectParameters.Direction = msoAnimDirectionTopLeft
    }
}
```


```JavaScript
/*本示例判断活动窗口中选定的第一张幻灯片的第二个动画的效果是否为背景动画，并通知用户。*/
function test() {
    let effectInformation = ActiveWindow.Selection.SlideRange.Item(1).TimeLine.MainSequence.Item(2).EffectInformation
    if (effectInformation.AnimateBackground) {
        alert("该动画效果是背景动画。")
    } else {
        alert("该动画效果不是背景动画。")
    }
}
```
