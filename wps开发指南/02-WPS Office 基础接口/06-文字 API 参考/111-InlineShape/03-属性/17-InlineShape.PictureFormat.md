# InlineShape.PictureFormat

返回一个 **PictureFormat** 对象，该对象包含内嵌形状的图片格式属性。只读。



## 语法

express.**PictureFormat**

express   一个代表 **InlineShape** 对象的变量。

## 类型

PictureFormat

## 说明


适用于代表图片或 OLE 对象的 **InlineShape** 对象。



## 示例


```JavaScript
/*本示例设置活动文档中第二个内嵌图片的亮度。*/
function test() {
    ActiveDocument.InlineShapes.Item(2).PictureFormat.IncrementBrightness(0.1)
}
```


```JavaScript
/*本示例将选中的第二个内嵌图片设置为灰度显示。*/
function test() {
    let inlineShape = Selection.InlineShapes.Item(2)
    inlineShape.PictureFormat.ColorType = msoPictureGrayscale
}
```
