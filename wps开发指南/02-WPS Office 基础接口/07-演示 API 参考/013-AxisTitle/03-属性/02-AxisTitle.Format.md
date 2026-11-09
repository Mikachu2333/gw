# AxisTitle.Format

返回对象的线条、填充和效果格式。只读 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartFormat/obj)** 。



## 语法

express.**Format**

express   一个代表 **AxisTitle** 对象的变量。

## 类型

ChartFormat

## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片中第一个图表的分类轴标题的边框设置为虚线。*/
function test() {
    let axisTitle = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.Axes(xlCategory).AxisTitle
    axisTitle.Format.Line.DashStyle = msoLineDashDotDot
}
```


```JavaScript
/*本示例设置第一个演示文稿的第一张幻灯片上第二个图表的数值轴标题的前景色。*/
function test() {
    let axisTitle = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart.Axes(xlValue).AxisTitle
    axisTitle.Format.Fill.ForeColor.RGB = RGB(0, 255, 255)
}
```
