# ChartGroup.FirstSliceAngle

以度为单位返回或设置饼图或圆环图的第一扇区的角度（从垂直方向顺时针计算）。可读/写 **Long** 类型。



## 语法

express.**FirstSliceAngle**

express   一个代表 **ChartGroup** 对象的变量。

## 类型

number（int4 精度）

## 说明


该属性仅应用于饼图、三维饼图和圆环图。它可以是介于 0 到 360 之间的值。



## 示例


```JavaScript
/*本示例设置活动演示文稿的第一张幻灯片中第一个图表的第一个图表组中第一个扇区的角度。应在二维饼图上运行示例。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.ChartGroups(1).FirstSliceAngle = 15
    }
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第一个图表的第一个图表组中第一个扇区的角度。*/
function test() {
    let chartGroup = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.ChartGroups(1)
    alert(chartGroup.FirstSliceAngle)
}
```
