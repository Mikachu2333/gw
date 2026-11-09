# Axis.HasMajorGridlines

如果坐标轴有主要网格线，则为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**HasMajorGridlines**

express   一个代表 **Axis** 对象的变量。

## 类型

boolean

## 说明


只有主要坐标轴组中的坐标轴才能有网格线。



## 示例


```JavaScript
/*本示例判断如果活动演示文稿的第一张幻灯片中第一张图表的数值轴拥有主要网格线，则将其线条样式设置为点划相间线。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        let axis = shape.Chart.Axes(xlValue)
        if (axis.HasMajorGridlines) {
            axis.MajorGridlines.Border.LineStyle = xlDashDot
        }
    }
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第二个图表的类别轴是否展示主要网格线。*/
function test() {
    let axis = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart.Axes(xlCategory)
    alert(axis.HasMajorGridlines)
}
```
