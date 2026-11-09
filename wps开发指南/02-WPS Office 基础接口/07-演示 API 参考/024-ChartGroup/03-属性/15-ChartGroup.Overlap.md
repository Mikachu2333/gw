# ChartGroup.Overlap

指定放置条形图和柱形图的方式。可读/写 **Long** 类型。



## 语法

express.**Overlap**

express   一个代表 **ChartGroup** 对象的变量。

## 类型

number（int4 精度）

## 说明


仅适用于二维条形图和二维柱形图。

可以将该属性设置为介于 –100 到 100 之间的值。如果将该属性设置为 –100，条形之间有一个条形的间距。如果重叠比例为 0（零），条形之间没有间距（一个条形紧挨着另一条形）。如果重叠比例为 100，所有条形将完全重叠。



## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片的第一个图表中第一个图表组的重叠比例设置为 -50。本示例应在包含两个或更多系列的二维柱形图上运行。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.ChartGroups(1).Overlap = -50
    }
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第一个图表的第一个图表组的重叠比例。*/
function test() {
    let chartGroup = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.ChartGroups(1)
    alert(chartGroup.Overlap)
}
```
