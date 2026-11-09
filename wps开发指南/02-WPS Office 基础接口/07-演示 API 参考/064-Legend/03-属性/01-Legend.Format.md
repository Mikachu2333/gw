# Legend.Format

返回对象的线条、填充和效果格式。只读 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartFormat/obj)** 类型。



## 语法

express.**Format**

express   一个代表 **Legend** 对象的变量。

## 类型

ChartFormat

## 示例


```JavaScript
/*本示例设置活动演示文稿的第一张幻灯片上第一个图表中图例的线条的粗细和虚线样式。*/
function test() {
    let legend = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.Legend
    legend.Format.Line.Weight = 1.5
    legend.Format.Line.DashStyle = msoLineDashDotDot
}
```


```JavaScript
/*本示例设置第一个演示文稿的第一张幻灯片上第一个图表的图例的前景填充色。*/
function test() {
    let legend = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.Legend
    legend.Format.Fill.ForeColor.RGB = RGB(255, 0, 0)
}
```
