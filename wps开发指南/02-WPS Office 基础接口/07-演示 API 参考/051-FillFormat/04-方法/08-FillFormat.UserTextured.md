# FillFormat.UserTextured

用平铺的小图像填充指定形状。



## 语法

express.**UserTextured(TextureFile)**

express   一个代表 **FillFormat** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| TextureFile | 必选 | string | 图片文件名。 |

## 返回值

void

## 说明


如果要用一个大图像来填充该形状，请使用 **UserPicture** 方法。



## 示例


```JavaScript
/*本示例向活动演示文稿第一张幻灯片中添加了两个矩形。使用 picture1.jpg 图片大图像填充左边的矩形；使用 picture2.jpg 图片平铺的小图像填充右边的矩形。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let shapes = slide.Shapes
    shapes.AddShape(msoShapeRectangle, 0, 0, 200, 100).Fill.UserPicture("D:\\TestFile\\picture1.jpg")
    shapes.AddShape(msoShapeRectangle, 300, 0, 200, 100).Fill.UserTextured("D:\\TestFile\\picture2.jpg")
}
```


```JavaScript
/*本示例判断如果活动窗口选定的第一个形状使用的填充类型为实心填充，则使用 picture1.jpg 图片平铺的小图像填充该形状。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    if (shape.Fill.Type == msoFillSolid) {
        shape.Fill.UserTextured("D:\\TestFile\\picture1.jpg")
    }
}
```
