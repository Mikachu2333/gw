# Axis.Crosses

返回或设置指定坐标轴与其他坐标轴相交的点。可读/写 **XlAxisCrosses** 类型。



## 语法

express.**Crosses**

express   一个代表 **Axis** 对象的变量。

## 类型

XlAxisCrosses

## 说明


该属性对雷达图无效。对于三维图表，该属性只能应用于数值轴并指示由分类轴所定义的平面与数值轴相交的位置。

该属性既可用于分类轴，也可用于数值轴。在分类轴上， **xlAxisCrossesMinimum** 使数值轴在第一个分类处与之相交，而 **xlAxisCrossesMaximum** 使数值轴在最后一个分类处与之相交。

请注意，根据坐标轴的不同， **xlAxisCrossesMinimum** 和 **xlAxisCrossesMaximum** 可能有不同的含义。



## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片中第一张图表的数值轴设置为与分类轴在最大 x 轴值处相交。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.Axes(xlCategory).Crosses = xlAxisCrossesMaximum
    }
}
```


```JavaScript
/*本示例将第一个演示文稿的第一张幻灯片上第二个图表设置为数值轴与分类轴在该分类轴的相交位置由WPP决定，并通知用户。*/
function test() {
    let axis = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart.Axes(xlCategory)
    axis.Crosses = xlAxisCrossesAutomatic
    alert("数值轴与分类轴在分类轴的相交位置由WPP决定")
}
```
