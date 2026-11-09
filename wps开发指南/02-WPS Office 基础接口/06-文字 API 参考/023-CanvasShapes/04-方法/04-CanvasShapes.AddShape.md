# CanvasShapes.AddShape

在绘图画布上添加一个自选图形。返回一个代表该自选图形的 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/obj)** 对象。



## 语法

express.**AddShape(Type, Left, Top, Width, Height)**

express   一个代表 **CanvasShapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Type | 必选 | number（int4 精度） | 要返回的形状类型。可以是任何 **MsoAutoShape** 常量。 |
| Left | 必选 | number（float 精度） | 自选图形左边缘的位置（以磅为单位）。 |
| Top | 必选 | number（float 精度） | 自选图形上边缘的位置（以磅为单位）。 |
| Width | 必选 | number（float 精度） | 自选图形的宽度（以磅为单位）。 |
| Height | 必选 | number（float 精度） | 自选图形的高度（以磅为单位）。 |

## 返回值

Shape

## 说明


要改变所添加的自选图形类型，可设置其 **AutoShapeType** 属性。



## 示例


```JavaScript
/*本示例在活动文档中创建新的绘图画布，并在绘图画布上添加一个圆形。*/
function test() {
    // Add a new drawing canvas to the active document
    let shape = ActiveDocument.Shapes.AddCanvas(100, 75, 150, 200)

    // Add a circle to the drawing canvas
    let shepe1 = shape.CanvasItems.AddShape(msoShapeOval, 25, 25, 150, 150)
}
```


```JavaScript
/*本示例在活动文档上第一张绘图画布中添加一个矩形，然后设置该矩形的前景填充色。*/
function test() {
    let shape = ActiveDocument.Shapes.Item(1).CanvasItems.AddShape(msoShapeRectangle, 20, 30, 40, 20)
    shape.Fill.ForeColor.RGB = RGB(0, 255, 0)
}
```
