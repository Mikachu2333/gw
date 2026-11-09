# ChartArea.ClearFormats

清除对象的格式设置。



## 语法

express.**ClearFormats()**

express   一个代表 **ChartArea** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例清除活动演示文稿的第一张幻灯片中第一个图表的图表区域的格式设置。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.ChartArea.ClearFormats()
    }
}
```


```JavaScript
/*本示例判断如果第一个演示文稿的第一张幻灯片上第一张图表的标题为“test”，则清除该图表的图表区的格式设置。*/
function test() {
    let chart = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart
    if (chart.ChartTitle.Text == "test") {
        chart.ChartArea.ClearFormats()
    }
}
```
