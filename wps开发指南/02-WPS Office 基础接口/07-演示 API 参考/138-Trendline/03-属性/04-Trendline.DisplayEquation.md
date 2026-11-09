# Trendline.DisplayEquation

如果在图表上显示趋势线的公式（与 R 平方值显示在同一数据标签中），则该属性值为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**DisplayEquation**

express   一个代表 **Trendline** 对象的变量。

## 类型

boolean

## 说明


将该属性设为 **True** 可自动启用数据标签。



## 示例


```JavaScript
/*此示例显示活动演示文稿的第一张幻灯片上第一个图表的第一个系列的第一条趋势线的 R 平方值和公式。本示例应在具有第一个系列趋势线的 2D 柱形图上运行。*/
function test() {
    let trendline = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(1).Trendlines(1)
    trendline.DisplayRSquared = true
    trendline.DisplayEquation = true
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第一个图表的第三个数据系列的第一条趋势线的公式是否可见。*/
function test() {
    let trendline = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(3).Trendlines(1)
    alert(trendline.DisplayEquation)
}
```
