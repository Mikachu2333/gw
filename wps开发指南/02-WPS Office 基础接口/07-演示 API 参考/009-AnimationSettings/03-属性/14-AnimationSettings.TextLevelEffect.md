# AnimationSettings.TextLevelEffect

设置或返回一个 **PpTextLevelEffect** 常量，该常量表示指定形状中的文本是否由第一级段落、第二级段落或其他级段落（最高为第五级段落）激活动画显示。可读/写。



## 语法

express.**TextLevelEffect**

express   一个代表 **AnimationSettings** 对象的变量。

## 类型

PpTextLevelEffect

## 说明


要使 **TextLevelEffect** 属性生效，必须将 **[Animate](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationSettings/member/Animate)** 属性设置为 **msoTrue** 。

TextLevelEffect 属性的值可以是下列 PpTextLevelEffect 常量之一：

| 常量 |
| ----------------------------------------------- |
| **ppAnimateByAllLevels**                            |
| **ppAnimateByFifthLevel**                           |
| **ppAnimateByFirstLevel**                           |
| **ppAnimateByFourthLevel**                          |
| **ppAnimateBySecondLevel**                          |
| **ppAnimateByThirdLevel**                           |
| **ppAnimateLevelMixed**                             |
| **ppAnimateLevelNone**                              |



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
/*本示例显示活动窗口选定的第一个形状激活动画的文本段落级别是否为ppAnimateByAllLevels。*/
function test() {
    let animationSettings = ActiveWindow.Selection.ShapeRange.Item(1).AnimationSettings
    alert(animationSettings.TextLevelEffect == ppAnimateByAllLevels)
}
```
