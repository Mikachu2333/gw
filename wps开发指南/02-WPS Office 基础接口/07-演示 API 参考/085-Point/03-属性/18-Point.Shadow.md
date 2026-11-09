# Point.Shadow

返回或设置一个表示对象是否有阴影的值。可读/写 **Boolean** 类型。



## 语法

express.**Shadow**

express   一个代表 **Point** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将第一个演示文稿的第一张幻灯片上第一个图表的第二个系列的第一个数据点的阴影设置为可见。*/
function test() {
    let point = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).Points(1)
    point.Shadow = true
}
```


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片中第一个图表的第一个系列的第四个数据点是否带有阴影。*/
function test() {
    let point = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(1).Points(4)
    alert(point.Shadow)
}
```
