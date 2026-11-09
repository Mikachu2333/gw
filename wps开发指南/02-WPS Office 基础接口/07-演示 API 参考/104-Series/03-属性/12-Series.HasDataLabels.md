# Series.HasDataLabels

如果系列有数据标签，则该属性值为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**HasDataLabels**

express   一个代表 **Series** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例为活动演示文稿上第一张幻灯片中第一个图表的第三个系列启用数据标签。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        let series = shape.Chart.SeriesCollection(3)
        series.HasDataLabels = true
        series.ApplyDataLabels(xlValue)
    }
}
```


```JavaScript
/*本示例显示第一篇演示文稿上第二张幻灯片中第一个图表的第二个系列是否具有数据标签*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(2).Shapes.Item(1)
    alert(shape.Chart.SeriesCollection(2).HasDataLabels)
}
```
