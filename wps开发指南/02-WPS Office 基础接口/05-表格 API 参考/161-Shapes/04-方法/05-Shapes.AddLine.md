# Shapes.AddLine

当本方法应用于 **Shapes** 对象时，返回一个 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/obj)** 对象，该对象表示工作表中的新线条。



## 语法

express.**AddLine(BeginX, BeginY, EndX, EndY)**

express   一个代表 **Shapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| BeginX | 必选 | number（float 精度） | 线条的起点相对于文档左上角的位置（以磅为单位）。 |
| BeginY | 必选 | number（float 精度） | 线条的起点相对于文档左上角的位置（以磅为单位）。 |
| EndX | 必选 | number（float 精度） | 线条的终点相对于文档左上角的位置（以磅为单位）。 |
| EndY | 必选 | number（float 精度） | 线条的终点相对于文档左上角的位置（以磅为单位）。 |

## 返回值

Shape

## 示例


```JavaScript
/*本示例向第一张工作表添加一条蓝色虚线。*/
function test() {
    let shapes = Application.Worksheets.Item(1).Shapes
    let line = shapes.AddLine(10, 10, 250, 250).Line
    line.DashStyle = msoLineDashDotDot
    line.ForeColor.RGB = RGB(50, 0, 128)
}
```


```JavaScript
/*本示例向活动工作表添加一条带箭头的直线。*/
function test() {
    ActiveSheet.Shapes.AddLine(10, 10, 100, 100).Line.EndArrowheadStyle = msoArrowheadOpen
}
```
