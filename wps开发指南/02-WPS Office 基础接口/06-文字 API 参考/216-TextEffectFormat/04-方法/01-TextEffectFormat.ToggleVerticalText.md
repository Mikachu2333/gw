# TextEffectFormat.ToggleVerticalText

将指定的艺术字中的文字排列从水平切换为垂直，反之亦然。



## 语法

express.**ToggleVerticalText()**

express   一个代表 **TextEffectFormat** 对象的变量。

## 返回值

void

## 说明


可用 **ToggleVerticalText** 方法交换代表艺术字的 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/obj)** 对象的 **Width** 和 **Height** 属性的值并保持 **Left** 和 **Top** 属性不变。

 **Shape** 对象的 **Flip** 方法和 **Rotation** 属性以及 **TextEffectFormat** 对象的 **RotatedChars** 属性和 **ToggleVerticalText** 方法都会影响代表艺术字的 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/obj)** 对象中的字符方向和文字排列方向。若要获得预期效果，可能需要进行多次尝试，以便找出组合使用这些属性和方法的效果的方式。



## 示例


```JavaScript
/*本示例将包含文本“Test”的“艺术字”添加到活动文档中，并将文字由横排（指定“艺术字”样式的默认值，即 **msoTextEffect1**）转换为纵排。*/
function test() {
    let newWordArt = ActiveDocument.Shapes.AddTextEffect(msoTextEffect1, "Test", "Arial Black", 36, msoFalse, msoFalse, 100, 100)
    newWordArt.TextEffect.ToggleVerticalText()
}
```


```JavaScript
/*本示例将第一个文档中第一个形状（艺术字）的文字排列从水平切换为垂直。*/
function test() {
    let shape = Documents.Item(1).Shapes.Item(1)
    shape.TextEffect.ToggleVerticalText()
}
```
