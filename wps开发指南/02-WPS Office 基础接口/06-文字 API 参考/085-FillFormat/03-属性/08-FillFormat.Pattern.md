# FillFormat.Pattern

返回或设置一个 **MsoPatternType** 常量，该常量代表应用于指定填充或线条的图案。只读。



## 语法

express.**Pattern**

express   一个代表 **FillFormat** 对象的变量。

## 类型

MsoPatternType

## 示例


```JavaScript
/*此示例向活动文档添加一个矩形，并将其填充图案设置为与名为“矩形 1”的形状的填充图案匹配。新矩形的图案与“矩形 1”相同，但颜色不一定相同。图案中使用的颜色是使用 BackColor 和 ForeColor 属性设置的。*/
function test() {
    let pattern = ActiveDocument.Shapes.Item("矩形 1").Fill.Pattern
    let fillFormat = ActiveDocument.Shapes.AddShape(msoShapeRectangle, 100, 100, 120, 80).Fill
    fillFormat.ForeColor.RGB = RGB(128, 0, 0)
    fillFormat.BackColor.RGB = RGB(0, 0, 255)
    fillFormat.Patterned(pattern)
}
```


```JavaScript
/*本示例显示活动文档上第一个内嵌形状的填充图案是否为msoPattern5Percent。*/
function test() {
    let fillFormat = ActiveDocument.InlineShapes.Item(1).Fill
    alert(fillFormat.Pattern == msoPattern5Percent)
}
```
