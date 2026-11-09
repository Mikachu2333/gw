# Series.MarkerSize

以磅为单位返回或设置数据标记的大小。可读/写 **Long** 类型。



## 语法

express.**MarkerSize**

express   一个代表 **Series** 对象的变量。

## 类型

number（int4 精度）

## 说明


该属性的值可以介于 2 到 72 之间。



## 示例


```JavaScript
/*本示例为活动演示文稿上第一张幻灯片中第一个图表的第一个系列上的所有数据标记设置数据标记大小。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.SeriesCollection(1).MarkerSize = 10
    }
}
```


```JavaScript
/*本示例显示第一篇演示文稿上第二张幻灯片中第一个图表的第三个系列上所有数据标记的大小。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(2).Shapes.Item(1)
    alert(shape.Chart.SeriesCollection(3).MarkerSize + "磅")
}
```
