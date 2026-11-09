# Graphic.CropRight

返回或设置从指定图片或 OLE 对象的右边所裁剪下的磅数。 **Single** 型，可读写。



## 语法

express.**CropRight**

express   一个代表 **Graphic** 对象的变量。

## 类型

number（float 精度）

## 说明


裁剪的计算是同图像的原始尺寸相关的。例如，如果插入一幅原始宽度为 100 磅的图像，将其放大为 200 磅宽，然后设置 **CropRight** 属性为 50, 那么 100 磅（不是 50 磅）将从图像的右边被切除。



## 示例


```JavaScript
/*此示例将第一张工作表中左页脚图片右侧所裁剪下的磅数设置为20磅。*/
function test() {
    let graphic = Worksheets.Item(1).PageSetup.LeftFooterPicture
    graphic.CropRight = 20
}
```


```JavaScript
/*使用此示例可指定从活动工作表中右页脚图片右侧裁去的百分比，并裁剪该图片。*/
function test() {
    let percentToCrop = InputBox("What percentage do you want to crop off the right of this picture?")
    let graphic = ActiveSheet.PageSetup.RightFooterPicture
    let cropPoints = graphic.Width * percentToCrop / 100
    graphic.CropRight = cropPoints
}
```
