# ChartGroup.GapWidth

对于条形图和柱形图：以条形或柱形宽度百分数的形式返回或设置条形簇或柱形簇之间的距离。对于复合饼图或复合条饼图：返回或设置图表的第一节和第二节之间的间距。可读/写 **Long** 类型。



## 语法

express.**GapWidth**

express   一个代表 **ChartGroup** 对象的变量。

## 类型

number（int4 精度）

## 说明


该属性的值必须介于 0 到 500 之间。



## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片中第一个图表的图表组柱形簇之间的间距设置为柱形宽度的 50%。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.ChartGroups(1).GapWidth = 50
    }
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第一个图表的第一个图表组的列簇间距。*/
function test() {
    let chartGroup = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.ChartGroups(1)
    alert(chartGroup.GapWidth)
}
```
