# ChartArea.Select

选择对象。



## 语法

express.**Select()**

express   一个代表 **ChartArea** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例选中活动演示文稿的第一张幻灯片中第一个图表的图表区。*/
function test() {
    let chartArea = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.ChartArea
    chartArea.Select()
}
```


```JavaScript
/*本示例判断如果第一个演示文稿的第一张幻灯片上第一张图表的标题为“test”，则选中该图表的图表区。*/
function test() {
    let chart = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart
    if (chart.ChartTitle.Text == "test") {
        chart.ChartArea.Select()
    }
}
```
