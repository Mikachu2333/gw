# Chart.Legend

返回图表的图例。只读 **[Legend](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Legend/obj)** 。



## 语法

express.**Legend**

express   一个代表 **Chart** 对象的变量。

## 类型

Legend

## 示例


```JavaScript
/*本示例对活动演示文稿的第一张幻灯片的第一个图表应用图例，然后将图例字体颜色设置为蓝色。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.HasLegend = true
        shape.Chart.Legend.Font.Color = RGB(0, 0, 255)
    }
}
```


```JavaScript
/*本示例判断如果第一个演示文稿的第一张幻灯片的第二个图表的图例可见，则将图例字号设置为12磅。*/
function test() {
    let chart = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart
    if (chart.HasLegend) {
        chart.Legend.Font.Size = 12
    }
}
```
