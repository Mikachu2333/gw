# PlotArea.Width

以磅为单位返回或设置对象的宽度。可读/写 **Double** 类型。



## 语法

express.**Width**

express   一个代表 **PlotArea** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例在光标处插入活动文档上第一个内嵌图表的绘图区的宽度。*/
function test() {
    let plotArea = ActiveDocument.InlineShapes.Item(1).Chart.PlotArea
    Selection.TypeText(plotArea.Width + " 磅")
}
```


```JavaScript
/*本示例将第一个文档上第一个形状中图表的绘图区的宽度设置为原宽度的一半。*/
function test() {
    let plotArea = Documents.Item(1).Shapes.Item(1).Chart.PlotArea
    plotArea.Width /= 2
}
```
