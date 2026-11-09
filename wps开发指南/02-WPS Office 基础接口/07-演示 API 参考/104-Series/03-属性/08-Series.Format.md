# Series.Format

返回对象的线条、填充和效果格式。只读 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartFormat/obj)** 。



## 语法

express.**Format**

express   一个代表 **Series** 对象的变量。

## 类型

ChartFormat

## 示例


```JavaScript
/*本示例将活动演示文稿上第一张幻灯片中第一个图表的第一个系列的前景色设置为红色。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.SeriesCollection(1).Format.Fill.ForeColor.RGB = RGB(255, 0, 0)
    }
}
```


```JavaScript
/*本示例显示第一篇演示文稿上第二张幻灯片中第一个图表的第三个系列线条的粗细。*/
function test() {
    let series = Presentations.Item(1).Slides.Item(2).Shapes.Item(1)
    alert(series.Chart.SeriesCollection(3).Format.Line.Weight + "磅")
}
```
