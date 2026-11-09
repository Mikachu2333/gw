# LegendKey.Format

返回对象的线条、填充和效果格式。只读 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartFormat/obj)** 。



## 语法

express.**Format**

express   一个代表 **LegendKey** 对象的变量。

## 类型

ChartFormat

## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片中第一个图表的第一个图例项的图例项标示的填充类型是否为实心填充。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        alert(shape.Chart.Legend.LegendEntries().Item(1).LegendKey.Format.Fill.Type == msoFillSolid)
    }
}
```


```JavaScript
/*本示例设置第一个演示文稿的第一张幻灯片上第一个图表的第二个图例项的图例项标示的阴影透明度。*/
function test() {
    let legendEntries = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.Legend.LegendEntries()
    legendEntries.Item(2).LegendKey.Format.Shadow.Transparency = 0
}
```
