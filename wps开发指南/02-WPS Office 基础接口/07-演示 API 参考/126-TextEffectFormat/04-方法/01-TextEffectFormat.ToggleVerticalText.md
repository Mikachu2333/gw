# TextEffectFormat.ToggleVerticalText

将指定的艺术字中的文字排列从水平切换为垂直，或者反过来。



## 语法

express.**ToggleVerticalText()**

express   一个代表 **TextEffectFormat** 对象的变量。

## 返回值

void

## 说明


使用 **ToggleVerticalText** 方法可以交换代表艺术字的 **Shape** 对象的 **Width** 和 **Height** 属性的值，但不改变 **Left** 和 **Top** 属性。

 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/obj)** 对象的 **[Flip](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/Flip)** 方法和 **[Rotation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/Rotation)** 属性以及 **TextEffectFormat** 对象的 **[RotatedChars](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextEffectFormat/member/RotatedChars)** 属性和 **ToggleVerticalText** 方法都会影响代表艺术字的 **Shape** 对象中的字符方向和文字排列方向。可能需要经过试验才能找到组合使用这些属性和方法的最佳方式，从而达到预期效果。



## 示例


```JavaScript
/*本示例向活动演示文稿第一张幻灯片中添加包含“Test”文本的艺术字，并且将水平文字排列（指定艺术字样式的默认值 msoTextEffect1）切换为垂直文字排列。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let shape = slide.Shapes.AddTextEffect(msoTextEffect1, "Test", "Arial Black", 36, msoFalse, msoFalse, 100, 100)
    shape.TextEffect.ToggleVerticalText()
}
```


```JavaScript
/*本示例将活动窗口选定的第一个艺术字中的文字排列从水平文字排列切换为垂直文字排列。*/
function test() {
    let textEffectFormat = ActiveWindow.Selection.ShapeRange.Item(1).TextEffect
    textEffectFormat.ToggleVerticalText()
}
```
