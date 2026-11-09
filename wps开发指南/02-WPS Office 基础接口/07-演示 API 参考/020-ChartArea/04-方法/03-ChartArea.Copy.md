# ChartArea.Copy

将 **ChartArea** 对象复制到剪贴板。



## 语法

express.**Copy()**

express   一个代表 **ChartArea** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片中第一个图表的图表区域复制到剪贴板。*/
function test() {
    let chart = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart
    chart.ChartArea.Copy()
}
```


```JavaScript
/*本示例将第一个演示文稿的第一张幻灯片上第一个图表的图表区域复制到剪贴板。*/
function test() {
    let chartArea = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.ChartArea
    chartArea.Copy()
}
```
