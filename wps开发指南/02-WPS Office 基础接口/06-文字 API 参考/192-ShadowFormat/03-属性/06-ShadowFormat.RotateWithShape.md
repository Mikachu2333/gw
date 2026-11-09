# ShadowFormat.RotateWithShape

返回或设置一个 **[MsoTriState](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoTriState)** 类型的值，该值代表在旋转形状时是否旋转阴影。可读写。



## 语法

express.**RotateWithShape**

express   一个代表 **ShadowFormat** 对象的变量。

## 类型

MsoTriState

## 示例


```JavaScript
/*本示例设置活动文档中第一个形状的阴影随同形状一起旋转，然后将该形状绕 Z 轴顺时针旋转60度。*/
function test() {
    let shape = ActiveDocument.Shapes.Item(1)
    shape.Shadow.RotateWithShape = msoTrue
    shape.IncrementRotation(60)
}
```


```JavaScript
/*本示例显示所选内容中第一个内嵌形状的阴影是否随同形状一起旋转。*/
function test() {
    alert(Selection.InlineShapes.Item(1).Shadow.RotateWithShape == msoTrue)
}
```
