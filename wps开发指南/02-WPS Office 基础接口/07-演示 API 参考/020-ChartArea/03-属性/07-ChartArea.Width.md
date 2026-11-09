# ChartArea.Width

以磅为单位返回或设置对象的宽度。可读/写 **Double** 类型。



## 语法

express.**Width**

express   一个代表 **ChartArea** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片中第一张图表的图表区的宽度。*/
function test() {
    let chartArea = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.ChartArea
    alert(chartArea.Width)
}
```


```JavaScript
/*本示例将第一个演示文稿的第一张幻灯片上第一个图表的图表区的宽度设置为400磅。*/
function test() {
    let chartArea = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.ChartArea
    chartArea.Width = 400
}
```
