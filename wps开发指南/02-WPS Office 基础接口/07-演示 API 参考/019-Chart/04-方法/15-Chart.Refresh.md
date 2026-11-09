# Chart.Refresh

立即重新绘制指定的图表。



## 语法

express.**Refresh()**

express   一个代表 **Chart** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例将重新绘制活动演示文稿的第一张幻灯片的第一个图表。*/
function test() {
    ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.Refresh()
}
```


```JavaScript
/*本示例判断如果第一个演示文稿的第一张幻灯片上第二张图表的标题为“test”，则重新绘制该图表。*/
function test() {
    let chart = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart
    if (chart.ChartTitle.Text == "test") {
        chart.Refresh()
    }
}
```
