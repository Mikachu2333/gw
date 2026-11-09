# FillFormat.Patterned

将指定填充设置为一种图案。



## 语法

express.**Patterned(Pattern)**

express   一个代表 **FillFormat** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Pattern | 必选 | MsoPatternType | 用于指定填充方式的图案。 |

## 返回值

void

## 说明


使用 **[BackColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FillFormat/member/BackColor)** 和 **[ForeColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FillFormat/member/ForeColor)** 属性可设置图案中使用的颜色。

*Pattern* 参数的值可以是 **[MsoPatternType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoPatternType)** 常量之一。



## 示例


```JavaScript
/*本示例将一个带图案填充的椭圆添加到活动演示文稿第一张幻灯片中。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let fillFormat = slide.Shapes.AddShape(msoShapeOval, 60, 60, 80, 40).Fill
    fillFormat.ForeColor.RGB = RGB(128, 0, 0)
    fillFormat.BackColor.RGB = RGB(0, 0, 255)
    fillFormat.Patterned(msoPatternDarkVertical)
}
```


```JavaScript
/*本示例向活动窗口选定的第一张幻灯片中添加一个菱形，并设置该菱形的前景填充色和背景填充色，然后设置其填充图案与名为“rect1”的形状保持一致。*/
function test() {
    let slide = ActiveWindow.Selection.SlideRange.Item(1)
    let shapes = slide.Shapes
    let pattern = shapes.Item("rect1").Fill.Pattern
    let fillFormat = shapes.AddShape(msoShapeDiamond, 10, 10, 50, 100).Fill
    fillFormat.ForeColor.RGB = RGB(0, 255, 0)
    fillFormat.BackColor.RGB = RGB(0, 255, 255)
    fillFormat.Patterned(pattern)
}
```
