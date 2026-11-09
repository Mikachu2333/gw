# Axis.MinorGridlines

返回指定坐标轴的次要网格线。只读 **[Gridlines](#TODO)** 对象。



## 语法

express.**MinorGridlines**

express   一个代表 **Axis** 对象的变量。

## 类型

Gridlines

## 说明


只有主要坐标轴组中的坐标轴才能有网格线。



## 示例


```JavaScript
/*本示例判断如果活动演示的第一张幻灯片中第一张图表的数值轴拥有次要网格线，则将其线条样式设置为虚线。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        let axis = shape.Chart.Axes(xlValue)
        if (axis.HasMinorGridlines) {
            axis.MinorGridlines.Border.LineStyle = xlDash
        }
    }
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第二个图表的类别轴的次要网格线的名称。*/
function test() {
    let axis = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart.Axes(xlCategory)
    alert(axis.MinorGridlines.Name)
}
```
