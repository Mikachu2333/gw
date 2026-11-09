# Series.Smooth

如果为折线图或散点图启用曲线平滑，则为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**Smooth**

express   一个代表 **Series** 对象的变量。

## 类型

boolean

## 说明


该属性仅适用于折线图、散点图。



## 示例


```JavaScript
/*本示例为活动演示文稿上第一张幻灯片中第一个图表的第二个系列启用曲线平滑效果。应在 2D 折线图上运行示例。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.SeriesCollection(2).Smooth = true
    }
}
```


```JavaScript
/*本示例显示第一篇演示文稿上第二张幻灯片中第一个图表的第三个系列是否启用曲线平滑效果。应在 2D 折线图上运行示例。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(2).Shapes.Item(1)
    if (shape.HasChart) {
        alert(shape.Chart.SeriesCollection(3).Smooth)
    }
}
```
