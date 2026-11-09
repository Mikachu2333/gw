# TextEffectFormat.RotatedChars

如果指定的艺术字中的字符相对于艺术字边框形状旋转 90 度，则该属性值为 **msoTrue** 。如果指定的艺术字中的字符相对于边框形状保持原来的方向，则该属性值为 **msoFalse** 。 **MsoTriState** 类型，可读写。



## 语法

express.**RotatedChars**

express   一个代表 **TextEffectFormat** 对象的变量。

## 类型

MsoTriState

## 说明


如果艺术字有水平排列的文字，则将 **RotatedChars** 属性设置为 **msoTrue** 可使字符逆时针旋转 90 度。如果艺术字有垂直排列的文字，则将 **RotatedChars** 属性设置为 **msoFalse** 可使字符顺时针旋转 90 度。可用 **ToggleVerticalText** 方法切换文字的水平和垂直排列。

 **Shape** 对象的 **Flip** 方法和 **Rotation** 属性以及 **TextEffectFormat** 对象的 **RotatedChars** 属性和 **ToggleVerticalText** 方法都会影响代表艺术字的 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/obj)** 对象中的字符方向和文字排列方向。您可能需要多次试验，才能结合这些属性和方法的效果，以获得所需的结果。



## 示例


```JavaScript
/*本示例向活动文档中添加带有“Test”文本的艺术字，并将字符逆时针旋转 90 度。*/
function test() {
    let newWordArt = ActiveDocument.Shapes.AddTextEffect(msoTextEffect1, "Test", "Arial Black", 36, msoFalse, msoFalse, 10, 10)
    newWordArt.TextEffect.RotatedChars = msoTrue
}
```


```JavaScript
/*本示例将选中的第一个图形（需要是艺术字对象）的竖排文字顺时针旋转90度。*/
function test() {
    Selection.ShapeRange.Item(1).TextEffect.RotatedChars = msoFalse
}
```
