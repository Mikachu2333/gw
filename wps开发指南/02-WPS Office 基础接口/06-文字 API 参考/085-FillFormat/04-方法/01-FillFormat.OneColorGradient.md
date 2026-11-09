# FillFormat.OneColorGradient

将指定填充设置为单色渐变。



## 语法

express.**OneColorGradient(Style, Variant, Degree)**

express   一个代表 **FillFormat** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Style | 必选 | MsoGradientStyle | 渐变样式。可以是任意 **MsoGradientStyle** 常量（msoGradientFromTitle 除外，它仅应用于 WPP）。 |
| Variant | 必选 | number（int4 精度） | 渐变变量。取值范围为从 1 到 4，对应于 **“填充效果”** 对话框中 **“渐变”** 选项卡上的四种变形。如果 Style 为 **msoGradientFromCenter** ，则该参数可为 1 或 2。 |
| Degree | 必选 | number（float 精度） | 渐变深度。值的范围从 0.0（深）到 1.0（浅）。 |

## 返回值

void

## 示例


```JavaScript
/*本示例在活动文档中添加一个具有单色渐变填充效果的矩形。*/
function test() {
    let fillFormat = ActiveDocument.Shapes.AddShape(msoShapeRectangle, 90, 90, 90, 80).Fill
    fillFormat.ForeColor.RGB = RGB(0, 128, 128)
    fillFormat.OneColorGradient(msoGradientHorizontal, 1, 1)
}
```


```JavaScript
/*本示例将第一个文档上第一个内嵌形状的填充设置为单色渐变。*/
function test() {
    let fillFormat = Documents.Item(1).InlineShapes.Item(1).Fill
    fillFormat.OneColorGradient(msoGradientFromCenter, 2, 0)
}
```
