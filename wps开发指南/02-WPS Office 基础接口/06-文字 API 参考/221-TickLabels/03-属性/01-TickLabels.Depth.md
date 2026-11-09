# TickLabels.Depth

返回分类轴刻度标签的级别数。只读 **Long** 类型。



## 语法

express.**Depth**

express   一个代表 **TickLabels** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动文档上第一个内嵌图表的分类轴的刻度线标签的级别数。*/
function test() {
    let tickLabels = ActiveDocument.InlineShapes.Item(1).Chart.Axes(xlCategory).TickLabels
    alert(tickLabels.Depth)
}
```


```JavaScript
/*本示例判断如果第一个文档上第一个形状中图表的标题为“example_2”，则显示该图表上类别轴的刻度线标签的级别数。*/
function test() {
    let chart = Documents.Item(1).Shapes.Item(1).Chart
    if (chart.ChartTitle.Caption == "example_2") {
        alert(chart.Axes(xlCategory).TickLabels.Depth)
    }
}
```
