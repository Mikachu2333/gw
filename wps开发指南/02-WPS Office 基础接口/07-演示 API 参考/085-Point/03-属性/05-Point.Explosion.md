# Point.Explosion

返回或设置饼图或圆环图的扇区的分离程度值。可读/写 **Long** 类型。



## 语法

express.**Explosion**

express   一个代表 **Point** 对象的变量。

## 类型

number（int4 精度）

## 说明


如果没有分离（即扇区的中心与饼图中心重合），该属性将返回 0（零）。



## 示例


```JavaScript
/*本示例设置活动演示文稿的第一张幻灯片中第一个图表的第一个系列的第二个数据点的分离程度值。应在饼图上运行该示例。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.SeriesCollection(1).Points(2).Explosion = 20
    }
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第一个图表的第一个系列的第二个数据点的分离程度值。*/
function test() {
    let point = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(1).Points(2)
    alert(point.Explosion)
}
```
