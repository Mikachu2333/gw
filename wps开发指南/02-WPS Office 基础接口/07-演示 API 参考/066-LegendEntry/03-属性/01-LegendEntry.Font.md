# LegendEntry.Font

返回指定对象的字体。只读 **[ChartFont](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartFont/obj)** 对象。



## 语法

express.**Font**

express   一个代表 **LegendEntry** 对象的变量。

## 类型

ChartFont

## 示例


```JavaScript
/*本示例将第一个演示文稿的第一张幻灯片中第一个图表的第一个图例项的字体设置为斜体。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.Legend.LegendEntries().Item(1).Font.Italic = true
    }
}
```


```JavaScript
/*本示例遍历活动演示文稿的第一张幻灯片中第一个图表的图例项集合，并更改这些图例项的字体颜色。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        let legend = shape.Chart.Legend
        for (let i = 1; i <= legend.LegendEntries().Count; i++) {
            legend.LegendEntries().Item(i).Font.Color = RGB(0, 0, 255)
        }
    }
}
```
