# Shapes.AddTextEffect

在文档上添加一个“艺术字”形状。返回一个 **Shape** 对象，该对象代表“艺术字”，并将其添加至 **Shapes** 集合。



## 语法

express.**AddTextEffect(PresetTextEffect, Text, FontName, FontSize, FontBold, FontItalic, Left, Top, Anchor)**

express   一个代表 **Shapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| PresetTextEffect | 必选 | MsoPresetTextEffect | 预设的文本效果。 **MsoPresetTextEffect** 常量的值对应于“‘艺术字’库”对话框中所列的格式（按从上到下、从左到右的顺序编号）。 |
| Text | 必选 | string | 艺术字中的文字。 |
| FontName | 必选 | string | 艺术字中所用字体的名称。 |
| FontSize | 必选 | number（float 精度） | 艺术字中所用字体的大小（以磅为单位）。 |
| FontBold | 必选 | MsoTriState | 如果为 **msoTrue** ，则对艺术字字体应用加粗格式。 |
| FontItalic | 必选 | MsoTriState | 如果为 **msoTrue** ，则对艺术字字体应用倾斜格式。 |
| Left | 必选 | number（float 精度） | 艺术字形状左边缘相对于页面左边缘的位置（以磅为单位）。 |
| Top | 必选 | number（float 精度） | 艺术字形状上边缘相对于页面上边缘的位置（以磅为单位）。 |
| Anchor | 可选 | any | 一个代表“艺术字”形状所绑定的文本的 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 对象。如果指定 Anchor，则定位标记将出现在定位区域第一段的开头。如果省略该参数，将自动选定定位区域，并且相对于页面的上边缘和左边缘放置“艺术字”形状。 |

## 返回值

Shape

## 说明


向文档添加艺术字对象时，该对象的高度和宽度将自动根据所指定的文字的大小和数量来设置。



## 示例


```JavaScript
/*本示例在新文档中添加包含文字“Hello, World”的“艺术字”形状。*/
function test() {
    //Add WordArt shape to the shape collection
    Documents.Add().Shapes.AddTextEffect(msoTextEffect20, "Hello, World", "Tahoma", 15, msoTrue, msoFalse, 120, 120)
}
```


```JavaScript
/*本示例在活动文档上所选区域添加包含文本“example”的“艺术字”形状。*/
function test() {
    ActiveDocument.Shapes.AddTextEffect(msoTextEffect15, "example", "黑体", 25, msoTrue, msoTrue, 200, 200, Selection.Range)
}
```
