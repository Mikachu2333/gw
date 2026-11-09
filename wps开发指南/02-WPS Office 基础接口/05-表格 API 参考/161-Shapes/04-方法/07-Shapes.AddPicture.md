# Shapes.AddPicture

现有文件创建图片。返回一个代表新图片的 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/obj)** 对象。



## 语法

express.**AddPicture(Filename, LinkToFile, SaveWithDocument, Left, Top, Width, Height)**

express   一个代表 **Shapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Filename | 必选 | string | 要在其中创建 OLE 对象的文件。 |
| LinkToFile | 必选 | MsoTriState | 要链接至的文件。 使用 msoFalse 使图片成为文件的独立副本。 使用 msoTrue 将图片链接到从中创建图片的文件。 |
| SaveWithDocument | 必选 | MsoTriState | 将图片与文档一起保存。 使用 msoFalse 仅存储文档中的链接信息。 使用 msoTrue 将链接图片与插入到的文档一起保存。 如果 LinkToFile 为 msoFalse，则此参数必须为 msoTrue。 |
| Left | 必选 | number（float 精度） | 图片左上角相对于文档左上角的位置（以磅为单位）。 |
| Top | 必选 | number（float 精度） | 图片左上角相对于文档顶部的位置（以磅为单位）。 |
| Width | 必选 | number（float 精度） | 图片的宽度（以磅为单位）。 |
| Height | 必选 | number（float 精度） | 图片的高度（以磅为单位）。 |

## 返回值

Shape。

## 示例


```JavaScript
/*本示例向第一张工作表中添加由文件“p1.png”创建的图片。插入的图片链接到创建该图片的文件，并与工作表一起保存。*/
function test() {
    let shapes = Application.Worksheets.Item(1).Shapes
    shapes.AddPicture("D:/Pictures/p1.png", msoTrue, msoTrue, 100, 100, 70, 70)
}
```


```JavaScript
/*本示例向活动工作表中添加由文件“p2.png”创建的图片。图片不随工作表保存，仅保留链接信息，并保留图片原有尺寸。*/
function test() {
    let shapes = ActiveSheet.Shapes
    shapes.AddPicture("D:\\Pictures\\p2.png", msoTrue, msoFalse, 100, 100, -1, -1)
}
```
