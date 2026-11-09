# Point.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **Point** 对象的变量。

## 返回值

any

## 说明


删除 **Point** 对象将删除整个系列。



## 示例


```JavaScript
/*本示例删除活动演示文稿第一张幻灯片的第一个图表的第三个系列的第三个数据点，这将导致删除整个第三系列。*/
function test() {
    let chart = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart
    chart.SeriesCollection(3).Points(3).Delete()
}
```


```JavaScript
/*本示例删除第一个演示文稿第一张幻灯片上第一个图表的第二个系列的第二个数据点，这将导致删除整个第二系列。*/
function test() {
    let point = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).Points(1)
    point.Delete()
}
```
