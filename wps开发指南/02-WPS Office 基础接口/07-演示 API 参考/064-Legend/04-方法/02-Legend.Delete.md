# Legend.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **Legend** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例判断如果活动演示文稿的第一张幻灯片上第一个图表的标题文本为“test”，则删除该图表的图例。*/
function test() {
    let chart = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart
    if (chart.ChartTitle.Caption == "test") {
        chart.Legend.Delete()
    }
}
```


```JavaScript
/*本示例删除第一个演示文稿的第一张幻灯片上第一个图表的图例。*/
function test() {
    let chart = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart
    chart.Legend.Delete()
}
```
