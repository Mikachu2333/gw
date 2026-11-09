# PictureFormat.Crop

返回一个 **Crop** 对象，该对象代表指定的 **PictureFormat** 对象的裁剪设置。



## 语法

express.**Crop**

express   一个代表 **PictureFormat** 对象的变量。

## 类型

Crop

## 示例


```JavaScript
/*本示例显示活动工作表的第二个图片要裁剪的高度。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(2)
    alert(shape.PictureFormat.Crop.PictureHeight)
}
```


```JavaScript
/*本示例将第一张工作表的第三个图片要裁剪的宽度设置为300磅。*/
function test() {
    let shape = Worksheets.Item(1).Shapes.Item(3)
    shape.PictureFormat.Crop.PictureWidth = 300
}
```
