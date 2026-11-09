# Legend.Select

选择对象。



## 语法

express.**Select()**

express   一个代表 **Legend** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例选中活动演示文稿的第一张幻灯片上第一个图表的图例。*/
function test() {
    let legend = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.Legend
    legend.Select()
}
```


```JavaScript
/*本示例判断如果对第一个演示文稿的第一张幻灯片上第一个图表应用图例，则选中该图表的图例。*/
function test() {
    let chart = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart
    if (chart.HasLegend) {
        chart.Legend.Select()
    }
}
```
