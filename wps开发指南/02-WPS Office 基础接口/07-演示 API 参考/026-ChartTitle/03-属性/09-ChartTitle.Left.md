# ChartTitle.Left

以磅为单位返回或设置对象左边缘至图表区左边缘的距离。可读/写 **Double** 类型。



## 语法

express.**Left**

express   一个代表 **ChartTitle** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片上第一张图表的图表标题左边缘到图表区左边缘的距离设置为0磅，并显示。*/
function test() {
    let chart = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart
    chart.ChartTitle.Left = 0
    alert("图表标题左边缘到图表区左边缘的距离为:" + chart.ChartTitle.Left)
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第一个图表的标题左边缘到图表区左边缘的距离。*/
function test() {
    let chartTitle = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.ChartTitle
    alert(chartTitle.Left)
}
```
