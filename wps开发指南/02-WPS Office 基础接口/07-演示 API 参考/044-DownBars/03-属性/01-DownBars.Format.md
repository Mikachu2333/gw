# DownBars.Format

返回对象的线条、填充和效果格式。只读 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartFormat/obj)** 。



## 语法

express.**Format**

express   一个代表 **DownBars** 对象的变量。

## 类型

ChartFormat

## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片中第一个图表的第一个图表组的跌柱线的前景色设置为绿色。*/
function test() {
    let downbars = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.ChartGroups(1).DownBars
    downbars.Format.Fill.ForeColor.RGB = RGB(0, 255, 0)
}
```


```JavaScript
/*本示例将第一个演示文稿的第一张幻灯片中第一个图表的第一个图表组的跌柱线的线条设置为点划线。*/
function test() {
    let downbars = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.ChartGroups(1).DownBars
    downbars.Format.Line.DashStyle = msoLineDashDot
}
```
