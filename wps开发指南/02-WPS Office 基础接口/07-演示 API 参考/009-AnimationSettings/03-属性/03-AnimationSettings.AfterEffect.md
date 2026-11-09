# AnimationSettings.AfterEffect

返回或设置一个 **PpAfterEffect** 常量，该常量指示指定的形状在生成之后是变暗、隐藏还是不更改。可读/写。



## 语法

express.**AfterEffect**

express   一个代表 **AnimationSettings** 对象的变量。

## 类型

PpAfterEffect

## 说明


除非带有动画播放后效果的形状播放动画，且幻灯片上至少有另一个形状在其播放后播放动画；否则无法看到为该形状设置的动画播放后效果。要给一个形状赋予动画效果，必须将 **AnimationSettings** 对象的 **[TextLevelEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationSettings/member/TextLevelEffect)** 属性设置为 **ppAnimateLevelNone** 以外的值，并且 **[EntryEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationSettings/member/EntryEffect)** 属性设置为除 **ppEffectNone** 以外的常量。另外，还必须将 **[Animate](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationSettings/member/Animate)** 属性必须设置为 **msoTrue** 。若要更改幻灯片上形状的创建顺序，请使用 **[AnimationOrder](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationSettings/member/AnimationOrder)** 属性。

 **AfterEffect** 属性的值可以是下列 **PpAfterEffect** 常量之一：

| 常量 |
| --------------------------------------- |
| **ppAfterEffectDim**                        |
| **ppAfterEffectHide**                       |
| **ppAfterEffectHideOnClick**                |
| **ppAfterEffectMixed**                      |
| **ppAfterEffectNone**                    |



## 示例


```JavaScript
/*本示例指定当前演示文稿中第一张幻灯片的标题在创建后变暗。但是，如果它是第一张幻灯片中最后的或唯一的形状，文本将不会变暗。*/
function test() {
    let animationSettings = ActivePresentation.Slides.Item(1).Shapes.Title.AnimationSettings
    animationSettings.Animate = msoTrue
    animationSettings.TextLevelEffect = ppAnimateByAllLevels
    animationSettings.AfterEffect = ppAfterEffectDim
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个形状生成之后是否隐藏。*/
function test() {
    let animationSettings = ActiveWindow.Selection.ShapeRange.Item(1).AnimationSettings
    alert(animationSettings.AfterEffect == ppAfterEffectHide)
}
```
