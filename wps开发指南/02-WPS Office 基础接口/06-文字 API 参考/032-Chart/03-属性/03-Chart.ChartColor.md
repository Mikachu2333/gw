# Chart.ChartColor

返回或设置一个用于表示图表配色方案的整数。可读/写 **Variant** 类型。



## 语法

express.**ChartColor**

express   一个代表 **Chart** 对象的变量。

## 类型

any

## 说明


图表配色方案编号为 1 到 17;此属性的设置对应于 **“图表工具设计”** 功能区选项卡上的 **“更改颜色”** 库中显示的配色方案。



## 示例


```JavaScript
/*本示例显示用于表示活动文档上第一张图表的图表配色方案的整数。*/
function test() {
    let chart = ActiveDocument.InlineShapes(1).Chart
    alert(chart.ChartColor)
}
```


```JavaScript
/*本示例设置用于表示第一个文档上第一张图表的图表配色方案的整数。*/
function test() {
    let chart = Application.Documents.Item(1).InlineShapes(1).Chart
    chart.ChartColor = 5
}
```
