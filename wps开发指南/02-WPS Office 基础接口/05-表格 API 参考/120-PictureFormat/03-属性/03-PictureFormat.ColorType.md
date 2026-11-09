# PictureFormat.ColorType

返回或设置应用于指定图片或 OLE 对象的颜色转换类型。 **MsoPictureColorType** 类型，可读写。



## 语法

express.**ColorType**

express   一个代表 **PictureFormat** 对象的变量。

## 类型

MsoPictureColorType

## 示例


```JavaScript
/*本示例通过 MsoPictureColorType 将第一张工作表上的第一个形状的颜色变换类型设置为灰度。第一个形状必须是图片或 OLE 对象。*/
function test() {
    let worksheet = Worksheets.Item(1)
    worksheet.Shapes.Item(1).PictureFormat.ColorType = msoPictureGrayscale
}
```


```JavaScript
/*本示例显示活动工作表的第二个形状图片的颜色转换类型是否为默认颜色转换。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(2)
    alert(shape.PictureFormat.ColorType == msoPictureAutomatic)
}
```
