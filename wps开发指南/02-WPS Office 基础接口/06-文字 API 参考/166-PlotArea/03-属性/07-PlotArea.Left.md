# PlotArea.Left

以磅为单位返回或设置对象左边缘至图表区左边缘的距离。可读/写 **Double** 类型。



## 语法

express.**Left**

express   一个代表 **PlotArea** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例显示活动文档上第一个内嵌图表的绘图区的左边缘到图表区左边缘的距离。*/
function test() {
    let plotArea = ActiveDocument.InlineShapes.Item(1).Chart.PlotArea
    alert(plotArea.Left + " 磅")
}
```


```JavaScript
/*本示例设置第一个文档上第一个形状中图表的绘图区的左边缘到图表区左边缘的距离。*/
function test() {
    let plotArea = Documents.Item(1).Shapes.Item(1).Chart.PlotArea
    plotArea.Left = 2
}
```
