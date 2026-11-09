# Shapes.AddTextEffect

创建艺术字对象。返回一个代表新艺术字对象的 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/obj)** 对象。



## 语法

express.**AddTextEffect(PresetTextEffect, Text, FontName, FontSize, FontBold, FontItalic, Left, Top)**

express   一个代表 **Shapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| PresetTextEffect | 必选 | MsoPresetTextEffect | 预置文字效果。 |
| Text | 必选 | string | 艺术字中的文字。 |
| FontName | 必选 | string | 艺术字中所用字体的名称。 |
| FontSize | 必选 | number（float 精度） | 艺术字中所用字体的大小（以磅为单位）。 |
| FontBold | 必选 | MsoTriState | 确定艺术字中使用的字体是否设为粗体。 |
| FontItalic | 必选 | MsoTriState | 确定艺术字中使用的字体是否设为斜体。 |
| Left | 必选 | number（float 精度） | 艺术字边界框左边缘相对于幻灯片左边缘的位置（以磅为单位）。 |
| Top | 必选 | number（float 精度） | 艺术字边界框上边缘相对于幻灯片上边缘的位置（以磅为单位）。 |

## 返回值

Shape

## 说明


向文档添加艺术字对象时，该对象的高度和宽度将自动根据所指定的文字的大小和数量来设置。



## 示例


```JavaScript
/*本示例向活动演示文稿的第一张幻灯片中添加包含文本“Test”的艺术字。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    slide.Shapes.AddTextEffect(msoTextEffect1, "Test", "Arial Black", 36, msoFalse, msoFalse, 10, 10)
}
```


```JavaScript
/*本示例向第一个演示文稿的第二张幻灯片中添加包含文本“example”的艺术字，并选中。*/
function test() {
    let slide = Presentations.Item(1).Slides.Item(2)
    let shape = slide.Shapes.AddTextEffect(msoTextEffect17, "example", "Arial Black", 50, msoTrue, msoTrue, 20, 20)
    shape.Select()
}
```
