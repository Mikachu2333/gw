# Axis.MajorGridlines

返回指定坐标轴的主要网格线。只读 **[Gridlines](#TODO)** 对象。



## 语法

express.**MajorGridlines**

express   一个代表 **Axis** 对象的变量。

## 类型

Gridlines

## 说明


只有主要坐标轴组中的坐标轴才能有网格线。



## 示例


```JavaScript
/*本示例为活动文档中第一个图表的数值轴设置主要网格线的线条样式。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes(1)
    if (inlineShape.HasChart) {
        let axis = inlineShape.Chart.Axes(xlValue)
        if (axis.HasMajorGridlines) {
            axis.MajorGridlines.Border.LineStyle = xlDash
        }
    }
}
```


```JavaScript
/*本示例将第一个文档中第一张图表的分类轴的主要网格线删除。*/
function test() {
    let axis = Documents.Item(1).InlineShapes(1).Chart.Axes(xlCategory)
    axis.MajorGridlines.Delete()
}
```
