# EffectInformation.AnimateTextInReverse

决定指定形状是否按相反顺序生成。仅应用于可在多个步骤中生成的形状（例如，包含列表的形状）。只读。



## 语法

express.**AnimateTextInReverse**

express   一个代表 **EffectInformation** 对象的变量。

## 类型

MsoTriState

## 说明


 **AnimateTextInReverse** 属性的值可以是下列 **MsoTriState** 常量之一：

| 常量           | 说明            |
| ------------ | ------------- |
| **msoFalse** | 指定形状不按相反顺序生成。 |
| **msoTrue**  | 指定形状按相反顺序生成。  |

指定的形状获得动画效果后，您才能看到设置该属性的效果。若要为某形状设置动画效果，必须将该形状的 **AnimationSettings** 对象的 **TextLevelEffect** 属性设置为除 **ppAnimateLevelNone** 之外的某个值，并且必须将 **[Animate](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationSettings/member/Animate)** 属性设置为 **msoTrue** 。



## 示例


```JavaScript
/*本示例在当前演示文稿的第一张幻灯片后添加一张幻灯片，然后设置标题文本，并为文本占位符添加三个项的列表，并显示文本的动画效果是否按相反顺序生成。*/
function test() {
    let shapes = ActivePresentation.Slides.Add(2, ppLayoutText).Shapes
    shapes.Item(1).TextFrame.TextRange.Text = "Top Three Reasons"
    let shape = shapes.Item(2)
    shape.TextFrame.TextRange.Text = "Reason 1\nReason 2\nReason 3"
    let animationSettings = shape.AnimationSettings
    animationSettings.Animate = msoTrue
    animationSettings.TextLevelEffect = ppAnimateByFirstLevel
    let effectinformation = ActivePresentation.Slides.Item(2).TimeLine.MainSequence.Item(1).EffectInformation
    alert(effectinformation.AnimateTextInReverse == msoTrue)
}
```


```JavaScript
/*本示例显示活动窗口中选定的第一张幻灯片的第二个动画是否按正向顺序生成。*/
function test() {
    let effectInformation = ActiveWindow.Selection.SlideRange.Item(1).TimeLine.MainSequence.Item(2).EffectInformation
    alert(effectInformation.AnimateTextInReverse == msoFalse)
}
```
