# FillFormat.OneColorGradient

将指定填充设为单色渐变。



## 语法

express.**OneColorGradient(Style, Variant, Degree)**

express   一个代表 **FillFormat** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Style | 必选 | MsoGradientStyle | 渐变样式。 |
| Variant | 必选 | number（int 精度） | 渐变变量。取值范围为 1 到 4 之间，分别与“填充效果”对话框中“渐变”选项卡上的四个渐变变量相对应。如果 GradientStyle 设为 msoGradientFromCenter，则 Variant 参数只能设为 1 或 2。 |
| Degree | 必选 | number（float 精度） | 渐变程度。可以为 0.0（暗）到 1.0（亮）之间的值。 |

## 返回值

void

## 示例


```JavaScript
/*本示例将活动工作表中第一个形状设置成具有单色水平渐变填充效果。*/
function test() {
    let fillFormat = ActiveSheet.Shapes.Item(1).Fill
    fillFormat.OneColorGradient(msoGradientHorizontal, 1, 0.5)
}
```


```JavaScript
/*本示例向第一张工作表中添加一个具有单色垂直渐变填充效果的椭圆。*/
function test() {
    let fillFormat = Application.Worksheets.Item(1).Shapes.AddShape(msoShapeOval, 100, 100, 200, 100).Fill
    fillFormat.OneColorGradient(msoGradientVertical, 1, 0.3)
}
```
