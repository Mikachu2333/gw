# Point.Select

选择对象。



## 语法

express.**Select()**

express   一个代表 **Point** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例选中活动演示文稿的第一张幻灯片上第一个图表的第一个系列的第一个数据点。*/
function test() {
    let point = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(1).Points(1)
    point.Select()
}
```


```JavaScript
/*本示例判断如果第一个演示文稿的第一张幻灯片上第一个图表的第一个数据系列的第三个数据点的名称为“S1P3”，则选中该数据点。*/
function test() {
    let point = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(1).Points(3)
    if (point.Name == "S1P3") {
        point.Select()
    }
}
```
