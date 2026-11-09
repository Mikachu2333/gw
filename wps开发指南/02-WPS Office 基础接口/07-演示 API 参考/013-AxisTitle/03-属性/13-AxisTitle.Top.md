# AxisTitle.Top

以磅为单位返回或设置对象上边缘至图表区上边缘的距离。可读/写 **Double** 类型。



## 语法

express.**Top**

express   一个代表 **AxisTitle** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片中第一张图表的数值轴标题上边缘到图表区上边缘的距离设置为 20 磅。*/
function test() {
    let chart = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart
    let axisTitle = chart.Axes(xlValue).AxisTitle
    axisTitle.Top = 20
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片中第二张图表的分类轴标题上边缘到图表区上边缘的距离。*/
function test() {
    let axisTitle = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart.Axes(xlCategory).AxisTitle
    alert(`分类轴标题到图表区顶部的距离：${axisTitle.Top}磅`)
}
```
