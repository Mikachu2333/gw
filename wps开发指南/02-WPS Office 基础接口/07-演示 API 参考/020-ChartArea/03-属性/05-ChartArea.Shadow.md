# ChartArea.Shadow

返回或设置一个值，该值确定对象是否具有阴影。可读/写 **Boolean** 类型。



## 语法

express.**Shadow**

express   一个代表 **ChartArea** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片中第一张图表的图表区是否具有阴影。*/
function test() {
    let chartArea = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.ChartArea
    alert(chartArea.Shadow)
}
```


```JavaScript
/*本示例将第一个演示文稿的第一张幻灯片上第一张图表的图表区设置为具有阴影。*/
function test() {
    let chart = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart
    chart.ChartArea.Shadow = true
}
```
