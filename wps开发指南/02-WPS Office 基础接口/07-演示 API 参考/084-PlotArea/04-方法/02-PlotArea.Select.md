# PlotArea.Select

选择对象。



## 语法

express.**Select()**

express   一个代表 **PlotArea** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例选中活动演示文稿的第一张幻灯片中第一个图表的绘图区。*/
function test() {
    ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.PlotArea.Select()
}
```


```JavaScript
/*本示例判断如果第一个演示文稿的第一张幻灯片上第一个图表的标题为“test”，则选中该图表的绘图区。*/
function test() {
    let chart = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart
    if (chart.ChartTitle.Caption == "test") {
        chart.PlotArea.Select()
    }
}
```
