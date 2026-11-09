# ChartFont.Color

返回或设置对象的主要颜色。可读/写 **Variant** 类型。



## 语法

express.**Color**

express   一个代表 **ChartFont** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例设置活动演示文稿的第一张幻灯片上第一张图表的数值轴上刻度线标签的颜色。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.Axes(xlValue).TickLabels.Font.Color = RGB(0, 255, 0)
    }
}
```


```JavaScript
/*本示例将第一个演示文稿的第一张幻灯片上第一张图表的模拟运算表设置为可见，并设置模拟运算表的字体的字号和颜色，然后设置字体加粗。*/
function test() {
    let chart = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart
    chart.HasDataTable = true
    let dataTable = chart.DataTable
    dataTable.Font.Size = 9.5
    dataTable.Font.Color = RGB(255, 0, 0)
    dataTable.Font.Bold = true
}
```
