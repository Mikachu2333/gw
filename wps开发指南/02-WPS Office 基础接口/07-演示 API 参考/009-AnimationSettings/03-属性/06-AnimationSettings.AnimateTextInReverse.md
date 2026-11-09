# AnimationSettings.AnimateTextInReverse

决定指定形状是否按相反顺序构造。仅应用于具有多个创建步骤的形状（例如，包含列表的形状）。可读/写。



## 语法

express.**AnimateTextInReverse**

express   一个代表 **AnimationSettings** 对象的变量。

## 类型

MsoTriState

## 说明


 **AnimateTextInReverse** 属性的值可以是下列 **MsoTriState** 常量之一：

| 常量 | 说明 |
| ---- | ----- |
| **msoFalse** | 指定形状不按相反顺序生成。 |
| **msoTrue**   | 指定形状按相反顺序生成。 |

指定形状必须被赋予动画效果，您才能看到设置该属性的效果。要给一个形状赋予动画效果，必须将 **AnimationSettings** 对象的 **TextLevelEffect** 属性设置为 **ppAnimateLevelNone** 以外的值，并且 **[Animate](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationSettings/member/Animate)** 属性必须设置为 **msoTrue** 。



## 示例


```JavaScript
/*本示例在当前演示文稿的第一张幻灯片后添加一张幻灯片，然后设置标题文本，并为文本占位符添加三个项的列表，并设置该列表按相反顺序构造。*/
function test() {
    let shapes = ActivePresentation.Slides.Add(2, ppLayoutText).Shapes
    shapes.Item(1).TextFrame.TextRange.Text = "Top Three Reasons"
    let shape2 = shapes.Item(2)
    shape2.TextFrame.TextRange.Text = "Reason 1\rReason 2\rReason 3"
    let animationSettings = shape2.AnimationSettings
    animationSettings.Animate = msoTrue
    animationSettings.TextLevelEffect = ppAnimateByFirstLevel
    animationSettings.AnimateTextInReverse = msoTrue
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个形状是否按相反顺序构造。*/
function test() {
    let animationSettings = ActiveWindow.Selection.ShapeRange.Item(1).AnimationSettings
    alert(animationSettings.AnimateTextInReverse == msoTrue)
}
```
