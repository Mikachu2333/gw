# Trendline.DisplayEquation

如果图表中显示趋势线公式（与 R 平方值位于同一数据标签中），则为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**DisplayEquation**

express   一个代表 **Trendline** 对象的变量。

## 类型

boolean

## 说明


将该属性设置为 **True** 将自动应用数据标签。



## 示例


```JavaScript
/*此示例显示活动文档上第一个内嵌图表的第一个系列的第一条趋势线的 R 平方值和公式。本示例应在具有第一个系列趋势线的 2D 柱形图上运行。*/
function test() {
    let trendline = ActiveDocument.InlineShapes.Item(1).Chart.SeriesCollection(1).Trendlines(1)
    trendline.DisplayRSquared = true
    trendline.DisplayEquation = true
}
```


```JavaScript
/*本示例显示第一个文档上的第一个形状中图表的第三个数据系列的第一条趋势线的公式是否可见。*/
function test() {
    let trendline = Documents.Item(1).Shapes.Item(1).Chart.SeriesCollection(3).Trendlines(1)
    alert(trendline.DisplayEquation)
}
```
