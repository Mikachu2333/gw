# Axis.ReversePlotOrder

如果 WPP 绘制数据点的顺序是从最后一个数据点到第一个数据点，则该属性值为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**ReversePlotOrder**

express   一个代表 **Axis** 对象的变量。

## 类型

boolean

## 说明


该属性不能用于雷达图。



## 示例


```JavaScript
/*本示例在数值轴上为活动演示文稿的第一张幻灯片中第一个图表绘制数据点，绘制的顺序是从最后一个数据点到第一个数据点。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.Axes(xlValue).ReversePlotOrder = true
    }
}
```


```JavaScript
/*本示例判断第一个演示文稿的第一张幻灯片上第二个图表的分类轴绘制数据点的顺序，并通知用户。*/
function test() {
    let axis = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart.Axes(xlCategory)
    if (axis.ReversePlotOrder) {
        alert("分类轴按照从后向前的顺序绘制数据点")
    } else {
        alert("分类轴按照从前向后的顺序绘制数据点")
    }
}
```
