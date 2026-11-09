# FillFormat.TwoColorGradient

将指定填充设为双色渐变。



## 语法

express.**TwoColorGradient(Style, Variant)**

express   一个代表 **FillFormat** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Style | 必选 | MsoGradientStyle | 渐变样式。可以是任意 **MsoGradientStyle** 常量（ **msoGradientFromTitle** 除外，它仅应用于 WPP）。 |
| Variant | 必选 | number（int4 精度） | 渐变变量。取值范围为 1 到 4 之间，分别与 **“填充效果”** 对话框中 **“渐变”** 选项卡上的四个渐变变量相对应。如果 Style 设为 **msoGradientFromCenter** ，则 Variant 参数只能设为 1 或 2。 |

## 返回值

void

## 示例


```JavaScript
/*本示例将一个具有双色渐变填充方式的矩形添加到活动文档中，然后设置填充的背景色和前景色。*/
function test() {
    let fillFormat = ActiveDocument.Shapes.AddShape(msoShapeRectangle, 0, 0, 40, 80).Fill
    fillFormat.TwoColorGradient(msoGradientHorizontal, 1)
    fillFormat.ForeColor.RGB = RGB(128, 0, 0)
    fillFormat.BackColor.RGB = RGB(0, 170, 170)
}
```


```JavaScript
/*本示例将第一个文档上第一个内嵌形状的填充设置为双色渐变。*/
function test() {
    let fillFormat = Documents.Item(1).InlineShapes.Item(1).Fill
    fillFormat.TwoColorGradient(msoGradientFromCorner, 4)
}
```
