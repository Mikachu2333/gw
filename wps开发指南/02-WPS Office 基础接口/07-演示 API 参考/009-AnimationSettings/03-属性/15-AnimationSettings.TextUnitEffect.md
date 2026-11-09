# AnimationSettings.TextUnitEffect

返回或设置一个 **PpTextUnitEffect** 常量，该常量指示指定形状中的文本是按段落、按字或是按字母被赋予动画效果。可读/写。



## 语法

express.**TextUnitEffect**

express   一个代表 **AnimationSettings** 对象的变量。

## 类型

PpTextUnitEffect

## 说明


 **TextUnitEffect** 可以是下列 **PpTextUnitEffect** 常量之一：

| --------------------------------------------- |
| **ppAnimateByCharacter**                          |
| **ppAnimateByParagraph**                          |
| **ppAnimateByWord**                               |
| **ppAnimateUnitMixed**                            |

为使 **TextUnitEffect** 属性设置生效，必须将指定形状的 **[TextLevelEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationSettings/member/TextLevelEffect)** 属性设置为除 **ppAnimateLevelNone** 或 **ppAnimateByAllLevels** 之外的值，并且必须将 **[Animate](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationSettings/member/Animate)** 属性设置为 **msoTrue** 。



## 示例


```JavaScript
/*本示例在当前演示文稿中添加标题幻灯片及标题文本，并将该标题的字母设置为逐个显示。*/
function test() {
    let shape = ActivePresentation.Slides.Add(1, ppLayoutTitleOnly).Shapes.Item(1)
    shape.TextFrame.TextRange.Text = "Sample title"
    let animationSettings = shape.AnimationSettings
    animationSettings.Animate = msoTrue
    animationSettings.TextLevelEffect = ppAnimateByFirstLevel
    animationSettings.TextUnitEffect = ppAnimateByCharacter
    animationSettings.EntryEffect = ppEffectFlyFromLeft
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个形状中的文本是否按段落动画展示文本单元效果。*/
function test() {
    let animationSettings = ActiveWindow.Selection.ShapeRange.Item(1).AnimationSettings
    alert(animationSettings.TextUnitEffect == ppAnimateByParagraph)
}
```
