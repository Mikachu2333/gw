# Shapes.AddTextEffect

创建艺术字对象。返回一个代表新艺术字对象的 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/obj)** 对象。



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
| FontBold | 必选 | MsoTriState | 在艺术字中要加粗的字体。 |
| FontItalic | 必选 | MsoTriState | 在艺术字中要倾斜的字体。 |
| Left | 必选 | number（float 精度） | 艺术字边框左上角相对于文档左上角的位置（以磅为单位）。 |
| Top | 必选 | number（float 精度） | 艺术字边框左上角相对于文档顶部的位置（以磅为单位）。 |

## 返回值

Shape

## 说明


向文档添加艺术字对象时，该对象的高度和宽度将自动根据所指定的文字的大小和数量来设置。



## 示例


```JavaScript
/*本示例向第一张工作表中添加包含文本“Test”的艺术字。*/
function test() {
    Worksheets.Item(1).Shapes.AddTextEffect(msoTextEffect1, "Test", "Arial Black", 36, msoFalse, msoFalse, 10, 10)
}
```


```JavaScript
/*本示例向活动工作表中添加包含文本“Test2”的艺术字，并将其字号再修改为 25 磅。*/
function test() {
    let shape = ActiveSheet.Shapes.AddTextEffect(msoTextEffect17, "Test2", "Arial", 36, msoFalse, msoFalse, 200, 200)
    shape.TextEffect.FontSize = 25
}
```
