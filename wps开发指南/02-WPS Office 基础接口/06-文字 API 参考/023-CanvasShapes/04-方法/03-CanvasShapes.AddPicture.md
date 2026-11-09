# CanvasShapes.AddPicture

在绘图画布上添加一幅图片。返回一个 **Shape** 对象，该对象代表图片并将其添加至 **CanvasShapes** 集合。



## 语法

express.**AddPicture(FileName, LinkToFile, SaveWithDocument, Left, Top, Width, Height)**

express   一个代表 **CanvasShapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FileName | 必选 | string | 图片的路径和文件名。 |
| LinkToFile | 可选 | any | 如果为 **True** ，则将图片链接到创建它的文件；如果为 **False** ，则使图片成为该文件的独立副本。默认值为 **False** 。 |
| SaveWithDocument | 可选 | any | 如果为 **True** ，则将链接的图片与文档一起保存。默认值为 **False** 。 |
| Left | 可选 | any | 新图片的左边缘相对于绘图画布的位置（以磅为单位）。 |
| Top | 可选 | any | 新图片的上边缘相对于绘图画布的位置（以磅为单位）。 |
| Width | 可选 | any | 图片的宽度（以磅为单位）。 |
| Height | 可选 | any | 图片的高度（以磅为单位）。 |

## 返回值

Shape

## 示例


```JavaScript
/*本示例在活动文档中新创建的绘图画布上添加一幅图片。*/
function test() {
    // Add a drawing canvas to the active document
    let shape = ActiveDocument.Shapes.AddCanvas(100, 75, 200, 300)
    // Add a graphic to the drawing canvas
    shape.CanvasItems.AddPicture("D:\\示例\\img1.bmp", false, true)
}
```


```JavaScript
/*本示例在第一个文档上第一个绘图画布中添加一副图片。*/
function test() {
    Documents.Item(1).Shapes.Item(1).CanvasItems.AddPicture("D:\\示例\\img1.png", true, true, 10, 20, 200, 220)
}
```
