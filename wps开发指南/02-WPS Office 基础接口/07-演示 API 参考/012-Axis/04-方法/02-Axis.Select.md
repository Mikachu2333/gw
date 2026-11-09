# Axis.Select

选择对象。



## 语法

express.**Select()**

express   一个代表 **Axis** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例选中活动演示文稿的第一张幻灯片上第一张图表的数值轴。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes(1)
    if (shape.HasChart) {
        shape.Chart.Axes(xlValue).Select()
    }
}
```


```JavaScript
/*本示例设置第一个演示文稿的第一张幻灯片上第二个图表的分类轴绘制数据点的顺序，并选中该分类轴。*/
function test() {
    let axis = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart.Axes(xlCategory)
    axis.ReversePlotOrder = true
    axis.Select()
}
```
