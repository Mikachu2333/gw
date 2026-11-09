# Series.PlotOrder

返回或设置指定图表组中选定数据系列的绘制顺序。可读/写 **Long** 类型。



## 语法

express.**PlotOrder**

express   一个代表 **Series** 对象的变量。

## 类型

number（int4 精度）

## 说明


只能设置图表组内的绘制顺序（在图表中包含若干图表类型的情况下，不能设置整个图表的绘制顺序）。图表组指具有相同图表类型和子类型的数据系列的集合。

更改某个系列的绘制顺序将导致同一图表组内其他数据系列的绘制顺序的必要调整。



## 示例


```JavaScript
/*本示例显示活动演示文稿上第一张幻灯片中第一个图表的第二个系列的绘制顺序。应在包含两个或更多系列的 2D 柱形图上运行该示例。*/
function test() {
    let Shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (Shape.HasChart) {
        alert(Shape.Chart.ChartGroups(1).SeriesCollection(2).PlotOrder)
    }
}
```


```JavaScript
/*本示例显示第一篇演示文稿上第二张幻灯片中第一个图表的第三个系列的绘制顺序。应在包含三个或更多系列的 2D 柱形图上运行该示例。*/
function test() {
    let Shape = Presentations.Item(1).Slides.Item(2).Shapes.Item(1)
    if (Shape.HasChart) {
        alert(Shape.Chart.ChartGroups(1).SeriesCollection(3).PlotOrder)
    }
}
```
