# ChartArea.Clear

清除整个对象。



## 语法

express.**Clear()**

express   一个代表 **ChartArea** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例清除活动演示文稿的第一张幻灯片中第一个图表的图表区域（图表数据和格式设置）。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.ChartArea.Clear()
    }
}
```


```JavaScript
/*本示例清除第一个演示文稿的第一张幻灯片上第一个图表的图表区域（图表数据和格式设置）。*/
function test() {
    let chartArea = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.ChartArea
    chartArea.Clear()
}
```
