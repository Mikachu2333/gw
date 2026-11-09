# ErrorBars.Format

返回对象的线条、填充和效果格式。只读 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartFormat/obj)** 。



## 语法

express.**Format**

express   一个代表 **ErrorBars** 对象的变量。

## 类型

ChartFormat

## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片中第一个图表的第一个系列的误差线的线条样式设置为点划线。*/
function test() {
    let errorBars = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(1).ErrorBars
    errorBars.Format.Line.DashStyle = msoLineDashDot
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片中第一个图表的第二个系列的误差线的阴影是否可见。*/
function test() {
    let errorBars = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).ErrorBars
    alert(errorBars.Format.Shadow.Visible == msoTrue)
}
```
