# DisplayUnitLabel.Format

返回对象的线条、填充和效果格式。只读 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartFormat/obj)** 。



## 语法

express.**Format**

express   一个代表 **DisplayUnitLabel** 对象的变量。

## 类型

ChartFormat

## 示例


```JavaScript
/*本示例设置活动演示文稿的第一张幻灯片上第一个图表的数值轴的单位标签的前景填充色。*/
function test() {
    let displayUnitLabel = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.Axes(xlValue).DisplayUnitLabel
    displayUnitLabel.Format.Fill.ForeColor.RGB = RGB(0, 128, 128)
}
```


```JavaScript
/*本示例设置第一个演示文稿的第一张幻灯片上第一个图表的数值轴的单位标签的线条虚线样式。*/
function test() {
    let displayUnitLabel = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.Axes(xlValue).DisplayUnitLabel
    displayUnitLabel.Format.Line.DashStyle = msoLineDashDotDot
}
```
