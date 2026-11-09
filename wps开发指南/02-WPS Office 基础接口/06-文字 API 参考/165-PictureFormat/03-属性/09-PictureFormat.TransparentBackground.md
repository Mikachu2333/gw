# PictureFormat.TransparentBackground

如果图片中使用透明色定义的部分实际上看似透明，则该属性值为 **msoTrue** 。可以使用 **TransparencyColor** 属性设置透明色。该属性仅应用于位图。 **MsoTriState** 类型，可读写。



## 语法

express.**TransparentBackground**

express   一个代表 **PictureFormat** 对象的变量。

## 类型

MsoTriState

## 说明


如果想始终都能透过图片的透明部分看到图片后面的对象，则必须将图片 **FillFormat** 对象的 **Visible** 属性设置为 **msoFalse** 。如果图片有透明色且图片 **FillFormat** 对象的 **Visible** 属性设置为 **msoTrue** ，则可以透过透明色看到图片填充效果，但图片后面的对象将难以看到。



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
/*本示例显示所选形状（图片）中使用透明色定义的部分是否看似透明。*/
function test() {
    alert(Selection.ShapeRange.PictureFormat.TransparentBackground === msoTrue)
}
```
