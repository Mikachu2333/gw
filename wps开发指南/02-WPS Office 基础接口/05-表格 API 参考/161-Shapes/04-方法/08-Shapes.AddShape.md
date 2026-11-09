# Shapes.AddShape

返回一个 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/obj)** 对象，该对象表示工作表中的新自选形状。



## 语法

express.**AddShape(Type, Left, Top, Width, Height)**

express   一个代表 **Shapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Type | 必选 | MsoAutoShapeType | 指定要创建的自选形状的类型。 |
| Left | 必选 | number（float 精度） | 自选形状边框的左上角相对于文档左上角的位置（以磅为单位）。 |
| Top | 必选 | number（float 精度） | 自选形状边框的左上角相对于文档顶部的位置（以磅为单位）。 |
| Width | 必选 | number（float 精度） | 自选形状边框的宽度（以磅为单位）。 |
| Height | 必选 | number（float 精度） | 自选形状边框的高度（以磅为单位）。 |

## 返回值

Shape。

## 说明


要更改已添加的自选形状的类型，请设置 **AutoShapeType** 属性。



## 示例


```JavaScript
/*本示例向第一张工作表中添加矩形。*/
function test() {
    Application.Worksheets.Item(1).Shapes.AddShape(msoShapeRectangle, 50, 50, 100, 200)
}
```


```JavaScript
/*本示例将十字添加到活动工作表中，然后将其边框设置为8磅厚和红色。*/
function test() {
    let shapes = ActiveSheet.Shapes
    let shape = shapes.AddShape(msoShapeCross, 10, 10, 50, 70)
    shape.Line.Weight = 8
    shape.Line.ForeColor.RGB = RGB(255, 0, 0)
}
```
