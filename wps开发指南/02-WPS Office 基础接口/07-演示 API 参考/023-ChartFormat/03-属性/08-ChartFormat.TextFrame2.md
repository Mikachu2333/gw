# ChartFormat.TextFrame2

返回指定图表元素的文本格式。只读 **[TextFrame2](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextFrame2/obj)** 对象。



## 语法

express.**TextFrame2**

express   一个代表 **ChartFormat** 对象的变量。

## 类型

TextFrame2

## 示例


```JavaScript
/*此示例设置第一个演示文稿的第一张幻灯片中第一张图表的图表区的文本框中字体的大小为20。*/
function test() {
    let chartformat = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.ChartArea.Format
    chartformat.TextFrame2.TextRange.Font.Size = 20
}
```


```JavaScript
/*此示例显示活动演示文稿的第一张幻灯片中第一张图表的图表区的文本框方向是否为水平方向。*/
function test() {
    let chartformat = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.ChartArea.Format
    alert(chartformat.TextFrame2.Orientation == msoTextOrientationHorizontal)
}
```
