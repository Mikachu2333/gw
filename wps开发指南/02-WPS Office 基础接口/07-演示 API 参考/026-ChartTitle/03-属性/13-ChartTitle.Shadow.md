# ChartTitle.Shadow

返回或设置一个表示对象是否有阴影的值。可读/写 **Boolean** 类型。



## 语法

express.**Shadow**

express   一个代表 **ChartTitle** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片上第一张图表的图表标题的阴影设置为可见。*/
function test() {
    let chart = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart
    chart.ChartTitle.Shadow = true
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第一个图表的图表标题的阴影是否可见。*/
function test() {
    let chartTitle = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.ChartTitle
    alert(chartTitle.Shadow)
}
```
