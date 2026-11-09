# PictureFormat.TransparencyColor

返回或设置指定图片的透明色，以红-绿-蓝 (RGB) 值表示。必须将 **TransparentBackground** 属性设置为 **True** ，该属性才有效。仅应用于位图。 **Long** 类型，可读写。



## 语法

express.**TransparencyColor**

express   一个代表 **PictureFormat** 对象的变量。

## 类型

number（int4 精度）

## 说明


如果想透过图片的透明部分始终看到图片后面的对象，必须将图片的 **FillFormat** 对象的 **Visible** 属性设为 **False** 。如果图片有透明颜色且 **FillFormat** 对象的 **Visible** 属性被设为 **True** ，则图片的填充可以透过透明颜色看到，但图片后面的对象将难以看到。



## 示例


```JavaScript
/*本例将第一张工作表的第一个形状中带有 RGB 值的颜色设置为透明色，该颜色由 RGB(0, 0, 255) 函数返回。要使本示例执行，第一个形状必须是位图。*/
function test() {
    let blueScreen = RGB(0, 0, 255)
    let worksheet = Worksheets.Item(1)
    let shape = worksheet.Shapes.Item(1)
    let pictureFormat = shape.PictureFormat
    pictureFormat.TransparentBackground = true
    pictureFormat.TransparencyColor = blueScreen
    shape.Fill.Visible = false
}
```


```JavaScript
/*本示例显示活动工作表的第二个形状图片的透明色是否为红色。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(2)
    shape.PictureFormat.TransparentBackground = true
    alert(shape.PictureFormat.TransparencyColor == RGB(255, 0, 0))
}
```
