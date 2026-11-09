# FillFormat.GradientColorType

返回指定填充的渐变颜色类型。只读 **MsoGradientColorType** 类型。



## 语法

express.**GradientColorType**

express   一个代表 **FillFormat** 对象的变量。

## 类型

MsoGradientColorType

## 说明


使用 **[OneColorGradient](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FillFormat/member/OneColorGradient)** 、 **[PresetGradient](#TODO)** 或 **[TwoColorGradient](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FillFormat/member/TwoColorGradient)** 方法设置填充的渐变类型。

 **GradientColorType** 属性的值可以是下列 **MsoGradientColorType** 常量之一：

| 常量 |
| ---------------------------------------------------- |
| **msoGradientColorMixed**                                |
| **msoGradientMultiColor**                                |
| **msoGradientOneColor**                                  |
| **msoGradientPresetColors**                              |
| **msoGradientTwoColors**                                 |



## 示例


```JavaScript
/*本示例将活动演示文稿第一张幻灯片中使用内置渐变填充的所有形状的填充更改为预设的渐变填充。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    for (let s = 1; s <= slide.Shapes.Count; s++) {
        if (slide.Shapes.Item(s).Fill.GradientColorType == msoGradientPresetColors) {
            slide.Shapes.Item(s).Fill.PresetGradient(msoGradientHorizontal, 1, msoGradientBrass)
        }
    }
}
```


```JavaScript
/*本示例显示活动窗口中选定的第一个形状填充的渐变颜色类型是否为msoGradientColorMixed。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    alert(shape.Fill.GradientColorType == msoGradientColorMixed)
}
```
