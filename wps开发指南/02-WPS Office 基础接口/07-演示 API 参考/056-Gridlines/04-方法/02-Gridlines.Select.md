# Gridlines.Select

选择对象。



## 语法

express.**Select()**

express   一个代表 **Gridlines** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例判断如果活动演示文稿的第一张幻灯片中第一张图表的数值轴拥有主要网格线，则选中该网格线。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        let axis = shape.Chart.Axes(xlValue)
        if (axis.HasMajorGridlines) {
            axis.MajorGridlines.Select()
        }
    }
}
```


```JavaScript
/*本示例选中第一个演示文稿的第一张幻灯片上第一个图表的类别轴的次要网格线。*/
function test() {
    let axis = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.Axes(xlCategory)
    axis.MinorGridlines.Select()
}
```
