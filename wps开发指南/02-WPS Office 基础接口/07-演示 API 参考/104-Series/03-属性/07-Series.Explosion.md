# Series.Explosion

返回或设置饼图或圆环图的扇区的分离程度值。可读/写 **Long** 类型。



## 语法

express.**Explosion**

express   一个代表 **Series** 对象的变量。

## 类型

number（int4 精度）

## 说明


如果没有分离（即扇区的中心与饼图中心重合），该属性将返回 0（零）。



## 示例


```JavaScript
/*本示例设置活动演示文稿上第一张幻灯片中第一个图表的第一个系列的分解程度值。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.SeriesCollection(1).Explosion = 10
    }
}
```


```JavaScript
/*本示例显示第一篇演示文稿上第二张幻灯片中第一个图表的第一个系列的分解程度值。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(2).Shapes.Item(1)
    alert(shape.Chart.SeriesCollection(1).Explosion)
}
```
