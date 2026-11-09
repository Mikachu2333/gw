# Shapes.AddLine

在绘图画布上添加一条直线。



## 语法

express.**AddLine(BeginX, BeginY, EndX, EndY, Anchor)**

express   一个代表 **Shapes** 对象的变量。

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
/*本示例在活动文档上添加一条紫色带菱形箭头的直线。*/
function test() {
    let lineFormat = ActiveDocument.Shapes.AddLine(25, 25, 150, 150).Line
    lineFormat.BeginArrowheadStyle = msoArrowheadDiamond
    lineFormat.BeginArrowheadWidth = msoArrowheadWide
    lineFormat.ForeColor.RGB = RGB(150, 0, 255)
}
```


```JavaScript
/*本示例向第一个文档添加一条带三角形箭头的直线。*/
function test() {
    Documents.Item(1).Shapes.AddLine(150, 10, 100, 200).Line.EndArrowheadStyle = msoArrowheadTriangle
}
```
