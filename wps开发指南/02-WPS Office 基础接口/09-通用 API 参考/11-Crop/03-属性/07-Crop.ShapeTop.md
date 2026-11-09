# Crop.ShapeTop

获取或设置用于裁剪图像的形状顶部的位置。可读/写。



## 语法

express.**ShapeTop**

express   一个代表 **Crop** 对象的变量。

## 类型

number（float 精度）

## 说明


在 WPS 文字中，如果图片或形状已将环绕文字设置为 **“嵌入型”** ， **ShapeLeft** 和 **ShapeTop** 属性就会返回一个错误。



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
/*本示例运行于演示组件，显示活动窗口选定的第一个要裁剪的图像的形状顶部的位置。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    alert(shape.PictureFormat.Crop.ShapeTop)
}
```
