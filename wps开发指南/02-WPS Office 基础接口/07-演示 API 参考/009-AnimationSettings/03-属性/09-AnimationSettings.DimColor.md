# AnimationSettings.DimColor

返回或设置一个 **[ColorFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ColorFormat/obj)** 对象，该对象代表指定形状生成后的颜色。只读。



## 语法

express.**DimColor**

express   一个代表 **AnimationSettings** 对象的变量。

## 类型

ColorFormat

## 说明


如果没有达到预期的效果，请检查其他的创建设置。必须将 **AnimationSettings** 对象的 **[TextLevelEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationSettings/member/TextLevelEffect)** 属性设为非 **ppAnimateLevelNone** 的值， **[AfterEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/EffectInformation/member/AfterEffect)** 属性设为 **ppAfterEffectDim** ，且 **[Animate](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationSettings/member/Animate)** 属性设为 **msoTrue** 才能看到 **DimColor** 属性的效果。另外，如果指定形状是要在幻灯片上创建的唯一项目或最后一个项目，则该形状无法变暗。若要更改幻灯片上形状的创建顺序，请使用 **[AnimationOrder](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationSettings/member/AnimationOrder)** 属性。



## 示例


```JavaScript
/*本示例在当前演示文稿中添加一张幻灯片。该幻灯片包含一个标题和一个三项目的列表。本示例设置标题和列表在创建后变暗，并设置它们变暗的颜色。*/
function test() {
    let shapes = ActivePresentation.Slides.Add(2, ppLayoutText).Shapes
    let shape1 = shapes.Item(1)
    shape1.TextFrame.TextRange.Text = "Sample title"
    let animationSettings1 = shape1.AnimationSettings
    animationSettings1.TextLevelEffect = ppAnimateByAllLevels
    animationSettings1.AfterEffect = ppAfterEffectDim
    animationSettings1.DimColor.SchemeColor = ppShadow
    animationSettings1.Animate = msoTrue
    let shape2 = shapes.Item(2)
    shape2.TextFrame.TextRange.Text = "Item one\rItem two"
    let animationSettings2 = shape2.AnimationSettings
    animationSettings2.TextLevelEffect = ppAnimateByFirstLevel
    animationSettings2.AfterEffect = ppAfterEffectDim
    animationSettings2.DimColor.RGB = RGB(100, 150, 130)
    animationSettings2.Animate = msoTrue
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个形状生成后的颜色类型是否为msoColorTypeScheme。*/
function test() {
    let animationSettings = ActiveWindow.Selection.ShapeRange.Item(1).AnimationSettings
    alert(animationSettings.DimColor.Type == msoColorTypeScheme)
}
```
