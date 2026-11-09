# FillFormat.GradientColorType

返回指定填充的渐变颜色的样式。只读 **MsoGradientColorType** 类型。



## 语法

express.**GradientColorType**

express   一个代表 **FillFormat** 对象的变量。

## 类型

MsoGradientColorType

## 说明


此属性为只读属性。可用 **OneColorGradient** 、 **PresetGradient** 或 **TwoColorGradient** 方法设置填充的渐变类型。



## 示例


```JavaScript
/*本示例将活动文档中所有图形的双色渐变填充更改为预设的渐变填充。*/
function test() {
    let shapes = Application.ActiveDocument.Shapes
    for (let i = 1; i <= shapes.Count; i++) {
        if (shapes.Item(i).Fill.GradientColorType == msoGradientTwoColors) {
            shapes.Item(i).Fill.PresetGradient(msoGradientHorizontal, 1, msoGradientBrass)
        }
    }
}
```


```JavaScript
/*本示例显示第一个文档上第一个内嵌形状的渐变填充的颜色类型是否为msoGradientOneColor。*/
function test() {
    let fillFormat = Documents.Item(1).InlineShapes.Item(1).Fill
    alert(fillFormat.GradientColorType == msoGradientOneColor)
}
```
