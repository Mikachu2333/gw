# Chart.PlotArea

返回图表的绘图区。只读 **[PlotArea](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PlotArea/obj)** 。



## 语法

express.**PlotArea**

express   一个代表 **Chart** 对象的变量。

## 类型

PlotArea

## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片的第一个图表的绘图区的前景填充色设置为红色。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.PlotArea.Format.Fill.ForeColor.RGB = RGB(255, 0, 0)
    }
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片的第二个图表的绘图区的高度和宽度。*/
function test() {
    let plotArea = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart.PlotArea
    alert(`高为 ${plotArea.Height} 磅\n宽为 ${plotArea.Width} 磅`)
}
```
