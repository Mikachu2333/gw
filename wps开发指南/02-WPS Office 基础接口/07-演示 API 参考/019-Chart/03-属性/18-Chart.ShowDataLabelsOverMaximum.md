# Chart.ShowDataLabelsOverMaximum

返回或设置一个值，该值指示当数值大于数值轴上的最大值时是否显示数据标签。可读/写 **Boolean** 类型。



## 语法

express.**ShowDataLabelsOverMaximum**

express   一个代表 **Chart** 对象的变量。

## 类型

boolean

## 说明


如果您更改数值轴，使其小于数据点的大小，则可以使用该属性设置一个值，以指示是否显示数据标签。该属性只适用于二维图表。



## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片上第一张图表当值大于数值轴上的最大值时是否展示数据标签。*/
function test() {
    let chart = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart
    alert(chart.ShowDataLabelsOverMaximum)
}
```


```JavaScript
/*本示例将第一个演示文稿的第一张幻灯片上第二张图表设置为当值大于数值轴上的最大值时显示数据标签。*/
function test() {
    let chart = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart
    chart.ShowDataLabelsOverMaximum = true
}
```
