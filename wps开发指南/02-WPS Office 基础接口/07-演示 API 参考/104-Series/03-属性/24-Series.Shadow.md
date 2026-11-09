# Series.Shadow

返回或设置一个表示对象是否有阴影的值。可读/写 **Boolean** 类型。



## 语法

express.**Shadow**

express   一个代表 **Series** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置活动演示文稿上第一张幻灯片中第一个图表的第二个系列的阴影*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.SeriesCollection(2).Shadow = true
    }
}
```


```JavaScript
/*本示例显示第一篇演示文稿上第二张幻灯片中第一个图表的第三个系列是否具有阴影*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(2).Shapes.Item(1)
    if (shape.HasChart) {
        alert(shape.Chart.SeriesCollection(3).Shadow)
    }
}
```
