# TickLabels.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **TickLabels** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例删除活动演示文稿的第一张幻灯片上第一个图表的数值轴的刻度线标签。*/
function test() {
    let tickLabels = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.Axes(xlValue).TickLabels
    tickLabels.Delete()
}
```


```JavaScript
/*本示例判断如果第一个演示文稿的第一张幻灯片上第一个图表的标题为“test”，则删除该图表上类别轴的刻度线标签。*/
function test() {
    let chart = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart
    if (chart.ChartTitle.Caption == "test") {
        chart.Axes(xlCategory).TickLabels.Delete()
    }
}
```
