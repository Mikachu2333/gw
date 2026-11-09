# Chart.Format

返回 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartFormat/obj)** 对象。只读。



## 语法

express.**Format**

express   一个代表 **Chart** 对象的变量。

## 类型

ChartFormat

## 说明


 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartFormat/obj)** 对象包含图表区的线条、填充和效果格式。



## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片中第一张图表的背景填充色设置为绿色。*/
function test() {
    let chart = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart
    chart.Format.Fill.BackColor.RGB = RGB(0, 255, 0)
}
```


```JavaScript
/*本示例将第一篇演示文稿的第一张幻灯片中第二张图表的线条宽度设置为 3 磅。*/
function test() {
    let chart = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart
    chart.Format.Line.Weight = 3
}
```
