# PlotArea.Height

以磅为单位返回或设置对象的高度。可读/写 **Double** 类型。



## 语法

express.**Height**

express   一个代表 **PlotArea** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例显示活动文档上第一个内嵌图表的绘图区的高度。*/
function test() {
    let plotArea = ActiveDocument.InlineShapes.Item(1).Chart.PlotArea
    alert(plotArea.Height + " 磅")
}
```


```JavaScript
/*本示例将第一个文档上第一个形状中图表的绘图区的高度设置为原高度的一半。*/
function test() {
    let plotArea = Documents.Item(1).Shapes.Item(1).Chart.PlotArea
    plotArea.Height /= 2
}
```
