# PictureFormat.TransparencyColor

返回或设置指定图片的透明色，以红、绿、蓝（RGB）值表示。 **Long** 类型，可读写。



## 语法

express.**TransparencyColor**

express   一个代表 **PictureFormat** 对象的变量。

## 类型

number（int4 精度）

## 说明


仅当 **[TransparentBackground](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PictureFormat/member/TransparentBackground)** 属性设为 **msoTrue** 时，该属性才会生效。

如果想始终都能透过图片的透明部分看到图片后面的对象，则必须将图片 **[FillFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FillFormat/obj)** 对象的 **[Visible](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FillFormat/member/Visible)** 属性设为 **msoFalse** 。如果图片有透明色且图片的 **FillFormat** 对象的 **Visible** 属性设为 **msoTrue** ，则可以透过透明色看到图片填充效果，但会遮掩图片下面的对象。



## 示例


```JavaScript
/*本示例设置活动文档的第一个形状的透明色。只有在第一个形状是位图时，本示例才有效。*/
function test() {
    let pictureFormat = ActiveDocument.Shapes.Item(1).PictureFormat
    pictureFormat.TransparentBackground = msoTrue
    pictureFormat.TransparencyColor = RGB(0, 0, 255)
    ActiveDocument.Shapes.Item(1).Fill.Visible = msoFalse
}
```


```JavaScript
/*本示例显示所选形状（图片）的透明色是否为白色。*/
function test() {
    let pictureFormat = Selection.ShapeRange.PictureFormat
    pictureFormat.TransparentBackground = msoTrue
    alert(pictureFormat.TransparencyColor == RGB(255, 255, 255))
}
```
