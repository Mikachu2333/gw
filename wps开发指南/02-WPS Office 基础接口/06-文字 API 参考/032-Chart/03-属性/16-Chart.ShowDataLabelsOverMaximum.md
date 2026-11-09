# Chart.ShowDataLabelsOverMaximum

返回或设置表示在数值大于数值轴上的最大值时是否显示数据标签的值。可读/写 **Boolean** 类型。



## 语法

express.**ShowDataLabelsOverMaximum**

express   一个代表 **Chart** 对象的变量。

## 类型

boolean

## 说明


如果您更改数值轴，使其小于数据点的大小，则可以使用该属性设置一个值，以指示是否显示数据标签。 此属性仅适用于 2D 图表。



## 示例


```JavaScript
/*本示例显示活动文档上第一张图表当值大于数值轴上的最大值时是否展示数据标签。*/
function test() {
    let chart = ActiveDocument.InlineShapes(1).Chart
    alert(chart.ShowDataLabelsOverMaximum)
}
```


```JavaScript
/*本示例将第一个文档上第一张图表设置为当值大于数值轴上的最大值时显示数据标签。*/
function test() {
    let chart = Application.Documents.Item(1).InlineShapes(1).Chart
    chart.ShowDataLabelsOverMaximum = true
}
```
