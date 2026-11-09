# PictureFormat.Contrast

返回或设置指定图片或 OLE 对象的对比度。该属性的值必须是 0.0（最低对比度）到 1.0（最高对比度）的数。可读写。 **Single** 类型。



## 语法

express.**Contrast**

express   一个代表 **PictureFormat** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例为活动文档的第一个形状设置对比度。第一个形状必须是图片或 OLE 对象。*/
function test() {
    let pictureFormat = ActiveDocument.Shapes.Item(1).PictureFormat
    pictureFormat.Contrast = 0.8
}
```


```JavaScript
/*本示例显示第一个文档上第一个内嵌的 OLE 对象的对比度。*/
function test() {
    let pictureFormat = Documents.Item(1).InlineShapes.Item(1).PictureFormat
    alert(pictureFormat.Contrast)
}
```
