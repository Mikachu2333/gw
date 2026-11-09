# Shapes.AddPicture

从现有文件创建图片。返回一个代表新图片的 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/obj)** 对象。



## 语法

express.**AddPicture(FileName, LinkToFile, SaveWithDocument, Left, Top, Width, Height)**

express   一个代表 **Shapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FileName | 必选 | string | 要在其中创建 OLE 对象的文件 |
| LinkToFile | 必选 | MsoTriState | 确定是否将图片链接到从中创建该图片的文件。 |
| SaveWithDocument | 必选 | MsoTriState | 确定是否将已链接的图片与其插入到的文档一起保存。如果 **LinkToFile** 为 **msoFalse** ，则此参数必须为 **msoTrue** 。 |
| Left | 必选 | number（float 精度） | 图片左边缘相对于幻灯片左边缘的位置（以磅为单位）。 |
| Top | 必选 | number（float 精度） | 图片上边缘相对于幻灯片上边缘的位置（以磅为单位）。 |
| Width | 可选 | number（float 精度） | 图片的宽度（以磅为单位）。 |
| Height | 可选 | number（float 精度） | 图片的高度（以磅为单位）。 |

## 返回值

Shape

## 示例


```JavaScript
/*本示例向活动演示文稿的第一张幻灯片中添加由文件"test.png"创建的图片，插入的图片链接到创建该图片的文件，并与文档一起保存。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let filePath = "E:\\test.png"
    slide.Shapes.AddPicture(filePath, msoTrue, msoTrue, 100, 100, 70, 70)
}
```


```JavaScript
/*本示例向第一个演示文稿的第一张幻灯片中添加由文件"example.jpg"创建的图片，并复制。*/
function test() {
    let slide = Presentations.Item(1).Slides.Item(1)
    let shape = slide.Shapes.AddPicture("E:\\example.jpg", msoFalse, msoTrue, 200, 200, 100, 100)
    shape.Copy()
}
```
