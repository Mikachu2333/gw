# FillFormat.PresetGradient

将指定填充设置为一个预设的渐变。



## 语法

express.**PresetGradient(Style, Variant, PresetGradientType)**

express   一个代表 **FillFormat** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Style | 必选 | MsoGradientStyle | 渐变样式。可以是任意 **MsoGradientStyle** 常量（ **msoGradientFromTitle** 除外，它仅应用于 WPP）。 |
| Variant | 必选 | number（int4 精度） | 渐变变量。取值范围为从 1 到 4，对应于 **“填充效果”** 对话框中 **“渐变”** 选项卡上的四种变形。如果 _Style_ 为 **msoGradientFromCenter** ，则该参数可为 1 或 2。 |
| PresetGradientType | 必选 | MsoPresetGradientType | 渐变类型。 |

## 返回值

void

## 示例


```JavaScript
/*本示例将一个具有预设渐变填充方式的矩形添至活动文档中。*/
function test() {
    ActiveDocument.Shapes.AddShape(msoShapeRectangle, 90, 90, 140, 80).Fill.PresetGradient(msoGradientHorizontal, 1, msoGradientBrass)
}
```


```JavaScript
/*本示例为活动文档上第一个内嵌形状设置预设渐变填充。*/
function test() {
    let fillFormat = ActiveDocument.InlineShapes.Item(1).Fill
    fillFormat.PresetGradient(msoGradientFromCorner, 3, msoGradientOcean)
}
```
