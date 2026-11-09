# Series.Values

返回或设置系列中所有值的集合。可读/写 **Variant** 类型。



## 语法

express.**Values**

express   一个代表 **Series** 对象的变量。

## 类型

any

## 说明


此属性值可以是图表的工作表中某一区域的地址或常量值的数组，但不能是两者的组合。有关详细信息，请参阅示例。



## 示例


```JavaScript
/*本示例设置活动演示文稿上第一张幻灯片中第一个图表的第一个系列值。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.SeriesCollection(1).Values = "=Sheet1!F2:F5"
    }
}
```


```JavaScript
/*本示例为第一篇演示文稿上第二张幻灯片中第一个图表的第三个系列的数据点赋以常量值。若要为每个单独的数据点赋以常量值，则必须使用数组。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(2).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.SeriesCollection(3).Values = [1, 2, 3, 4]
    }
}
```
