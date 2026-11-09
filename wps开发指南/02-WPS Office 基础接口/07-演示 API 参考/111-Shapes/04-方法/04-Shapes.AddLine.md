# Shapes.AddLine

创建线条。返回一个代表新线条的 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/obj)** 对象。



## 语法

express.**AddLine(BeginX, BeginY, EndX, EndY)**

express   一个代表 **Shapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| BeginX | 必选 | number（float 精度） | 线条起点相对于幻灯片左边缘的水平位置（以磅为单位）。 |
| BeginY | 必选 | number（float 精度） | 线条起点相对于幻灯片上边缘的垂直位置（以磅为单位）。 |
| EndX | 必选 | number（float 精度） | 线条终点相对于幻灯片左边缘的水平位置（以磅为单位）。 |
| EndY | 必选 | number（float 精度） | 线条终点相对于幻灯片上边缘的垂直位置（以磅为单位）。 |

## 返回值

Shape

## 示例


```JavaScript
/*本示例向活动演示文稿的第一张幻灯片中添加一条蓝色虚线。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let lineFormat = slide.Shapes.AddLine(10, 10, 250, 250).Line
    lineFormat.DashStyle = msoLineDashDotDot
    lineFormat.ForeColor.RGB = RGB(50, 0, 128)
}
```


```JavaScript
/*本示例向第一个演示文稿的第一张幻灯片中添加一条线条，并绕 Z 轴旋转 30 度。*/
function test() {
    let slide = Presentations.Item(1).Slides.Item(1)
    let shape = slide.Shapes.AddLine(50, 50, 100, 100)
    shape.Rotation = 30
}
```
