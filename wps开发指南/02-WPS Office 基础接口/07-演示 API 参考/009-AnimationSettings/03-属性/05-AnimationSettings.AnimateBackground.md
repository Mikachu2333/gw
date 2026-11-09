# AnimationSettings.AnimateBackground

如果指定的对象是自选图形，若该形状独立于其所包含的文本单独显示动画，则值为 **msoTrue** 。可读/写 。



## 语法

express.**AnimateBackground**

express   一个代表 **AnimationSettings** 对象的变量。

## 类型

MsoTriState

## 说明


使用 **[TextLevelEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationSettings/member/TextLevelEffect)** 和 **[TextUnitEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationSettings/member/TextUnitEffect)** 属性可以控制附加到指定形状的文本的动画效果。

如果指定的形状是图形对象，若指定的图形对象的背景（坐标轴和网格线）被赋予动画效果，则值为 **msoTrue** 。仅适用于图形对象或带有经多个步骤才能显示的文本的自选图形。

如果将该属性设置为 **msoTrue** 并将 **TextLevelEffect** 属性设置为 **ppAnimateByAllLevels** ，则形状及其文本将被同时赋予动画效果。如果将该属性设置为 **msoTrue** 并将 **TextLevelEffect** 属性设置为除 **ppAnimateByAllLevels** 之外的值，则形状将在文本被赋予动画效果之前直接被赋予动画效果。

除非为指定形状赋予动画效果，否则看不到设置该属性的效果。要给一个形状赋予动画效果，必须将 **TextLevelEffect** 属性设置为 **ppAnimateLevelNone** 以外的值，并且将 **[Animate](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationSettings/member/Animate)** 属性设置为 **msoTrue** ，或者将 **[EntryEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationSettings/member/EntryEffect)** 属性设置为除 **ppEffectNone** 之外的常量。

 **AnimateBackground** 属性的值可以是下列 **MsoTriState** 常量之一：

| 常量 | 说明 |
| ---- | ----- |
| **msoFalse** | 指定的形状不独立于其所包含的文本单独显示动画。 |
| **msoTrue**   | 指定的形状独立于其所包含的文本单独显示动画。 |



## 示例


```JavaScript
/*本示例将创建一个包含文本的矩形。本示例还指定该形状应从右下角飞入，应从第一级段落显示文本，并且该形状应独立于其所包含的文本单独显示动画。在本示例中，EntryEffect 属性用于打开动画效果。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.AddShape(msoShapeRectangle, 50, 200, 200, 200)
    shape.TextFrame.TextRange.Text = "Reason 1\rReason 2\rReason 3"
    let animationSettings = shape.AnimationSettings
    animationSettings.EntryEffect = ppEffectFlyFromBottomRight
    animationSettings.TextLevelEffect = ppAnimateByFirstLevel
    animationSettings.TextUnitEffect = ppAnimateByParagraph
    animationSettings.AnimateBackground = msoTrue
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个形状是否独立于其所包含的文本单独显示动画。*/
function test() {
    let animationSettings = ActiveWindow.Selection.ShapeRange.Item(1).AnimationSettings
    alert(animationSettings.AnimateBackground == msoTrue)
}
```
