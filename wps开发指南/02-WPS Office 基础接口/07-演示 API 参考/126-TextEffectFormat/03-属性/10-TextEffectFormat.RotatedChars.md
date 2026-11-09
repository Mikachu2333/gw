# TextEffectFormat.RotatedChars

确定是否将指定艺术字中的字符相对于艺术字边框形状旋转 90 度。可读/写。



## 语法

express.**RotatedChars**

express   一个代表 **TextEffectFormat** 对象的变量。

## 类型

MsoTriState

## 说明


如果艺术字中含有水平文字，将 **RotatedChars** 属性设置为 **msoTrue** 可将该字符逆时针旋转 90 度。如果艺术字中含有垂直文字，将 **RotatedChars** 属性设置为 **msoFalse** 可将该字符顺时针旋转 90 度。使用 **ToggleVerticalText** 方法可在水平文字流和垂直文字流之间切换。

 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/obj)** 对象的 **[Flip](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/Flip)** 方法和 **[Rotation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/Rotation)** 属性以及 **TextEffectFormat** 对象的 **RotatedChars** 属性和 **[ToggleVerticalText](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextEffectFormat/member/ToggleVerticalText)** 方法都会对代表艺术字的 **Shape** 对象中的字符方向和文字排列方向产生影响。可能需要经过试验才能找到组合使用这些属性和方法的最佳方式，从而达到预期效果。

 **RotatedChars** 属性的值可以是下列 **MsoTriState** 常量之一：

| 常量           | 说明                          |
| ------------ | --------------------------- |
| **msoFalse** | 指定艺术字中的字符保持其相对于边框形状的原有方向。   |
| **msoTrue**  | 指定艺术字中的字符相对于艺术字边框形状旋转 90 度。 |



## 示例


```JavaScript
/*本示例向活动演示文稿第一张幻灯片中添加带有“Test”文本的艺术字，并将字符逆时针旋转 90 度。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let shape = slide.Shapes.AddTextEffect(msoTextEffect1, "Test", "Arial Black", 36, msoFalse, msoFalse, 10, 10)
    shape.TextEffect.RotatedChars = msoTrue
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个艺术字中的字符是否相对于艺术字边框形状旋转 90 度。*/
function test() {
    let textEffectFormat = ActiveWindow.Selection.ShapeRange.Item(1).TextEffect
    alert(textEffectFormat.RotatedChars == msoTrue)
}
```
