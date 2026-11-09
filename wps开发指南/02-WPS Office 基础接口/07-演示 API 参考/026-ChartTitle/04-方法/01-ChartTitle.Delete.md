# ChartTitle.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **ChartTitle** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例删除活动演示文稿的第一张幻灯片中第一个图表的标题。*/
function test() {
    let chartTitle = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.ChartTitle
    chartTitle.Delete()
}
```


```JavaScript
/*本示例判断如果第一个演示文稿的第一张幻灯片上第一个图表的标题文本为“test”，则删除该标题。*/
function test() {
    let chartTitle = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.ChartTitle
    if (chartTitle.Caption == "test") {
        chartTitle.Delete()
    }
}
```
