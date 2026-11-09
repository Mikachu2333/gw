# Shapes.AddShape

向某文档中添加一个自选图形。返回代表该自选图形的 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/obj)** 对象并将其添加到 **Shapes** 集合。



## 语法

express.**AddShape(Type, Left, Top, Width, Height, Anchor)**

express   一个代表 **Shapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Type | 必选 | number（int4 精度） | 要返回的图形类型。可以是任何 **MsoAutoShapeType** 常量。 |
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
/*本示例向活动文档中添加一个矩形*/
function test() {
    Application.ActiveDocument.Shapes.AddShape(msoShapeRectangle, 100, 100, 100, 100)
}
```


```JavaScript
/*本示例在第一个文档中添加一个椭圆。*/
function test() {
    let shapes = Documents.Item(1).Shapes
    shapes.AddShape(msoShapeOval, 72, 72, 100, 100)
}
```
