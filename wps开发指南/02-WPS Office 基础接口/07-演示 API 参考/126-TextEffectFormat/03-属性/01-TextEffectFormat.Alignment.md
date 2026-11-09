# TextEffectFormat.Alignment

返回或设置指定艺术字的对齐方式。可读/写。



## 语法

express.**Alignment**

express   一个代表 **TextEffectFormat** 对象的变量。

## 类型

MsoTextEffectAlignment

## 说明


 **Alignment** 属性的值可以是下列 **MsoTextEffectAlignment** 常量之一：

| 常量 |
| ---------------------------------------- |
| **msoTextEffectAlignmentCentered**       |
| **msoTextEffectAlignmentLeft**           |
| **msoTextEffectAlignmentMixed**          |
| **msoTextEffectAlignmentRight**          |
| **msoTextEffectAlignmentStretchJustify** |
| **msoTextEffectAlignmentWordJustify**    |
| **msoTextEffectAlignmentLetterJustify**  |



## 示例


```JavaScript
/*本示例在活动演示文稿的第一张幻灯片中添加艺术字对象，然后将艺术字右对齐。*/
function test() {
    let shapes = ActivePresentation.Slides.Item(1).Shapes
    let shape = shapes.AddTextEffect(msoTextEffect1, "Test Text", "Palatino", 54, msoTrue, msoFalse, 100, 50)
    shape.TextEffect.Alignment = msoTextEffectAlignmentRight
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个形状（艺术字）的对齐方式是否为msoTextEffectAlignmentCentered。*/
function test() {
    let textEffectFormat = ActiveWindow.Selection.ShapeRange.Item(1).TextEffect
    alert(textEffectFormat.Alignment == msoTextEffectAlignmentCentered)
}
```
