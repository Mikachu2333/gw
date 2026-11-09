# ChartTitle.Top

返回或设置一个以磅为单位的距离，它代表从对象的上边缘到图表区顶部（在图表上）的距离。可读/写 **Double** 类型。



## 语法

express.**Top**

express   一个代表 **ChartTitle** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例设置活动演示文稿的第一张幻灯片上第一张图表的标题到图表区顶部的距离为 0 磅，并显示。*/
function test() {
    let chart = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart
    chart.ChartTitle.Top = 0
    alert("图表标题到图表区顶部的距离为：" + chart.ChartTitle.Top + "磅")
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第一个图表的标题到图表区顶部的距离。*/
function test() {
    let chartTitle = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.ChartTitle
    alert(`图表标题到图表区顶部的距离：${chartTitle.Top} 磅`)
}
```
