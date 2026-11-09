# Shapes.AddPicture

在文档中添加一幅图片。返回一个 **Shape** 对象，该对象代表图片并将其添加至 **Shapes** 集合。



## 语法

express.**AddPicture(FileName, LinkToFile, SaveWithDocument, Left, Top, Width, Height, Anchor)**

express   一个代表 **Shapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FileName | 必选 | string | 图片的路径和文件名。 |
| LinkToFile | 可选 | any | 如果该参数值为 **True** ，则将图片链接到创建它的文件。如果该参数值为 **False** ，则将图片作为该文件的独立副本。默认值为 **False** 。 |
| SaveWithDocument | 可选 | any | 如果该参数值为 **True** ，则将链接的图片与文档一起保存。默认值为 **False** 。 |
| Left | 可选 | any | 新图片的左边缘相对于页面的位置，以磅为单位。 |
| Top | 可选 | any | 新图片的上边缘相对于页面的位置，以磅为单位。 |
| Width | 可选 | any | 图片的宽度，以磅为单位。 |
| Height | 可选 | any | 图片的高度，以磅为单位。 |
| Anchor | 可选 | any | 文档中的 **Range** 。 |

## 返回值

Shape

## 示例


```JavaScript
/*本示例向活动文档添加一幅图片。*/
function test() {
    ActiveDocument.Shapes.AddPicture("D:\\示例\\img1.bmp", false, true)
}
```


```JavaScript
/*本示例向第一个文档上所选区域添加一幅图片。*/
function test() {
    Documents.Item(1).Shapes.AddPicture("D:\\示例\\img1.png", true, false, 20, 30, 40, 40, Selection.Range)
}
```
