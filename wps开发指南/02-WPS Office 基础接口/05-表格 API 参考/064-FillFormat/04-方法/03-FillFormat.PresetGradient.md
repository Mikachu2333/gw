# FillFormat.PresetGradient

将指定填充设为一个预设的渐变。



## 语法

express.**PresetGradient(Style, Variant, PresetGradientType)**

express   一个代表 **FillFormat** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Style | 必选 | MsoGradientStyle | 渐变样式。 |
| Variant | 必选 | number（int 精度） | 渐变变量。取值范围为 1 到 4 之间，分别与“填充效果”对话框中“渐变”选项卡上的四个渐变变量相对应。如果 GradientStyle 设为 msoGradientFromCenter，则 Variant 参数只能设为 1 或 2。 |
| PresetGradientType | 必选 | MsoPresetGradientType | 预设渐变类型。 |

## 返回值

void

## 示例


```JavaScript
/*本示例使用预设的渐变样式填充第一张工作表中第一个形状。*/
function test() {
    let fillFormat = Application.Worksheets.Item(1).Shapes.Item(1).Fill
    fillFormat.PresetGradient(msoGradientHorizontal, 3, msoGradientFog)
}
```


```JavaScript
/*本示例在活动工作表中添加一个矩形，然后使用预设的渐变样式填充矩形。*/
function test() {
    let fillFormat = ActiveSheet.Shapes.AddShape(msoShapeRectangle, 100, 100, 100, 50).Fill
    fillFormat.PresetGradient(msoGradientVertical, 1, msoGradientBrass)
}
```
