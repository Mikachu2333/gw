# Crop 对象

一个用于去除图像的某一部分的对象。


## 示例


```JavaScript
/*本示例运行于演示组件，将一个 200 x 200 的图像插入到活动演示文稿的第一张幻灯片中，然后在图像框内部将该图像的大小调整为 100 x 100。图像框保持 200 x 200 大小。接着代码在紧邻该图像右上方的位置添加一个正方形（默认形状），基本上将该图像的左下角裁剪掉。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.AddPicture("D:\\示例\\img1.png", msoFalse, msoTrue, 255, 150, 200, 200)
    shape.PictureFormat.Crop.PictureHeight = 100
    shape.PictureFormat.Crop.PictureWidth = 100
    shape.PictureFormat.Crop.PictureOffsetX = 0
    shape.PictureFormat.Crop.PictureOffsetY = 0
    shape.PictureFormat.Crop.ShapeHeight = 100
    shape.PictureFormat.Crop.ShapeWidth = 100
    shape.PictureFormat.Crop.ShapeLeft = 330
    shape.PictureFormat.Crop.ShapeTop = 170
}
```


```JavaScript
/*本示例运行于演示组件，设置活动演示文档的第一张幻灯片中第一个要裁剪的图片的形状的高度、宽度、左侧的位置和顶部的位置。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    shape.PictureFormat.Crop.ShapeHeight = 100
    shape.PictureFormat.Crop.ShapeWidth = 100
    shape.PictureFormat.Crop.ShapeLeft = 50
    shape.PictureFormat.Crop.ShapeTop = 60
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [PictureHeight](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/Crop/member/PictureHeight) | 获取或设置要裁剪的图像的高度。可读/写。 |
| [PictureOffsetX](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/Crop/member/PictureOffsetX) | 获取或设置要裁剪的图像的 x 轴的偏移量。可读/写。 |
| [PictureOffsetY](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/Crop/member/PictureOffsetY) | 获取或设置要裁剪的图像的 y 轴的偏移量。可读/写。 |
| [PictureWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/Crop/member/PictureWidth) | 获取或设置要裁剪的图像的宽度。可读/写。 |
| [ShapeHeight](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/Crop/member/ShapeHeight) | 获取或设置用于裁剪图像的形状的高度。可读/写。 |
| [ShapeLeft](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/Crop/member/ShapeLeft) | 获取或设置用于裁剪图像的形状左侧的位置。可读/写。 |
| [ShapeTop](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/Crop/member/ShapeTop) | 获取或设置用于裁剪图像的形状顶部的位置。可读/写。 |
| [ShapeWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/Crop/member/ShapeWidth) | 获取或设置用于裁剪图像的形状的宽度。可读/写。 |