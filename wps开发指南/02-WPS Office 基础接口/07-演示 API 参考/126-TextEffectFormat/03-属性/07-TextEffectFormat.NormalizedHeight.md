# TextEffectFormat.NormalizedHeight

确定指定艺术字中的字符（无论大小写）高度是否相同。可读/写。



## 语法

express.**NormalizedHeight**

express   一个代表 **TextEffectFormat** 对象的变量。

## 类型

MsoTriState

## 说明


 **NormalizedHeight** 属性的值可以是下列 **MsoTriState** 常量之一：

| 常量           | 说明                        |
| ------------ | ------------------------- |
| **msoFalse** | 指定艺术字中的所有字符（无论大小写）不为同一高度。 |
| **msoTrue**  | 指定艺术字中的所有字符（无论大小写）均为同一高度。 |



## 示例


```JavaScript
/*本示例将包含文字“Test Effect”的艺术字添加到活动演示文稿第一张幻灯片中，并将新艺术字命名为“texteff1”。然后此代码将名为“texteff1”的形状中的所有字符的设为同一高度。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    slide.Shapes.AddTextEffect(msoTextEffect1, "Test Effect", "Courier New", 44, msoTrue, msoFalse, 10, 10).Name = "texteff1"
    slide.Shapes.Item("texteff1").TextEffect.NormalizedHeight = msoTrue
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个（艺术字）形状中的字符（无论大小写）高度是否相同。*/
function test() {
    let textEffectFormat = ActiveWindow.Selection.ShapeRange.Item(1).TextEffect
    alert(textEffectFormat.NormalizedHeight == msoTrue)
}
```
