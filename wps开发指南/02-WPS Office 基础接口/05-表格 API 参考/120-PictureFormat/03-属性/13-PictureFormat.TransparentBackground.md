# PictureFormat.TransparentBackground

仅应用于位图。MsoTriState 类型，可读写。使用 **TransparencyColor** 属性可设置透明颜色。



## 语法

express.**TransparentBackground**

express   一个代表 **PictureFormat** 对象的变量。

## 类型

MsoTriState

## 说明


| MsoTriState 可以是下列 MsoTriState 常量之一。 |
| ----------------------------------- |
| msoCTrue                            |
| msoFalse                            |
| msoTriStateMixed                    |
| msoTriStateToggle                   |
| msoTrue 图片中定义为透明颜色的部分显示为透明的。        |

图片中定义为透明颜色的颜色部分显示为透明。

如果想透过图片的透明部分始终看到图片后面的对象，必须将图片的 **FillFormat** 对象的 **Visible** 属性设为 **False** 。如果图片有透明颜色且 **FillFormat** 对象的 **Visible** 属性被设为 **True** ，则图片的填充可以透过透明颜色看到，但图片后面的对象将难以看到。



## 示例


```JavaScript
/*本例将第一张工作表的第一个形状中带有 RGB 值的颜色设置为透明色，该颜色由 RGB(0, 24, 240) 函数返回。要使本示例执行，第一个形状必须是位图。*/
function test() {
    let blueScreen = RGB(0, 24, 240)
    let worksheet = Worksheets.Item(1)
    let shape = worksheet.Shapes.Item(1)
    let pictureFormat = shape.PictureFormat
    pictureFormat.TransparentBackground = true
    pictureFormat.TransparencyColor = blueScreen
    shape.Fill.Visible = false
}
```


```JavaScript
/*本示例将活动工作表的第二个形状图片的背景设置为不透明。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(2)
    shape.PictureFormat.TransparentBackground = false
}
```
