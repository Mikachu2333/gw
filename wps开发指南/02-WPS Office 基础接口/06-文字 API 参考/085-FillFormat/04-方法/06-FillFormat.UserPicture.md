# FillFormat.UserPicture

用一张大图像填充指定的形状。



## 语法

express.**UserPicture(PictureFile)**

express   一个代表 **FillFormat** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| PictureFile | 必选 | string | 图片文件名。 |

## 返回值

void

## 说明


如果要用一张图像的平铺形式来填充形状，请使用 **[UserTextured](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FillFormat/member/UserTextured)** 方法。



## 示例


```JavaScript
/*本示例将两个矩形添加到活动文档中。左侧的矩形用“img1.bmp”图片的大图形来填充；右侧的矩形用“img1.bmp”图片的平铺形式来填充。*/
function test() {
    let shapes = ActiveDocument.Shapes
    shapes.AddShape(msoShapeRectangle, 0, 0, 200, 100).Fill.UserPicture("D:\\示例\\img1.bmp")
    shapes.AddShape(msoShapeRectangle, 300, 0, 200, 100).Fill.UserTextured("D:\\示例\\img1.bmp")
}
```


```JavaScript
/*本示例使用指定图片的大图形填充第一个文档上第一个内嵌形状。*/
function test() {
    let fillFormat = Documents.Item(1).InlineShapes.Item(1).Fill
    fillFormat.UserPicture("D:\\示例\\img1.png")
}
```
