# CanvasShapes.AddLine

在绘图画布上添加一条直线。返回一个代表该直线的 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/obj)** 对象，并将其添加到 **CanvasShapes** 集合。



## 语法

express.**AddLine(BeginX, BeginY, EndX, EndY)**

express   一个代表 **CanvasShapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| BeginX | 必选 | number（float 精度） | 直线起点相对于绘图画布的水平位置（以磅为单位）。 |
| BeginY | 必选 | number（float 精度） | 直线起点相对于绘图画布的垂直位置（以磅为单位）。 |
| EndX | 必选 | number（float 精度） | 直线终点相对于绘图画布的水平位置（以磅为单位）。 |
| EndY | 必选 | number（float 精度） | 直线终点相对于绘图画布的垂直位置（以磅为单位）。 |

## 返回值

Shape

## 说明


若要创建带箭头的直线，请使用 **Line** 属性来设置线条格式。



## 示例


```JavaScript
/*本示例在新绘图画布上添加一条紫色带箭头的直线。*/
function test() {
    //Add new drawing canvas to the active document
    let shape = ActiveDocument.Shapes.AddCanvas(100, 75, 150, 200)

    //Add a line to the drawing canvas
    let shape1 = shape.CanvasItems.AddLine(25, 25, 150, 150)

    //Add an arrow to the line and sets the color to purple
    shape1.Line.BeginArrowheadStyle = msoArrowheadDiamond
    shape1.Line.BeginArrowheadWidth = msoArrowheadWide
    shape1.Line.ForeColor.RGB = RGB(150, 0, 255)
}
```


```JavaScript
/*本示例在第一张绘图画布上添加一条红色的直线。*/
function test() {
    let shape = ActiveDocument.Shapes.Item(1).CanvasItems.AddLine(10, 20, 200, 30)
    shape.Line.BeginArrowheadWidth = msoArrowheadWide
    shape.Line.ForeColor.RGB = RGB(255, 0, 0)
}
```
