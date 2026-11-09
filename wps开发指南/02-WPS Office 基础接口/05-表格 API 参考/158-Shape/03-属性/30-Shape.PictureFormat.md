# Shape.PictureFormat

返回一个 **[PictureFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PictureFormat/obj)** 对象，它包含指定形状的图片格式属性。应用于代表图片或 OLE 对象的 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/obj)** 对象。只读。



## 语法

express.**PictureFormat**

express   一个代表 **Shape** 对象的变量。

## 类型

PictureFormat

## 示例


```JavaScript
/*本示例设置了活动工作表中第一个形状的亮度和对比度。第一个形状必须是图片或 OLE 对象。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(1)
    shape.PictureFormat.Brightness = 0.3
    shape.PictureFormat.Contrast = 0.75
}
```


```JavaScript
/*本示例将第一张工作表中第二个形状颜色转换设置为灰度。第二个形状必须是图片或 OLE 对象。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(2)
    shape.PictureFormat.ColorType = msoPictureGrayscale
}
```
