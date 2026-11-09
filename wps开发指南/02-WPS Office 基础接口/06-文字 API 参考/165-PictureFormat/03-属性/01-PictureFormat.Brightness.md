# PictureFormat.Brightness

返回或设置指定图片或 OLE 对象的亮度。该属性的值必须是 0.0（最暗）到 1.0（最亮）之间的数。可读写。 **Single** 类型。



## 语法

express.**Brightness**

express   一个代表 **PictureFormat** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例设置活动文档中第一个形状的亮度。该形状必须是图片或 OLE 对象。*/
function test() {
    ActiveDocument.Shapes.Item(1).PictureFormat.Brightness = 0.3
}
```


```JavaScript
/*本示例显示第一个文档上第一个内嵌的 OLE 对象的亮度。*/
function test() {
    let pictureFormat = Documents.Item(1).InlineShapes.Item(1).PictureFormat
    alert(pictureFormat.Brightness)
}
```
