# ChartTitle.Select

选择对象。



## 语法

express.**Select()**

express   一个代表 **ChartTitle** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例选中活动演示文稿的第一张幻灯片上第一张图表的图表标题。*/
function test() {
    let chart = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart
    chart.ChartTitle.Select()
}
```


```JavaScript
/*本示例判断如果第一个演示文稿的第一张幻灯片上第一个图表的标题文本为“test”，则选中该标题。*/
function test() {
    let chartTitle = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.ChartTitle
    if (chartTitle.Caption == "test") {
        chartTitle.Select()
    }
}
```
