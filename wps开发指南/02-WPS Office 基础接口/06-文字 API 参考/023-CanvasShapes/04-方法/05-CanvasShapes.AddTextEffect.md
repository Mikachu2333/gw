# CanvasShapes.AddTextEffect

在绘图画布上添加一个艺术字形状。返回一个表示该艺术字的 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/obj)** 对象。



## 语法

express.**AddTextEffect(PresetTextEffect, Text, FontName, FontSize, FontBold, FontItalic, Left, Top)**

express   一个代表 **CanvasShapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| PresetTextEffect | 必选 | MsoPresetTextEffect | 预设的文本效果。 **MsoPresetTextEffect** 常量的值对应于 **“艺术字库”** 对话框中所列的格式（按从上到下、从左到右的顺序编号）。 |
| Text | 必选 | string | 艺术字中的文字。 |
| FontName | 必选 | string | 艺术字中所用字体的名称。 |
| FontSize | 必选 | number（float 精度） | 艺术字中所用字体的大小（以磅为单位）。 |
| FontBold | 必选 | MsoTriState | 如果为 **msoTrue** ，则将艺术字字体设为加粗；如果为 **msoFalse** ，则将艺术字所用字体设为常规。 |
| FontItalic | 必选 | MsoTriState | 如果为 **msoTrue** ，则将艺术字字体设为倾斜；如果为 **msoFalse** ，则将艺术字所用字体设为常规。 |
| Left | 必选 | number（float 精度） | 艺术字形状左边缘相对于绘图画布左边缘的位置（以磅为单位）。 |
| Top | 必选 | number（float 精度） | 艺术字形状上边缘相对于绘图画布上边缘的位置（以磅为单位）。 |

## 返回值

Shape

## 说明


向文档添加艺术字对象时，该对象的高度和宽度将自动根据所指定的文字的大小和数量来设置。



## 示例


```JavaScript
/*本示例在新文档中添加一个绘图画布，并在绘图画布中插入包含文字“Hello, World”的“艺术字”图形。*/
function test() {
    //Create a new document and add a drawing canvas
    let shape = Documents.Add().Shapes.AddCanvas(100, 100, 150, 50)

    //Add WordArt shape to the drawing canvas
    shape.CanvasItems.AddTextEffect(msoTextEffect20, "Hello, World", "Tahoma", 15, msoTrue, msoFalse, 120, 120)
}
```


```JavaScript
/*本示例在第一个文档上第一个绘图画布中添加一个艺术字形状。*/
function test() {
    Documents.Item(1).Shapes.Item(1).CanvasItems.AddTextEffect(msoTextEffect21, "example", "宋体", 20, msoFalse, msoTrue, 10, 30)
}
```
