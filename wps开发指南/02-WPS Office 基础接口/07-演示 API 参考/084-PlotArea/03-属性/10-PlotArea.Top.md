# PlotArea.Top

以磅为单位返回或设置从对象的上边缘到图表区顶部（在图表上）的距离。可读/写 **Double** 类型。



## 语法

express.**Top**

express   一个代表 **PlotArea** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片上第一个图表的绘图区的上边缘到图表区顶部的距离。*/
function test() {
    let plotArea = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.PlotArea
    alert(plotArea.Top + " 磅")
}
```


```JavaScript
/*本示例设置第一个演示文稿的第一张幻灯片上第一个图表的绘图区的上边缘到图表区顶部的距离。*/
function test() {
    let plotArea = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.PlotArea
    plotArea.Top = 10
}
```
