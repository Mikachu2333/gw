# PictureFormat.ColorType

返回或设置应用于指定图片或 OLE 对象的颜色转换类型。 **MsoPictureColorType** 类型，可读写。



## 语法

express.**ColorType**

express   一个代表 **PictureFormat** 对象的变量。

## 类型

MsoPictureColorType

## 示例


```JavaScript
/*本示例将活动文档中的第一个形状设置为灰度显示。该形状必须是一张图片或一个 OLE 对象。*/
function test() {
    ActiveDocument.Shapes.Item(1).PictureFormat.ColorType = msoPictureGrayscale
}
```


```JavaScript
/*本示例显示第一个文档上第一个内嵌的 OLE 对象的颜色转换类型是否为msoPictureAutomatic。*/
function test() {
    let pictureFormat = Documents.Item(1).InlineShapes.Item(1).PictureFormat
    alert(pictureFormat.ColorType == msoPictureAutomatic)
}
```
