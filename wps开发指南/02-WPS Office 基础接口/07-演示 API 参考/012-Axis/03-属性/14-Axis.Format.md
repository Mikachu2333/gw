# Axis.Format

返回对象的线条、填充和效果格式。只读 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartFormat/obj)** 。



## 语法

express.**Format**

express   一个代表 **Axis** 对象的变量。

## 类型

ChartFormat

## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片中第一张图表的数值轴的背景填充色设置为绿色。*/
function test() {
    let axis = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.Axes(xlValue)
    axis.Format.Fill.BackColor.RGB = RGB(0, 255, 0)
}
```


```JavaScript
/*本示例将第一篇演示文稿的第一张幻灯片中第二张图表的类别轴的线条宽度设置为 3 磅。*/
function test() {
    let axis = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart.Axes(xlCategory)
    axis.Format.Line.Weight = 3
}
```
