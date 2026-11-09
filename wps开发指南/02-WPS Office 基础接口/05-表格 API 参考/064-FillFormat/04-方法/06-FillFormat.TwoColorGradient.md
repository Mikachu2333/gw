# FillFormat.TwoColorGradient

将指定填充设为双色渐变。



## 语法

express.**TwoColorGradient(Style, Variant)**

express   一个代表 **FillFormat** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Style | 必选 | MsoGradientStyle | 渐变样式。 |
| Variant | 必选 | number（int 精度） | 渐变变量。取值范围为 1 到 4 之间，分别与“填充效果”对话框中“渐变”选项卡上的四个渐变变量相对应。如果 Style 设为 msoGradientFromCenter，则 Variant 参数只能设为 1 或 2。 |

## 返回值

void

## 示例


```JavaScript
/*本示例向活动工作表中添加一个具有双色渐变填充效果的矩形，并设置填充的前景色和背景色。*/
function test() {
    let fillFormat = ActiveSheet.Shapes.AddShape(msoShapeRectangle, 0, 0, 40, 80).Fill
    fillFormat.ForeColor.RGB = RGB(128, 0, 0)
    fillFormat.BackColor.RGB = RGB(0, 170, 170)
    fillFormat.TwoColorGradient(msoGradientHorizontal, 1)
}
```


```JavaScript
/*本示例向第一张工作表中添加一个具有双色水平渐变填充效果的椭圆。*/
function test() {
    let fillFormat = Application.Worksheets.Item(1).Shapes.AddShape(msoShapeOval, 100, 100, 200, 100).Fill
    fillFormat.TwoColorGradient(msoGradientVertical, 2)
}
```
