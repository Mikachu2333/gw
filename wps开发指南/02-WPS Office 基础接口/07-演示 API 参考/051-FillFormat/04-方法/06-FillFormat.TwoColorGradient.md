# FillFormat.TwoColorGradient

设置指定填充为双色渐变。



## 语法

express.**TwoColorGradient(Style, Variant)**

express   一个代表 **FillFormat** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Style | 必选 | MsoGradientStyle | 渐变样式。 |
| Variant | 必选 | number（int 精度） | 渐变变量。取值范围为 1 到 4，对应于 **“形状填充”** 选项卡的 **“渐变”** 子选项卡上的四个渐变变量。如果 *Style* 为 **msoGradientFromTitle** 或 **msoGradientFromCenter** ，则该参数可设为 1 或 2。 |

## 返回值

void

## 说明


*Style* 参数值可以是下列 **MsoGradientStyle** 常量之一：

| 常量 |
| --------------------------------------------- |
| **msoGradientDiagonalDown**                       |
| **msoGradientDiagonalUp**                         |
| **msoGradientFromCenter**                         |
| **msoGradientFromCorner**                         |
| **msoGradientFromTitle**                          |
| **msoGradientHorizontal**                         |
| **msoGradientMixed**                              |
| **msoGradientVertical**                           |



## 示例


```JavaScript
/*本示例向活动演示文稿第一张幻灯片中添加一个具有双色渐变填充效果的矩形，并设置填充的前景色和背景色。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let fillFormat = slide.Shapes.AddShape(msoShapeRectangle, 0, 0, 40, 80).Fill
    fillFormat.ForeColor.RGB = RGB(128, 0, 0)
    fillFormat.BackColor.RGB = RGB(0, 170, 170)
    fillFormat.TwoColorGradient(msoGradientHorizontal, 1)
}
```


```JavaScript
/*本示例向第一篇演示文稿第一个幻灯片中添加梯形，并设置该梯形的填充渐变样式与名为“rect1”的形状的渐变样式一致。“rect1”必须具有渐变填充，本示例才有效。*/
function test() {
    let slide = Presentations.Item(1).Slides.Item(1)
    let shapes = slide.Shapes
    let gradientStyle = shapes.Item("rect1").Fill.GradientStyle
    let fillFormat = shapes.AddShape(msoShapeTrapezoid, 10, 10, 50, 100).Fill
    fillFormat.ForeColor.RGB = RGB(0, 255, 255)
    fillFormat.TwoColorGradient(gradientStyle, 2)
}
```
