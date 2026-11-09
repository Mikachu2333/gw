# ThreeDFormat.ResetRotation

将延伸部分绕 x 轴和 y 轴的转角重新设置为 0（零）度，从而使延伸部分的前面朝前。本方法并不重新设置绕 z 轴的转角。



## 语法

express.**ResetRotation()**

express   一个代表 **ThreeDFormat** 对象的变量。

## 返回值

void

## 说明


要将延伸部分绕 X 轴和 Y 轴的转角设置为 0（零）度之外的任意数，请使用 **[ThreeDFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ThreeDFormat/obj)** 对象的 **[RotationX](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ThreeDFormat/member/RotationX)** 和 **[RotationY](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ThreeDFormat/member/RotationY)** 属性。要设置延伸部分绕 Z 轴的转角，请使用表示延伸形状的 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/obj)** 对象的 **[Rotation](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/Rotation)** 属性。



## 示例


```JavaScript
/*此示例将第一张工作表上第一个形状的延伸部分绕 x 轴和 y 轴的转角重设为 0（零）度。*/
function test() {
    let worksheet = Worksheets.Item(1)
    worksheet.Shapes.Item(1).ThreeD.ResetRotation()
}
```


```JavaScript
/*本示例将活动工作表第三个形状的延伸部分绕 x 轴和 y 轴的转角重设为 0（零）度。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(3)
    shape.ThreeD.ResetRotation()
}
```
