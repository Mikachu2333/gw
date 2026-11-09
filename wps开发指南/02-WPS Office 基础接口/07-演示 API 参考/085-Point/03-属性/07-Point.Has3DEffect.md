# Point.Has3DEffect

如果数据点具有三维外观，则为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**Has3DEffect**

express   一个代表 **Point** 对象的变量。

## 类型

boolean

## 说明


该属性仅适用于气泡图。



## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片上第一个图表中第一个系列的第四个数据点是否具有三维外观。*/
function test() {
    let point = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(1).Points(4)
    alert(point.Has3DEffect)
}
```


```JavaScript
/*本示例将第一个演示文稿的第一张幻灯片上第一个图表的第一系列的第二个数据点的三维外观设置为可见。*/
function test() {
    let point = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(1).Points(2)
    point.Has3DEffect = true
}
```
